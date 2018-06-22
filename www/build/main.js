webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.rootPage = HomePage_1;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegPage */];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegPage */]);
    };
    HomePage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LogPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\home\home.html"*/'<ion-header>\n\n<!--<ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>-->\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="loadingDiv">\n\n    <img src="assets/imgs/background.png" alt="Loading Image">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4.5>\n\n          <button id="leftButton" (click)="loginPage()">Log In</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4.5>\n\n          <button id="rightButton" (click)="registerPage()">Register</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n      <ion-col col-1></ion-col>\n\n        <ion-col col-10>\n\n          <button id="middleButton">Learn about ERP-Coin</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegPage = /** @class */ (function () {
    function RegPage(storage, toastCtrl, navCtrl, http) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.regUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), fName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), sName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), confirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), vehicleModel: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), vehicleReg: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    RegPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.present();
    };
    RegPage.prototype.registerUser = function (value) {
        var _this = this;
        var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(value.email)) {
            this.presentToast("Please enter a valid email address");
        }
        else if (value.password != value.confirmPassword) {
            this.presentToast("Please ensure that your passwords match");
        }
        else {
            var jsonArr = {};
            jsonArr.username = value.username;
            jsonArr.password = value.password;
            jsonArr.email = value.email;
            jsonArr.name = value.fName;
            jsonArr.surname = value.sName;
            jsonArr.walletAddress = value.vehicleModel;
            //jsonArr.vehicleRegistration = value.vehicleReg;
            this.http.post("/user/add", jsonArr).subscribe(function (response) {
                //Handle successful register
                //alert("Success" +response);
                console.log(response);
                _this.presentToast("Registration successful! Please log in");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LogPage */]);
            }, function (error) {
                //Handle error
                alert("Error" + error);
                console.log("Error");
            });
            //window.alert("Success!");
        }
    };
    RegPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    RegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\register\register.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Registration</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="divForm">\n\n    <form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input formControlName="username" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Email Address</ion-label>\n\n                <ion-input formControlName="email" type="email"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Name</ion-label>\n\n                <ion-input formControlName="fName" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Surname</ion-label>\n\n                <ion-input formControlName="sName" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Confim password</ion-label>\n\n                <ion-input formControlName="confirmPassword" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Vehicle Model</ion-label>\n\n                <ion-input formControlName="vehicleModel" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Vehicle Registration</ion-label>\n\n                <ion-input formControlName="vehicleReg" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button type="submit" class="submitBtn" block>Register</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */]])
    ], RegPage);
    return RegPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    url: "http://192.168.137.1:8080",
    interval: 1,
    area: 1
};
//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conservation_conservation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rewards_rewards__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sendErp_sendErp__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receiveErp_receiveErp__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AccountPage = /** @class */ (function () {
    function AccountPage(storage, toastCtrl, http, navCtrl, modalCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.rootPage = AccountPage_1;
        this.user = {};
        this.user.name = "Dave";
        this.user.balance = 10;
    }
    AccountPage_1 = AccountPage;
    AccountPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Logged Out',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AccountPage.prototype.sendErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sendErp_sendErp__["a" /* SendPage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    AccountPage.prototype.receiveErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__receiveErp_receiveErp__["a" /* ReceivePage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        //this.navCtrl.push(AccountPage);
        this.http.get("/user/logout").subscribe(function (data) {
            _this.presentToast();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        }, function (error) {
            alert("Error: " + error);
        });
    };
    AccountPage.prototype.rewardsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rewards_rewards__["a" /* RewardsPage */]);
    };
    AccountPage.prototype.conservationAreas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__conservation_conservation__["a" /* ConservationPage */]);
    };
    AccountPage = AccountPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-title>My Account</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="userAccountDiv">\n\n    <ion-grid>\n\n      <ion-row style="height:40vh;">\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4 >\n\n          <div id="leftDiv">\n\n            <p><b>Welcome {{user.name}}</b></p>\n\n            <div id="erpLogo"><img src="assets/imgs/background.png" alt="ERP Image"></div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <div id="rightDiv">\n\n            <p><b>ERP-Coin Balance:<br>{{user.balance}} ERP Coins</b></p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton" (click)="conservationAreas()">View List of Conservation Areas</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton" (click)="rewardsPage()">View Rewards</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton" (click)="sendErp()">Send ERP</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton" (click)="receiveErp()">Receive ERP</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton">Manage Account</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton">View Leaderboard</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton">Help and Support</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton" (click)="logout()">Logout</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
    var AccountPage_1;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConservationPage = /** @class */ (function () {
    function ConservationPage(http, navCtrl, storage) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.areas = [];
        this.area = {};
        this.http.get("/area/list").subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            //alert(data.text());
            _this.areas = jsonResp.areas;
        });
    }
    ConservationPage.prototype.picked = function (area) {
        //this.storage.set('area', area);
        //alert(area);
        __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* CONFIG */].area = area;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    ConservationPage.prototype.ionViewDidLoad = function () {
    };
    ConservationPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    ConservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\conservation\conservation.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n  <ion-title>Conservation Areas</ion-title>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-card *ngFor="let area of areas" (click)="picked(area.id)">\n          <ion-card-header>\n\n            {{area.name}}\n\n          </ion-card-header>\n          <ion-card-content>\n\n            <p>Province: {{area.province}}, City: {{area.city}}</p>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\conservation\conservation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ConservationPage);
    return ConservationPage;
}());

//# sourceMappingURL=conservation.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendAlert_sendAlert__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapPage = /** @class */ (function () {
    function MapPage(http, storage, navCtrl, modalCtrl) {
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.area;
        this.isTracking = false;
        this.patrol = {};
    }
    MapPage.prototype.ionViewDidLoad = function () {
        //this.storage.get('area').then(val=>{
        this.area = 1;
        //alert("Received area is: " +area);
        //while(this.area == "null")
        //{
        //this.storage.get('area').then(val=>{this.area = val;});
        //alert("Area is: "+this.area);
        //}
        //alert("New area is: "+area);
        //var polygonPoints:any = [];
        //polygonPoints = this.getPolygonPoints(area);
        //this.loadMap(polygonPoints);
        this.patrol = {};
        this.patrol.coins = 0;
        var polygonPoints = [
            { lat: 25.774, lng: -80.190 },
            { lat: 18.466, lng: -66.118 },
            { lat: 32.321, lng: -64.757 },
            { lat: 25.774, lng: -80.190 }
        ];
        this.LoadMap(this.area);
        this.trackMe();
        //this.alerts();
        //  });
    };
    MapPage.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition(function (position) {
                _this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                ;
                _this.showPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MapPage.prototype.showPosition = function (position) {
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        this.map.setZoom(80);
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: 'Got you!',
            icon: {
                url: "assets/imgs/people.png",
                scaledSize: new google.maps.Size(32, 32) // pixels
            }
        });
        this.sendLocation(location);
    };
    MapPage.prototype.sendLocation = function (location) {
        var _this = this;
        var jsonArr = {};
        jsonArr.location = location;
        this.http.post("/point/add/" + this.area, jsonArr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.coin) {
                alert("Yay, you got a coin!");
            }
            else {
                alert("Awww, you did not get a coin!");
            }
            if (!_this.myVar)
                clearInterval(_this.myVar);
            _this.myVar = setInterval(_this.sendLocation(location), __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].interval);
        }, function (error) {
            alert("Error: " + error);
        });
    };
    MapPage.prototype.alerts = function () {
        var _this = this;
        var jsonArr = {};
        jsonArr.location = "";
        this.http.post("/area/info", jsonArr).subscribe(function (data) {
            //alert("Success: " +data.text());
            var jsonResp = JSON.parse(data.text());
            //alert(jsonResp);
            if (jsonResp.success) {
                var iconPost = "Alert.png";
                var iconPre = "assets/imgs/";
                alertArr = [];
                alertArr = jsonResp.alerts;
                alertArr.forEach(function (alert) {
                    console.log("Alert: " + alert.secerity);
                    var iconSelection = iconPre + alert.severity + iconPost;
                    var contentString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">' + alert.title + '</h1>' +
                        '<div id="bodyContent">' +
                        '<p>' + alert.description + '</p>' +
                        '</div>' +
                        '</div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: alert.location,
                        map: _this.map,
                        title: alert.title,
                        icon: {
                            url: iconSelection,
                            scaledSize: new google.maps.Size(16, 16) // pixels
                        }
                    });
                    marker.addListener('click', function () {
                        infowindow.open(this.map, marker);
                    });
                });
            }
            else {
                alert("Invalid username/password combination");
            }
        }, function (error) {
            alert("Error: " + error);
        });
        var alertArr = [];
        var testalert = {};
        var iconPost = "Alert.png";
        var iconPre = "assets/imgs/";
        testalert.title = "Test Alert";
        testalert.description = "This is a sample description for ERP-Coin App Alerts.";
        testalert.severity = "red";
        testalert.location = { lat: 24.886, lng: -70.268 };
        alertArr.push(testalert);
        testalert = {};
        testalert.title = "Test Alert";
        testalert.description = "This is a sample description for ERP-Coin App Alerts.";
        testalert.severity = "orange";
        testalert.location = { lat: 23.886, lng: -70.268 };
        alertArr.push(testalert);
        testalert = {};
        testalert.title = "Test Alert";
        testalert.description = "This is a sample description for ERP-Coin App Alerts.";
        testalert.severity = "blue";
        testalert.location = { lat: 25.886, lng: -70.268 };
        alertArr.push(testalert);
        alertArr.forEach(function (alert) {
            console.log("Alert: " + alert.severity);
            var iconSelection = iconPre + alert.severity + iconPost;
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">' + alert.title + '</h1>' +
                '<div id="bodyContent">' +
                '<p>' + alert.description + '</p>' +
                '</div>' +
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            var marker = new google.maps.Marker({
                position: alert.location,
                map: _this.map,
                title: 'Test Alert',
                icon: {
                    url: iconSelection,
                    scaledSize: new google.maps.Size(16, 16) // pixels
                }
            });
            marker.addListener('click', function () {
                infowindow.open(this.map, marker);
            });
        });
    };
    MapPage.prototype.LoadMap = function (areaName) {
        var _this = this;
        this.http.get("/area/info/" + areaName).subscribe(function (data) {
            //alert("Success: " +data.text());
            var jsonResp = JSON.parse(data.text());
            //alert(jsonResp);
            if (jsonResp) {
                var mapDetails;
                mapDetails = JSON.parse(data.text());
                var test = [];
                test = [{ lat: -25.75565, lng: 28.23938 },
                    { lat: -25.75392, lng: 28.23217 }];
                //alert("Middle: "+mapDetails.middle);
                //alert("Middle: "+JSON.parse(mapDetails.middle));
                _this.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 5,
                    center: JSON.parse(mapDetails.middle),
                    mapTypeId: 'terrain'
                });
                // Construct the polygon.
                var mapObj = new google.maps.Polygon({
                    paths: JSON.parse(mapDetails.border),
                    strokeColor: '#0000FF',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#0000ff',
                    fillOpacity: 0.2,
                });
                _this.map.zoom = 12;
                mapObj.setMap(_this.map);
                _this.map.zoom = 12;
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    MapPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    MapPage.prototype.sendAlert = function () {
        var jsonD = {};
        jsonD.location = this.currentLocation;
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sendAlert_sendAlert__["a" /* SendAlert */]);
        modalPage.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\map\map.html"*/'<ion-header>\n\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Map</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n  <div id="details">\n\n    <p>You have found: {{patrol.coins}} ERP-Coins this patrol.</p>\n\n    <button id="alertBtn" (click)="sendAlert()">Send Out Alert</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _e || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendAlert = /** @class */ (function () {
    function SendAlert(storage, viewCtrl, http, params) {
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.params = params;
        //this.currentLocation = JSON.parse(params.get('location'));
        this.sendAlert = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), image: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    SendAlert.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SendAlert.prototype.sendFunc = function (value) {
        var jsonArr = {};
        jsonArr.title = value.title;
        jsonArr.description = value.amount;
        jsonArr.image = value.image;
        jsonArr.location = this.currentLocation;
        this.http.post("/user/alert", jsonArr).subscribe(function (response) {
            //Handle successful register
        }, function (error) {
            //Handle error
        });
        this.viewCtrl.dismiss();
    };
    SendAlert.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        //console.log(this.navParams.get('message'));
    };
    SendAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sendAlert',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendAlert\sendAlert.html"*/'<ion-header>\n\n\n\n<ion-navbar>\n\n    <ion-title>Send Alert</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="divForm">\n\n    <form [formGroup]="sendAlert" (submit)="sendFunc(sendAlert.value)">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Alert Title</ion-label>\n\n                <ion-input formControlName="title" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Description</ion-label>\n\n                <ion-input formControlName="description" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label stacked>Image</ion-label>\n\n                <ion-input formControlName="image" accept="image/*" type="file"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="submit" class="submitBtn" block>Send</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendAlert\sendAlert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */]])
    ], SendAlert);
    return SendAlert;
}());

//# sourceMappingURL=sendAlert.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RewardsPage = /** @class */ (function () {
    function RewardsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RewardsPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    RewardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rewards',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\rewards\rewards.html"*/'<ion-header>\n\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Rewards</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1></ion-col>\n\n      <ion-col col-10>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            Rietvlei Nature Reserve\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <p>Province: Gauteng, City: Johannesburg</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-1></ion-col>\n\n      <ion-col col-10>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            Dinokeng Game Reserve\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <p>Province: Gauteng, City: Pretoria</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\rewards\rewards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RewardsPage);
    return RewardsPage;
}());

//# sourceMappingURL=rewards.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendPage = /** @class */ (function () {
    function SendPage(viewCtrl, http) {
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.sendDetails = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), amount: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    SendPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SendPage.prototype.sendFunc = function (value) {
        var jsonArr = {};
        jsonArr.address = value.address;
        jsonArr.amount = value.amount;
        jsonArr.message = value.message;
        this.http.post("", jsonArr).subscribe(function (response) {
            //Handle successful register
        }, function (error) {
            //Handle error
        }, function () {
            //Completion code
        });
    };
    SendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        //console.log(this.navParams.get('message'));
    };
    SendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sendErp',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendErp\sendErp.html"*/'<ion-header>\n\n\n\n<ion-navbar>\n\n    <ion-title>Send ERP-Coin</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="divForm">\n\n    <form [formGroup]="sendDetails" (submit)="sendFunc(sendDetails.value)">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Wallet Address</ion-label>\n\n                <ion-input formControlName="address" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Amount of ERP-Coin</ion-label>\n\n                <ion-input formControlName="message" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Message</ion-label>\n\n                <ion-input formControlName="message" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="submit" class="submitBtn" block>Send</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendErp\sendErp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */]])
    ], SendPage);
    return SendPage;
}());

//# sourceMappingURL=sendErp.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReceivePage = /** @class */ (function () {
    function ReceivePage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ReceivePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ReceivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        //console.log(this.navParams.get('message'));
    };
    ReceivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-receiveErp',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\receiveErp\receiveErp.html"*/'<ion-header>\n\n\n\n<ion-navbar>\n\n    <ion-title>Receive ERP-Coin</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="divForm">\n\n    <form>\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <p>Your Wallet Address</p>\n\n                <p>Test Address</p>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\receiveErp\receiveErp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */]])
    ], ReceivePage);
    return ReceivePage;
}());

//# sourceMappingURL=receiveErp.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_conservation_conservation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rewards_rewards__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sendErp_sendErp__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_receiveErp_receiveErp__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sendAlert_sendAlert__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_background_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_location_tracker_location_tracker__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__http_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_conservation_conservation__["a" /* ConservationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_rewards_rewards__["a" /* RewardsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sendErp_sendErp__["a" /* SendPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receiveErp_receiveErp__["a" /* ReceivePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sendAlert_sendAlert__["a" /* SendAlert */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_conservation_conservation__["a" /* ConservationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_rewards_rewards__["a" /* RewardsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sendErp_sendErp__["a" /* SendPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receiveErp_receiveErp__["a" /* ReceivePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sendAlert_sendAlert__["a" /* SendAlert */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_22__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_23__http_api__["a" /* Http */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Http = /** @class */ (function () {
    function Http(http) {
        this.http = http;
    }
    Http.prototype.get = function (path) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* CONFIG */].url + path, { withCredentials: true });
    };
    Http.prototype.post = function (path, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* CONFIG */].url + path, JSON.stringify(data), {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }),
            withCredentials: true
        });
    };
    Http = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], Http);
    return Http;
}());

;
//# sourceMappingURL=http-api.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = /** @class */ (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\splash\splash.html"*/'<ion-content>\n\n  <img src="assets/imgs/ERP-Loading.png" alt="Splash Loading Image">\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';


//import { AccountPage } from '../pages/account/account';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LogPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            //let splash = this.modalCtrl.create(Splash);
            //splash.present();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider(backgroundGeolocation, geolocation, zone) {
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.zone = zone;
        this.lat = 0;
        this.lng = 0;
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        // Background Tracking
        alert("Starting tracking");
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 0,
            distanceFilter: 1,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.switchMode(1);
        this.backgroundGeolocation.start();
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            alert('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                alert("Run is called!");
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            }, function (err) {
                alert(err);
            });
        }, function (err) {
            alert("BG " + err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        /*this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
        
          console.log(position);
        
          // Run update inside of Angular's zone
          this.zone.run(() => {
          alert("Run is called: Lat: "+position.coords.latitude);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          },
          err=>
          {
            alert(err);
          });
        
        },
        (err)=>
        {
          alert(err);
        });*/
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LogPage = /** @class */ (function () {
    function LogPage(storage, toastCtrl, http, navCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.logUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required), password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required) });
    }
    LogPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1500,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.present();
    };
    LogPage.prototype.loginUser = function (value) {
        var _this = this;
        if (!this.logUser.valid) {
            this.presentToast("Please fill out all of the fields");
            return;
        }
        var jsonArr = {};
        jsonArr.username = value.username;
        jsonArr.password = value.password;
        var param = JSON.stringify(jsonArr);
        this.http.post("/user/login", jsonArr).subscribe(function (data) {
            //alert("Success: " +data.text());
            var jsonResp = JSON.parse(data.text());
            //alert(jsonResp);
            if (jsonResp.success) {
                _this.presentToast("Welcome!");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */]);
            }
            else {
                alert("Invalid username/password combination");
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    LogPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\login\login.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Login</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="divForm">\n\n    <form (submit)="loginUser(logUser.value)" [formGroup]="logUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input formControlName="username" type="text" required></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password" required></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button type="submit" class="submitBtn" block >Log In</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map