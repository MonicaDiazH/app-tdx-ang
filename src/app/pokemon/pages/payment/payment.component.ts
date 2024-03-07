import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../../../services/payment.service";
import {Router} from "@angular/router";
import {PokemonService} from "../../../services/pokemon.service";
import {Trainer} from "../../../interfaces/trainer.interfaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styles: []
})
export class PaymentComponent implements OnInit {
  paymentStatus: string = '';
  trainerImage: any;
  isButtonDisabled: boolean = false;

  public paymentForm: FormGroup = this.fb.group({
    cardNumber: ['', [Validators.required]],
    delaySeconds: ['', [Validators.required]]
  })

  constructor(private paymentService: PaymentService, private router: Router, private pokemonService: PokemonService, private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.profileTrainer == undefined) {
      this.router.navigate(['/pokemon/profile']);
    }

    this.trainerImage = this.pokemonService.getTrainerImage();
  }

  get profileTrainer(): Trainer {
    return this.pokemonService.getTrainer();
  }

  processPayment() {
    if (this.paymentForm.valid) {
      this.disableButton();
      this.paymentStatus = '';
      this.paymentService.processPayment(this.paymentForm.controls['cardNumber'].value, this.paymentForm.controls['delaySeconds'].value).subscribe({
        next: (response) => {
          if (response > 4999) {
            this.paymentStatus = 'Se ha excedido el tiempo de espera, intente nuevamente.';
          } else {
            this.paymentStatus = 'Compra realizada con éxito.';
          }
          this.enableButton();
        }, error: (error) => {
          console.error(error);
          this.paymentStatus = 'No se pudo completar la compra, intente nuevamente.';
          this.enableButton();
        }
      });
      this.paymentForm.controls['cardNumber'].setValue("");
      this.paymentForm.controls['delaySeconds'].setValue("");
    }
  }

  disableButton() {
    this.isButtonDisabled = true;
  }

  enableButton() {
    this.isButtonDisabled = false;
  }

}
