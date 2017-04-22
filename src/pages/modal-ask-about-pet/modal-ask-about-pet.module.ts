import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAskAboutPet } from './modal-ask-about-pet';

@NgModule({
  declarations: [
    ModalAskAboutPet,
  ],
  imports: [
    IonicPageModule.forChild(ModalAskAboutPet),
  ],
  exports: [
    ModalAskAboutPet
  ]
})
export class ModalAskAboutPetModule {}
