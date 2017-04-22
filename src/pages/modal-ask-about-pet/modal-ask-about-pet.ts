import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-modal-ask-about-pet',
  templateUrl: 'modal-ask-about-pet.html',
})
export class ModalAskAboutPet {
  profile: {
    firstname?: string,
    lastname?: string,
    phone?: number,
    email?: string,
    comments?: string
  } = {};
  submitted = false;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAskAboutPet');
  }

  onAsk(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.viewCtrl.dismiss(this.profile);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
