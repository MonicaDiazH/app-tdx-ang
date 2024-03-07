import {Component, OnInit} from '@angular/core';
import {Trainer} from "../../../interfaces/trainer.interfaces";
import {PokemonService} from "../../../services/pokemon.service";
import {Router} from "@angular/router";
import {PokemonResponse} from "../../../interfaces/pokemon-response.interfaces";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styles: [
  ]
})
export class ViewProfileComponent implements OnInit{
  baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit() {
    if (this.profileTrainer == undefined) {
      this.router.navigate(['/pokemon/profile']);
    }
  }

  get profileTrainer(): Trainer {
    return this.pokemonService.getTrainer();
  }

  get pokemonsSelected(): PokemonResponse[] {
    return this.pokemonService.pokemonList;
  }

  getPokemonImageUrl(pokemon: PokemonResponse): string {
    return `${this.baseImgUrl}${pokemon.id}.svg`;
  }

  getStatName(stat: string){
    switch (stat) {
      case 'hp':
        return 'HP';
      case 'attack':
        return 'Ataque';
      case 'defense':
        return 'Defensa';
      case 'special-attack':
        return 'Ataque Especial';
      case 'special-defense':
        return 'Defensa Especial';
      case 'speed':
        return 'Velocidad';
      default:
        return stat;
    }
  }
}
