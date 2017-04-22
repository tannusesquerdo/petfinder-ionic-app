import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Petfinder } from '../../providers/petfinder';

@IonicPage()
@Component({
  selector: 'page-pets-list',
  templateUrl: 'pets-list.html',
})
export class PetsList {
  loader: any;
  pets: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _pfService: Petfinder
  ) {
    this.pets = this.navParams.get('pets');
    console.log(this.pets);
  }

  ionViewDidLoad() {}

  doInfinite(infiniteScroll) {
    this._pfService.getMorePets()
      .then((result) => {
        console.log(result);
        this.pets.push(result);
        console.log(this.pets);
        infiniteScroll.complete();
      });
  }

  petDetails(pet) {
    this.navCtrl.push('PetDetails', { pet: pet });
  }

}
