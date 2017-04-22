import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetsList } from './pets-list';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PetsList
  ],
  imports: [
    IonicPageModule.forChild(PetsList),
    PipesModule
  ],
  exports: [
    PetsList
  ]
})
export class PetsListModule {}
