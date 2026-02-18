import { Directive, inject, OnInit, DestroyRef } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { DsfrFormInputComponent, DsfrFormRadioComponent, DsfrFormSelectComponent, DsfrSeverityConst } from '@edugouvfr/ngx-dsfr';

@Directive({
  selector: 'dsfr-form-input, dsfr-radio, dsfr-select',
  standalone: true,
})
export class AutoErrorMessageDirective implements OnInit {
  // Injecter le composant hôte
  private readonly host = inject(DsfrFormInputComponent, { optional: true })
    ?? inject(DsfrFormRadioComponent, { optional: true })
    ?? inject(DsfrFormSelectComponent, { optional: true })

  // 2. Injecter le controlleur (formControlName ou formControl)
  private readonly ngControl = inject(NgControl, { self: true, optional: true });

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    if (!this.ngControl || !this.ngControl.control || !this.host) return;

    const control = this.ngControl.control;

    // Vérification initiale du validator required
    this.updateRequiredStatus();

    // Écouter les changements de valeur et de statut (validité)
    merge(control.valueChanges, control.statusChanges)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateRequiredStatus();
        this.updateErrorMessage();
      });

    // Appel initial
    this.updateErrorMessage();
  }

  private updateRequiredStatus() {
    const control = this.ngControl?.control;

    if (control && this.host) {
      this.host.required = control.hasValidator(Validators.required);
    }
  }

  private updateErrorMessage() {
    const control = this.ngControl?.control;

    if (control && control.invalid && (control.dirty || control.touched)) {
      // Logique pour générer le message (équivalent à votre pipe formError)
      this.host!.message = this.getErrorMessage(control.errors);
      this.host!.messageSeverity = 'error';
      this.host!.ariaInvalid = 'true';

    } else {
      this.host!.message = '';
      this.host!.messageSeverity = DsfrSeverityConst.INFO;
      this.host!.ariaInvalid = undefined;
    }

  }

  private getErrorMessage(errors: any): string {
    if (!errors) return '';
    if (errors.required) return 'Ce champ est obligatoire';
    else if (errors.email) return 'Email invalide';
    else if (errors.message) return errors.message;
    // ...
    else console.log(errors)
    return 'Validator non géré dans AutoErrorMessageDirective';
  }
}
