import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DsfrFormInputComponent } from "@edugouvfr/ngx-dsfr";
import { AutoErrorMessageDirective } from '../../../../ui/forms/auto-error-message-directive';

@Component({
  selector: 'app-personne-form-page',
  imports: [DsfrFormInputComponent, ReactiveFormsModule,AutoErrorMessageDirective],  
  templateUrl: './personne-form-page.html',
  styleUrl: './personne-form-page.css',
})
export class PersonneFormPage {
  form=new FormGroup({
    nom:new FormControl('',Validators.required)
  });
}
