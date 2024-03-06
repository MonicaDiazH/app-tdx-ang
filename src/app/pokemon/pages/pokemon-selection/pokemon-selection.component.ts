import {Component, OnDestroy} from '@angular/core';
import {SharedService} from "../../../shared/shared.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-selection',
  templateUrl: './pokemon-selection.component.html',
  styles: []
})
export class PokemonSelectionComponent implements OnDestroy {
  fullName: string = '';
  age: number = 0;
  hobbies: string = '';
  identity: string = '';
  documentType: string = '';
  message:string = '¡Ya casi terminamos!';
  private subscription: Subscription;

  constructor(private sharedService: SharedService, private router: Router) {
    this.subscription = this.sharedService.data$.subscribe(data => {
      if (data) {
        this.fullName = data['fullName'];
        this.age = data['age'];
        this.hobbies = data['hobbies'];
        this.identity = data['identity'];
        this.documentType = data['documentType'];
        this.message = '¡Ya casi terminamos!';
      }
      else{
        this.message = 'Completa los datos en el formulario anterior';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  backToProfile() {
    this.router.navigate(['/pokemon/profile']);
  }

}
