import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {MatInputModule} from "@angular/material/input";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { PokemonSelectionComponent } from './pages/pokemon-selection/pokemon-selection.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ProfilePageComponent,
    PokemonSelectionComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatInputModule,
    MaterialModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PokemonModule { }
