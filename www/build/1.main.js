webpackJsonp([1],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet_details__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(327);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetDetailsModule", function() { return PetDetailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PetDetailsModule = (function () {
    function PetDetailsModule() {
    }
    return PetDetailsModule;
}());
PetDetailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pet_details__["a" /* PetDetails */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__pet_details__["a" /* PetDetails */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pet_details__["a" /* PetDetails */]
        ]
    })
], PetDetailsModule);

//# sourceMappingURL=pet-details.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_sponsor_pet_modal_sponsor_pet__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_ask_about_pet_modal_ask_about_pet__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PetDetails = (function () {
    function PetDetails(alertCtrl, navCtrl, navParams, modalCtrl, user) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.photos = [];
        this.gallery = [];
        this.pet = this.navParams.get('pet');
        this.photos = this.pet.media.photos.photo;
        this.createPhotos();
    }
    PetDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PetDetails');
        this.favoriteIcon = this.user.hasFavorite(this.pet);
    };
    PetDetails.prototype.createPhotos = function () {
        for (var _i = 0, _a = this.photos; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item['@size'] == 'x') {
                this.gallery.push({
                    url: item['$t']
                });
            }
        }
    };
    PetDetails.prototype.openGallery = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ionic_gallery_modal__["GalleryModal"], {
            photos: this.gallery,
            initialSlide: 0
        });
        modal.present();
    };
    PetDetails.prototype.sponsorMe = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_sponsor_pet_modal_sponsor_pet__["a" /* ModalSponsorPet */]);
        modal.present();
    };
    PetDetails.prototype.askAboutMe = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_ask_about_pet_modal_ask_about_pet__["a" /* ModalAskAboutPet */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
        });
        modal.present();
    };
    PetDetails.prototype.addFavorite = function (pet) {
        if (this.user.hasFavorite(pet)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(pet, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(pet);
            this.favoriteIcon = true;
            // create an alert instance
            var alert = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            //slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert.present();
        }
    };
    PetDetails.prototype.removeFavorite = function (pet, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this pet from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(pet);
                        _this.favoriteIcon = false;
                        // close the sliding item and hide the option buttons
                        //slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    return PetDetails;
}());
PetDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pet-details',template:/*ion-inline-start:"/Volumes/Dados/Aulas/petfinder/petfinder-ionic-app/src/pages/pet-details/pet-details.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addFavorite(pet)">\n        <ion-icon [name]="favoriteIcon ? \'md-heart\' : \'md-heart-outline\'"></ion-icon>\n      </button>\n      <button ion-button icon-only>\n        <ion-icon ios="md-share" md="md-share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid no-padding class="pet">\n    <ion-row class="pet-photos-slider">\n      <ion-buttons end>\n        <button ion-button icon-only class="btn-expand" (click)="openGallery()">\n          <ion-icon ios="md-expand" md="md-expand"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-col class="pet-images">\n        <ion-slides class="image-slider" loop="false" slidesPerView="1" pager="true">\n        <ion-slide *ngFor="let img of gallery">\n          <img src="{{img.url}}" class="thumb-img"/>\n        </ion-slide>\n      </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="infos-container">\n        <h3 class="pet-name">{{pet.name.$t}}</h3>\n        <p class="pet-breed" [innerHTML]="pet.breeds.breed | breedFormat"></p>\n        <p class="pet-specs" [innerHTML]="pet | ageSexSize: [pet.age, pet.sex, pet.size]"></p>\n        <div class="rescue-info">\n          <a href="#">{{pet.shelterId.$t}}</a><br>\n          <span>{{pet.contact.city.$t}}</span>\n          <span>{{pet.contact.state.$t}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="infos-about">\n        <h3 class="pet-about">ABOUT</h3>\n        <p class="pet-description">{{pet.description.$t}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <button ion-button round outline (click)="sponsorMe()">SPONSOR ME</button>\n    <button ion-button round color="secondary" (click)="askAboutMe()">ASK ABOUT ME</button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/Dados/Aulas/petfinder/petfinder-ionic-app/src/pages/pet-details/pet-details.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */]) === "function" && _e || Object])
], PetDetails);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pet-details.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map