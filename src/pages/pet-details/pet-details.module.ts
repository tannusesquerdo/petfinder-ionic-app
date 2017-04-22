import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetDetails } from './pet-details';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PetDetails,
  ],
  imports: [
    IonicPageModule.forChild(PetDetails),
    PipesModule
  ],
  exports: [
    PetDetails
  ]
})
export class PetDetailsModule {}
