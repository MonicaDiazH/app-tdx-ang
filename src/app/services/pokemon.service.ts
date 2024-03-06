import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import {PokemonList} from "../models/pokemon.list";
import {PokemonDetail} from "../models/pokemon.detail";

@Injectable({providedIn: 'root'})
export class PokemonService {
    private baseUrl = 'https://pokeapi.co/api/v2/';

    constructor(private http: HttpClient) { }


    getPokemonList(offset: number, limit: number = 20) : Observable<any> {
        return this.http.get<any>(this.baseUrl + 'pokemon');
    }

    getPokemonDetail(pokemon: number | string): Observable<any> {
        return this.http.get<any>(this.baseUrl + 'pokemon/' + pokemon);
    }

}
