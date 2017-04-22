import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TweenMax } from 'gsap';

import { Petfinder } from '../../providers/petfinder';
import { PetFilter } from '../pet-filter/pet-filter';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  splash: boolean = true;
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private _pfService: Petfinder,
    public modalCtrl: ModalController
    ) {}

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 7100);
  }

  tapEvent(event, petType) {
    TweenMax.to(event.target.parentNode, .25, {scale: 0.9, reversed: true});

    this.presentLoading();

    this._pfService.getPets(petType)
      .then((result) => {
        this.navCtrl.push('PetsList', { pets: result })
          .catch(()=> console.log('Pets is undefinned'));

        this.loader.dismiss();
      }, (err) => {
        console.log(err);
        this.loader.dismiss();
      });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Loading Results...'
    });

    this.loader.present();
  }

  openFilter() {
    let modal = this.modalCtrl.create(PetFilter);
    modal.present();
  }

}
