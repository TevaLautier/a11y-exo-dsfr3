import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DsfrFormInputComponent, DsfrFormRadioComponent,DsfrRadio } from "@edugouvfr/ngx-dsfr";
import { AutoErrorMessageDirective } from '../../../../ui/forms/auto-error-message-directive';

@Component({
  selector: 'app-personne-form-page',
  imports: [DsfrFormInputComponent, ReactiveFormsModule,DsfrFormRadioComponent],  
  templateUrl: './personne-form-page.html',
  styleUrl: './personne-form-page.css',
})
export class PersonneFormPage {
  form=new FormGroup({
    nom:new FormControl('',Validators.required),
    sexe:new FormControl('',Validators.required),
  });
  sexeOptions= signal<DsfrRadio[]>([
    {value:"M",label:"Masculin"}, {value:"F",label:"Feminin"}
  ]);
}
