import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

import { ModalSponsorPet } from '../modal-sponsor-pet/modal-sponsor-pet';
import { ModalAskAboutPet } from '../modal-ask-about-pet/modal-ask-about-pet';
import { UserData } from '../../providers/user-data';

@IonicPage()
@Component({
  selector: 'page-pet-details',
  templateUrl: 'pet-details.html',
})
export class PetDetails {
  pet: any;
  private photos: any[] = [];
  private gallery: any[] = [];
  favoriteIcon: boolean;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public user: UserData,
  ) {
      this.pet = this.navParams.get('pet');
      this.photos = this.pet.media.photos.photo;
      this.createPhotos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetDetails');
    this.favoriteIcon = this.user.hasFavorite(this.pet)
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

  addFavorite(pet: any) {

    if (this.user.hasFavorite(pet)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(pet, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(pet);
      this.favoriteIcon = true;

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            //slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      alert.present();
    }
  }

  removeFavorite(pet: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this pet from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(pet);
            this.favoriteIcon = false;
            // close the sliding item and hide the option buttons
            //slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }
}
