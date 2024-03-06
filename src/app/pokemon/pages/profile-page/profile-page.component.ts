import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "../../../shared/shared.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit{

  public profileForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    hobbies: [''],
    birthday: ['', [Validators.required]],
    identity: ['', [Validators.required]],

  })

  documentType: string = 'Documento';
  age: number = 0;

  hobbiesList = [
    "Jugar Fútbol",
    "Jugar Basquetball",
    "Jugar Tennis",
    "Jugar Voleibol",
    "Jugar Fifa",
    "Jugar Videojuegos"
  ]

  constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
    this.profileForm.controls['birthday'].valueChanges.subscribe(value => {
      if (value) {
        const birthdayDate: Date = new Date(value);
        const today: Date = new Date();
        const age: number = today.getFullYear() - birthdayDate.getFullYear();
        this.age = age;

        if (age >= 18) {
          this.documentType = 'Documento';
        } else {
          this.documentType = 'Carnet de Minoridad';
        }
      }
    })
  }

  onSubmit() {
    //this.profileForm.markAllAsTouched();
    const data =
      { fullName: this.profileForm.controls['fullName'].value,
        age: this.age,
        hobbies: this.profileForm.controls['hobbies'].value,
        identity: this.profileForm.controls['identity'].value,
        documentType: this.documentType
      };
    this.sharedService.sendData(data);
    this.router.navigate(['/pokemon/selection']);
  }
}
