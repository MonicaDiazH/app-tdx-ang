import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "../../../shared/shared.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {PokemonList} from "../../../models/pokemon.list";
import {PokemonService} from "../../../services/pokemon.service";

@Component({
  selector: 'app-pokemon-selection',
  templateUrl: './pokemon-selection.component.html',
  styles: []
})
export class PokemonSelectionComponent implements OnDestroy, OnInit {
  fullName: string = '';
  age: number = 0;
  hobbies: string = '';
  identity: string = '';
  documentType: string = '';
  message:string = '¡Ya casi terminamos!';
  private subscription: Subscription;

  constructor(private sharedService: SharedService, private router: Router, private pokemonService: PokemonService) {
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

  ngOnInit() {
    this.getPage(1);
  }

  backToProfile() {
    this.router.navigate(['/pokemon/profile']);
  }

  getPage(offset: number) {
    this.pokemonService.getPokemonList(offset)
      .subscribe((list: PokemonList[]) => {
        console.log(list);
      });
  }

}
