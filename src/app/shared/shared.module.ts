import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import {ThreeDigitsPipe} from "./pipes/threeDigits.pipe";



@NgModule({
  declarations: [
    NotFoundPageComponent,
    ThreeDigitsPipe
  ],
  exports: [
    NotFoundPageComponent,
    ThreeDigitsPipe
  ]
})
export class SharedModule { }
