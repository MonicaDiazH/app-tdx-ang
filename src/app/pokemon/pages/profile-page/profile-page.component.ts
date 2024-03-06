import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent {

  public profileForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    hobbies: [''],
    birthday: ['', [Validators.required]],
    identity: ['', [Validators.required]],

  })

  tipoDocumento: string = 'Documento';

  hobbiesList = [
    {code: "1", description: "Jugar Fútbol"},
    {code: "2", description: "Jugar Basquetball"},
    {code: "3", description: "Jugar Tennis"},
    {code: "4", description: "Jugar Voleibol"},
    {code: "5", description: "Jugar Fifa"},
    {code: "6", description: "Jugar Videojuegos"}
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm.controls['birthday'].valueChanges.subscribe(value => {
      if (value) {
        const birthdayDate: Date = new Date(value);
        const today: Date = new Date();
        const eighteenYearsAgo: Date = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        if (birthdayDate <= eighteenYearsAgo) {
          this.tipoDocumento = 'Documento';
        } else {
          this.tipoDocumento = 'Carnet de Minoridad';
        }
      }
    })
  }

  onSubmit() {
    this.profileForm.markAllAsTouched();
  }
}
