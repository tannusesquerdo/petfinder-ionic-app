import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-sponsor-pet',
  templateUrl: 'modal-sponsor-pet.html',
})
export class ModalSponsorPet {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSponsorPet');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
