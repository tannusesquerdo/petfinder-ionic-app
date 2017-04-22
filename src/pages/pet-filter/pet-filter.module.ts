import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetFilter } from './pet-filter';

@NgModule({
  declarations: [
    PetFilter,
  ],
  imports: [
    IonicPageModule.forChild(PetFilter),
  ],
  exports: [
    PetFilter
  ]
})
export class PetFilterModule {}
