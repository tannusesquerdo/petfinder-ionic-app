import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pet-filter',
  templateUrl: 'pet-filter.html',
})
export class PetFilter {
  pet: string = "dog";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetFilter');
  }

  selectedDog() {
    this.pet = 'dog';
  }

  selectedCat() {
    this.pet = 'cat';
  }

  selectedOther() {
    this.pet = 'other';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
