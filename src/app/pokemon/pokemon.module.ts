import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {MatInputModule} from "@angular/material/input";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    LayoutPageComponent,
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
