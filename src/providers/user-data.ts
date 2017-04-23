import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserData {

  _favorites: Object[] = [];

  constructor(
    public events: Events,
    public storage: Storage
  ) {}

  hasFavorite(pet: Object): boolean {
    return (this._favorites.indexOf(pet) > -1);
  };

  addFavorite(pet: Object): void {
    this._favorites.push(pet);
  };

  removeFavorite(pet: Object): void {
    let index = this._favorites.indexOf(pet);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

}
