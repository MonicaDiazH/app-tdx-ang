import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {PokemonService} from "../../../services/pokemon.service";
import {PokemonResponse} from "../../../interfaces/pokemon-response.interfaces";
import {Trainer} from "../../../interfaces/trainer.interfaces";

@Component({
  selector: 'app-pokemon-selection',
  templateUrl: './pokemon-selection.component.html',
  styles: []
})
export class PokemonSelectionComponent implements OnInit{
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  message: string = '¡Ya casi terminamos!';

  constructor(private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    if(this.profileTrainer == undefined){
      this.router.navigate(['/pokemon/profile']);
    }
  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.pokemonService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

  get pokemonsSelected():PokemonResponse[]{
    return this.pokemonService.pokemonList;
  }

  get profileTrainer():Trainer{
    return this.pokemonService.getTrainer();
  }

  backToProfile() {
    this.router.navigate(['/pokemon/profile']);
  }

}
