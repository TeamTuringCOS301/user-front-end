webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(105);
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
    function HomePage(navCtrl) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(104);
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
    function RegPage(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.regUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), fName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), sName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), confirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), cellNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), vehicleModel: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), vehicleReg: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    RegPage.prototype.registerUser = function (value) {
        var _this = this;
        if (value.password != value.confirmPassword) {
            window.alert("Passwords do not match");
        }
        else {
            var addr = "localhost:8080/user/register";
            var param = '{"name":"';
            param += value.fName;
            param += '", "surname":"';
            param += value.sName;
            param += '","username":"';
            param += value.username;
            param += '","password":"';
            param += value.password;
            param += '","cellphoneNumber":"';
            param += value.cellNumber;
            param += '","vehicleModel":"';
            param += value.vehicleModel;
            param += '","vehicleRegistration":"';
            param += value.vehicleReg;
            param += '"}';
            this.http.get(addr, param, {}).then(function (data) {
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                window.alert("Registration Success!");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
            }).catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
                window.alert("Registration Failure!");
            });
            //window.alert("Success!");    
        }
    };
    RegPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    RegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\register\register.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Registration</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="divForm">\n\n    <form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input formControlName="username" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-4.5>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Name</ion-label>\n\n                <ion-input formControlName="fName" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-4.5>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Surname</ion-label>\n\n                <ion-input formControlName="sName" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-4.5>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-4.5>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Confim password</ion-label>\n\n                <ion-input formControlName="confirmPassword" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Cellphone Number</ion-label>\n\n                <ion-input formControlName="cellNumber" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Vehicle Model</ion-label>\n\n                <ion-input formControlName="vehicleModel" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Vehicle Registration</ion-label>\n\n                <ion-input formControlName="vehicleReg" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="submit" class="submitBtn" block>Register</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RegPage);
    return RegPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conservation_conservation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rewards_rewards__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sendErp_sendErp__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receiveErp_receiveErp__ = __webpack_require__(202);
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
    function AccountPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.rootPage = AccountPage_1;
    }
    AccountPage_1 = AccountPage;
    AccountPage.prototype.sendErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sendErp_sendErp__["a" /* SendPage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    AccountPage.prototype.receiveErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__receiveErp_receiveErp__["a" /* ReceivePage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    AccountPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    AccountPage.prototype.rewardsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rewards_rewards__["a" /* RewardsPage */]);
    };
    AccountPage.prototype.conservationAreas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__conservation_conservation__["a" /* ConservationPage */]);
    };
    AccountPage = AccountPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-title>My Account</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="userAccountDiv">\n\n    <ion-grid>\n\n      <ion-row style="height:40vh;">\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4 >\n\n          <div id="leftDiv">\n\n            <p>Username</p>\n\n            <div id="profileImage"> User Profile Image Here</div>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <div id="rightDiv">\n\n            <p> ERP-Coin Balance:<br>122ERP</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton" (click)="conservationAreas()">View List of Conservation Areas</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton" (click)="rewardsPage()">View Rewards</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton" (click)="sendErp()">Send ERP</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton" (click)="receiveErp()">Receive ERP</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton">Manage Account</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton">View Leaderboard</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-1.5></ion-col>\n\n        <ion-col col-4>\n\n          <button id="leftButton">Help and Support</button>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-4>\n\n          <button id="rightButton" (click)="logout()">Logout</button>\n\n        </ion-col>\n\n        <ion-col col-1.5></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
    var AccountPage_1;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(104);
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
    function LogPage(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.logUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    LogPage.prototype.loginUser = function (value) {
        var _this = this;
        var addr = "localhost:8080/user/login";
        var param = '{"username":"';
        param += value.username;
        param += '","password":"';
        param += value.password;
        param += '"}';
        //window.alert(addr);
        //window.alert(param);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
        this.http.post(addr, param, {}).then(function (data) {
            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
            //window.alert(data.data);
            //window.alert("Login Success!");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
        }).catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
            //window.alert(error.data);
            window.alert("Login Failure!");
        });
    };
    LogPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\login\login.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Login</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="divForm">\n\n    <form (submit)="loginUser(logUser.value)" [formGroup]="logUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input formControlName="username" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="submit" class="submitBtn" block>Log In</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(199);
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
    function ConservationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConservationPage.prototype.picked = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    ConservationPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    ConservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\conservation\conservation.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n  <ion-title>Conservation Areas</ion-title>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-card (click)="picked()">\n          <ion-card-header>\n\n            Rietvlei Nature Reserve\n\n          </ion-card-header>\n          <ion-card-content>\n\n            <p>Province: Gauteng, City: Johannesburg</p>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-card>\n          <ion-card-header>\n\n            Dinokeng Game Reserve\n\n          </ion-card-header>\n          <ion-card-content>\n\n            <p>Province: Gauteng, City: Pretoria</p>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\conservation\conservation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ConservationPage);
    return ConservationPage;
}());

//# sourceMappingURL=conservation.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function MapPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    MapPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\map\map.html"*/'<ion-header>\n\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Map</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div #map id="map"></div> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
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
    function SendPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.sendDetails = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({ address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](), message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]() });
    }
    SendPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        //console.log(this.navParams.get('message'));
    };
    SendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sendErp',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendErp\sendErp.html"*/'<ion-header>\n\n\n\n<ion-navbar>\n\n    <ion-title>Send ERP-Coin</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="divForm">\n\n    <form [formGroup]="sendDetails">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Wallet Address</ion-label>\n\n                <ion-input formControlName="address" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Amount of ERP-Coin</ion-label>\n\n                <ion-input formControlName="message" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Message</ion-label>\n\n                <ion-input formControlName="message" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="submit" class="submitBtn" block>Send</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendErp\sendErp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */]])
    ], SendPage);
    return SendPage;
}());

//# sourceMappingURL=sendErp.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ViewController */]])
    ], ReceivePage);
    return ReceivePage;
}());

//# sourceMappingURL=receiveErp.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_conservation_conservation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_rewards_rewards__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sendErp_sendErp__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_receiveErp_receiveErp__ = __webpack_require__(202);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_receiveErp_receiveErp__["a" /* ReceivePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
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
                __WEBPACK_IMPORTED_MODULE_17__pages_receiveErp_receiveErp__["a" /* ReceivePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(98);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(105);
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ })

},[203]);
//# sourceMappingURL=main.js.map