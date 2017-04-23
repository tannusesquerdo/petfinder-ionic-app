import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

@IonicPage()
@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html',
})
export class FavoriteList {

  pets: Object[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public user: UserData,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriteList');
    this.pets = this.user._favorites;
  }

  petDetails(pet) {
    this.navCtrl.push('PetDetails', { pet: pet });
  }

}
