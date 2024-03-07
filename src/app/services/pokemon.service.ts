import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {PokemonResponse} from "../interfaces/pokemon-response.interfaces";
import {catchError, of, tap} from "rxjs";
import {Trainer} from "../interfaces/trainer.interfaces";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({providedIn: 'root'})
export class PokemonService {
  private basePokeApiUrl = 'https://pokeapi.co/api/v2/';
  private trainer: Trainer | undefined;
  public pokemonList: PokemonResponse[] = [];
  private trainerImage: any;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  setTrainerImage(image: any): void {
    this.trainerImage = image;
  }

  getTrainerImage(): any {
    return this.trainerImage;
  }

  setTrainer(trainer: Trainer): void {
    this.trainer = trainer;
  }

  getTrainer(): any {
    return this.trainer;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "ok");
  }

  private addPokemon(pokemon: PokemonResponse) {
    if (this.pokemonList.length > 2) {
      this.openSnackBar("No se puede seleccionar más de 3 pokemon.");
    } else {
      if (pokemon.id == 0) {
        this.openSnackBar("Pokémon no encontrado");
      } else if (this.pokemonExists(pokemon)) {
        this.openSnackBar("Pokémon ya se encuentra seleccionado");
      } else {
        this.pokemonList.push(pokemon);
      }
    }
  }

  private pokemonExists(pokemon: PokemonResponse): boolean {
    return this.pokemonList.some(p => p.id === pokemon.id && p.name === pokemon.name);
  }

  searchTag(tag: string): void {
    if (tag.length == 0) return;
    tag = tag.toLowerCase();
    this.http.get<PokemonResponse>(this.basePokeApiUrl + 'pokemon/' + tag)
      .pipe(
        tap(console.error),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.log('El Pokémon no fue encontrado');
            return of({
              id: 0,
              name: 'No encontrado',
            });
          } else {
            console.error('Ocurrió un error:', error);
            throw error;
          }
        })
      )
      .subscribe((resp) => {
        this.addPokemon(resp);
      })
  }

  removePokemon(pokemon: PokemonResponse) {
    this.pokemonList = this.pokemonList.filter(p => p.id !== pokemon.id && p.name !== pokemon.name);
  }
}
