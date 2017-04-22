webpackJsonp([0],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pets_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(321);
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeSexSize; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AgeSexSize = (function () {
    function AgeSexSize() {
    }
    AgeSexSize.prototype.transform = function (pet, args) {
        var age = args[0].$t;
        var sex = args[1].$t;
        var size = args[2].$t;
        sex = this.translateSex(sex);
        size = this.translateSize(size);
        return age + ' • ' + sex + ' • ' + size;
    };
    AgeSexSize.prototype.translateSex = function (sex) {
        var s;
        switch (sex) {
            case 'M':
                s = 'Male';
                break;
            case 'F':
                s = 'Female';
                break;
            default:
                s = 'Unknown';
        }
        return s;
    };
    AgeSexSize.prototype.translateSize = function (size) {
        var s;
        switch (size) {
            case 'S':
                s = 'Small';
                break;
            case 'M':
                s = 'Medium';
                break;
            case 'L':
                s = 'Large';
                break;
            case 'XL':
                s = 'Extra Large';
                break;
            default:
                s = 'Unknown';
        }
        return s;
    };
    return AgeSexSize;
}());
AgeSexSize = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'ageSexSize'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AgeSexSize);

//# sourceMappingURL=age-sex-size.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedFormat; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BreedFormat = (function () {
    function BreedFormat() {
    }
    BreedFormat.prototype.transform = function (breeds) {
        var breed_names = [];
        if (breeds instanceof Array) {
            for (var _i = 0, breeds_1 = breeds; _i < breeds_1.length; _i++) {
                var item = breeds_1[_i];
                breed_names.push(item.$t);
            }
            return breed_names.map(function (a) { return a; }).join(' & ');
        }
        else {
            return breeds.$t;
        }
    };
    return BreedFormat;
}());
BreedFormat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'breedFormat'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BreedFormat);

//# sourceMappingURL=breed-format.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_thumb_photo__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_safe_style__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_breed_format__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_age_sex_size__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__pipes_thumb_photo__["a" /* ThumbPhoto */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_safe_style__["a" /* SafeStyle */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_breed_format__["a" /* BreedFormat */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_age_sex_size__["a" /* AgeSexSize */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__pipes_thumb_photo__["a" /* ThumbPhoto */],
            __WEBPACK_IMPORTED_MODULE_2__pipes_safe_style__["a" /* SafeStyle */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_breed_format__["a" /* BreedFormat */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_age_sex_size__["a" /* AgeSexSize */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeStyle; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeStyle = (function () {
    function SafeStyle(sanitizer) {
        this.sanitizer = sanitizer;
        this.sanitizer = sanitizer;
    }
    SafeStyle.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    return SafeStyle;
}());
SafeStyle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'safeStyle'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]])
], SafeStyle);

//# sourceMappingURL=safe-style.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbPhoto; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThumbPhoto = (function () {
    function ThumbPhoto() {
    }
    ThumbPhoto.prototype.transform = function (value, args) {
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item['@id'] === '1') {
                if (item['@size'] == 'pn') {
                    return item['$t'];
                }
            }
        }
    };
    return ThumbPhoto;
}());
ThumbPhoto = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'thumbPhoto'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ThumbPhoto);

//# sourceMappingURL=thumb-photo.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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