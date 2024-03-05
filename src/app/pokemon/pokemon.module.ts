import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {MatInputModule} from "@angular/material/input";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    PokemonPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    SearchPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatInputModule,
    MaterialModule,
    NgOptimizedImage
  ]
})
export class PokemonModule { }
