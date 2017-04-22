import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GalleryModal } from 'ionic-gallery-modal';
import { ZoomableImage } from 'ionic-gallery-modal';

import { MyApp } from './app.component';
import { Petfinder } from '../providers/petfinder';
import { ModalSponsorPet } from '../pages/modal-sponsor-pet/modal-sponsor-pet';
import { ModalAskAboutPet } from '../pages/modal-ask-about-pet/modal-ask-about-pet';
import { PetFilter } from '../pages/pet-filter/pet-filter';

@NgModule({
  declarations: [
    MyApp,
    GalleryModal,
    ZoomableImage,
    ModalSponsorPet,
    ModalAskAboutPet,
    PetFilter
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GalleryModal,
    ModalSponsorPet,
    ModalAskAboutPet,
    PetFilter
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Petfinder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
