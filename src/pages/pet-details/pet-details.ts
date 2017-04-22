import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
import { ModalSponsorPet } from '../modal-sponsor-pet/modal-sponsor-pet';
import { ModalAskAboutPet } from '../modal-ask-about-pet/modal-ask-about-pet';

@IonicPage()
@Component({
  selector: 'page-pet-details',
  templateUrl: 'pet-details.html',
})
export class PetDetails {
  pet: any;
  private photos: any[] = [];
  private gallery: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
      this.pet = this.navParams.get('pet');
      this.photos = this.pet.media.photos.photo;
      this.createPhotos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetDetails');
  }

  private createPhotos() {
    for (let item of this.photos) {
      if(item['@size'] == 'x') {
        this.gallery.push({
          url: item['$t']
        });
      }
    }
  }

  private openGallery() {
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: this.gallery,
      initialSlide: 0
    });
    modal.present();
  }

  private sponsorMe() {
    let modal = this.modalCtrl.create(ModalSponsorPet);
    modal.present();
  }

  private askAboutMe() {
    let modal = this.modalCtrl.create(ModalAskAboutPet);
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }
}
