import {Component, Input} from '@angular/core';
import {PokemonResponse} from "../../../interfaces/pokemon-response.interfaces";
import {PokemonService} from "../../../services/pokemon.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styles: [
  ]
})
export class CardListComponent {
  baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

  @Input()
  public pokemonsSelected: PokemonResponse[] = [];

  constructor(private pokemonService: PokemonService) {}

  getPokemonImageUrl(pokemon: PokemonResponse): string {
    return `${this.baseImgUrl}${pokemon.id}.svg`;
  }

  removePokemon(pokemon: PokemonResponse){
    this.pokemonService.removePokemon(pokemon);
  }
}
