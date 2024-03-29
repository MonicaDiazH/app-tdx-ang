import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {PokemonSelectionComponent} from "./pages/pokemon-selection/pokemon-selection.component";
import {ViewProfileComponent} from "./pages/view-profile/view-profile.component";
import {PaymentComponent} from "./pages/payment/payment.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'profile', component: ProfilePageComponent},
      {path: 'selection', component: PokemonSelectionComponent},
      {path: 'view-profile', component: ViewProfileComponent},
      {path: 'payment', component: PaymentComponent},
      {path: '**', redirectTo: 'profile'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
