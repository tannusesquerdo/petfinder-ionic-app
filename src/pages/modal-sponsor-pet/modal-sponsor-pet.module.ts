import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSponsorPet } from './modal-sponsor-pet';

@NgModule({
  declarations: [
    ModalSponsorPet,
  ],
  imports: [
    IonicPageModule.forChild(ModalSponsorPet),
  ],
  exports: [
    ModalSponsorPet
  ]
})
export class ModalSponsorPetModule {}
