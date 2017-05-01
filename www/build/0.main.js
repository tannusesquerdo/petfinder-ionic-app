webpackJsonp([0],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pets_list__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(327);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsListModule", function() { return PetsListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PetsListModule = (function () {
    function PetsListModule() {
    }
    return PetsListModule;
}());
PetsListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pets_list__["a" /* PetsList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__pets_list__["a" /* PetsList */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__pets_list__["a" /* PetsList */]
        ]
    })
], PetsListModule);

//# sourceMappingURL=pets-list.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_petfinder__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetsList = (function () {
    function PetsList(navCtrl, navParams, _pfService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._pfService = _pfService;
        this.pets = this.navParams.get('pets');
        console.log(this.pets);
    }
    PetsList.prototype.ionViewDidLoad = function () { };
    PetsList.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this._pfService.getMorePets()
            .then(function (result) {
            console.log(result);
            _this.pets.push(result);
            console.log(_this.pets);
            infiniteScroll.complete();
        });
    };
    PetsList.prototype.petDetails = function (pet) {
        this.navCtrl.push('PetDetails', { pet: pet });
    };
    return PetsList;
}());
PetsList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPage"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pets-list',template:/*ion-inline-start:"/Volumes/Dados/Aulas/petfinder/petfinder-ionic-app/src/pages/pets-list/pets-list.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon ios="md-funnel" md="md-funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid class="pet">\n    <ion-row class="pet-box" *ngFor="let pet of pets.pet" (click)="petDetails(pet)">\n      <ion-col class="pet-image">\n        <div class="image-bg"\n          [style.background-image]="\'url(\' + (pet.media.photos.photo | thumbPhoto) + \')\' | safeStyle">\n        </div>\n      </ion-col>\n      <ion-col class="infos-container">\n        <p class="pet-name">{{pet.name.$t}}</p>\n        <p class="pet-breed" [innerHTML]="pet.breeds.breed | breedFormat"></p>\n        <p class="pet-specs" [innerHTML]="pet | ageSexSize: [pet.age, pet.sex, pet.size]"></p>\n        <div class="rescue-info">\n          <a href="#">{{pet.shelterId.$t}}</a><br>\n          <span>{{pet.contact.city.$t}}</span>\n          <span>{{pet.contact.state.$t}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n      loadingText="Loading more pets">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Dados/Aulas/petfinder/petfinder-ionic-app/src/pages/pets-list/pets-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_petfinder__["a" /* Petfinder */]])
], PetsList);

//# sourceMappingURL=pets-list.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map