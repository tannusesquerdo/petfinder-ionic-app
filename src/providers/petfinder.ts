import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Petfinder {
  private URL: string = 'http://api.petfinder.com/';
  private KEY: string = 'ffe1edab016b1e88806a2872dd5e1404';
  pets : any;
  offset: any;
  url_mount: any;

  constructor(public http: Http) {}

  getPets(petType?: string, city?: string) {
    let animal = petType ? petType : '';
    let location = city ? city : 'Canada';
    let method = 'pet.find';
    this.url_mount = this.URL+method+'?key='+this.KEY+'&location='+location+'&animal='+animal+'&format=json';
    let url_local = '../assets/data/pets.json';

    return new Promise((resolve, reject) => {
      this.http.get(this.url_mount)
      .map(res => res.json())
      .subscribe(data => {
        this.offset = data.petfinder.lastOffset.$t;
        this.pets = data.petfinder.pets;
        resolve(this.pets);
      }, (err) => {
        reject(err);
      });
    });
  }

  getMorePets() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url_mount+'&offset'+this.offset)
        .map(res => res.json())
        .subscribe(data => {
          this.offset = data.petfinder.lastOffset.$t;
          resolve(data.petfinder.pets);
        }, (err) => {
          reject(err);
        });
    });
  }
}