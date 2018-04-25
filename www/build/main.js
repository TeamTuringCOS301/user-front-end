webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(198);
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
        if (value.password != value.confirmPassword) {
            window.alert("Passwords do not match");
        }
        else {
            var addr = "A:'";
            addr += value.fName;
            addr += "','";
            addr += value.sName;
            addr += "','";
            addr += value.username;
            addr += "','";
            addr += value.password;
            addr += "','";
            addr += value.cellNumber;
            addr += "','";
            addr += value.vehicleModel;
            addr += "','";
            addr += value.vehicleReg;
            addr += "'";
            addr = "http://137.215.251.159:8080"; //"+addr;
            //window.alert(addr);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
            /*this.http.get(addr, {}, {}).then(data =>
            {
              console.log(data.status);
              console.log(data.data); // data received by server
              console.log(data.headers);
              window.alert("Registration Success!");
            }).catch(error => {
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
              window.alert("Registration Failure!");
            });*/
            //window.alert("Success!");    
        }
    };
    RegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\pages\register\register.html"*/'<ion-header>\n	<ion-title>Registration</ion-title>\n</ion-header>\n<ion-content>\n<div class="divForm">\n\n<form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n<ion-list>\n\n<ion-grid>\n	<ion-row>\n	  <ion-col col-1></ion-col>\n	  <ion-col col-10>\n\n		  <ion-item>\n\n			  <ion-label floating>Username</ion-label>\n\n			  <ion-input formControlName="username" type="text"></ion-input>\n\n		  </ion-item>\n    </ion-col>\n		<ion-col col-1></ion-col>\n\n	</ion-row>\n\n	<ion-row>\n	  <ion-col col-1></ion-col>\n	  <ion-col col-4.5>\n	    <ion-item>\n\n		    <ion-label floating>Name</ion-label>\n\n		    <ion-input formControlName="fName" type="text"></ion-input>\n\n	    </ion-item>\n	  </ion-col>\n	  <ion-col col-1></ion-col>\n\n	  <ion-col col-4.5>\n\n		  <ion-item>\n\n			  <ion-label floating>Surname</ion-label>\n\n			  <ion-input formControlName="sName" type="text"></ion-input>\n\n		  </ion-item>\n	  </ion-col>\n    <ion-col col-1></ion-col>\n	</ion-row>\n\n	<ion-row>\n	  <ion-col col-1></ion-col>\n		<ion-col col-4.5>\n\n	    <ion-item>\n\n		    <ion-label floating>Password</ion-label>\n\n		    <ion-input formControlName="password" type="password"></ion-input>\n\n	    </ion-item>\n\n	  </ion-col>\n		<ion-col col-1></ion-col>\n		<ion-col col-4.5>\n\n	    <ion-item>\n\n		    <ion-label floating>Confim password</ion-label>\n\n		    <ion-input formControlName="confirmPassword" type="password"></ion-input>\n\n	    </ion-item>\n	  </ion-col>\n    <ion-col col-1></ion-col>\n\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col col-10>\n      <ion-item>\n\n		    <ion-label floating>Cellphone Number</ion-label>\n\n		    <ion-input formControlName="cellNumber" type="number"></ion-input>\n\n	    </ion-item>\n\n    </ion-col>\n    <ion-col col-1></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col col-10>\n\n	    <ion-item>\n\n		    <ion-label floating>Vehicle Model</ion-label>\n\n		    <ion-input formControlName="vehicleModel" type="text"></ion-input>\n\n	    </ion-item>\n    </ion-col>\n    <ion-col col-1></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-1></ion-col>\n    <ion-col col-10>\n\n	    <ion-item>\n\n		    <ion-label floating>Vehicle Registration</ion-label>\n\n		    <ion-input formControlName="vehicleReg" type="text"></ion-input>\n\n	    </ion-item>\n    </ion-col>\n    <ion-col col-1></ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-list>\n<ion-grid>\n<ion-row>\n<ion-col col-1></ion-col>\n<ion-col col-10>\n\n<button ion-button type="submit" class="submitBtn" block>Register</button>\n</ion-col>\n<ion-col col-1></ion-col>\n</ion-row>\n</ion-grid>\n\n</form>\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RegPage);
    return RegPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(198);
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
        var addr = "V:'";
        addr += value.username;
        //addr+="','";
        // addr+=value.password;
        addr += "'";
        addr = "http://137.215.251.159:8080"; //"+addr;
        //window.alert(addr);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
        /*
        this.http.get(addr, {}, {}).then(data =>
        {
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);
          //window.alert(data.data);
          window.alert("Login Success!");
        }).catch(error => {
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
          window.alert(error.data);
           window.alert("Login Failure!");
        });     */
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\pages\login\login.html"*/'<ion-header>\n	<ion-title>Login</ion-title>\n</ion-header>\n<ion-content>\n<div class="divForm">\n\n<form (submit)="loginUser(logUser.value)" [formGroup]="logUser">\n\n<ion-list>\n\n<ion-grid>\n	<ion-row>\n	  <ion-col col-1></ion-col>\n	  <ion-col col-10>\n\n		  <ion-item>\n\n			  <ion-label floating>Username</ion-label>\n\n			  <ion-input formControlName="username" type="text"></ion-input>\n\n		  </ion-item>\n    </ion-col>\n		<ion-col col-1></ion-col>\n\n	</ion-row>\n\n	<ion-row>\n	  <ion-col col-1></ion-col>\n		<ion-col col-10>\n\n	    <ion-item>\n\n		    <ion-label floating>Password</ion-label>\n\n		    <ion-input formControlName="password" type="password"></ion-input>\n\n	    </ion-item>\n\n	  </ion-col>\n    <ion-col col-1></ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n</ion-list>\n<ion-grid>\n<ion-row>\n<ion-col col-1></ion-col>\n<ion-col col-10>\n\n<button ion-button type="submit" class="submitBtn" block>Log In</button>\n</ion-col>\n<ion-col col-1></ion-col>\n</ion-row>\n</ion-grid>\n\n</form>\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-splash',template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\pages\splash\splash.html"*/'<ion-content>\n  <img src="assets/imgs/ERP-Loading.png" alt="Splash Loading Image">\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(197);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\pages\home\home.html"*/'<ion-header>\n<!--<ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>-->\n</ion-header>\n\n<ion-content padding>\n  <div class="loadingDiv">\n    <img src="assets/imgs/ERP-Loading.png" alt="Loading Image">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-1></ion-col>        \n        <ion-col col-4.5>\n          <button (click)="loginPage()">Log In</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4.5>\n          <button (click)="registerPage()">Register</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col col-1></ion-col>\n        <ion-col col-10>\n          <button>Learn about ERP-Coin</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n      </ion-row>\n    </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
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
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = AccountPage_1;
    }
    AccountPage_1 = AccountPage;
    AccountPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AccountPage = AccountPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\pages\account\account.html"*/'<ion-header>\n    <ion-title>My Account</ion-title>\n</ion-header>\n<ion-content>\n  <div class="userAccountDiv">\n    <ion-grid>      \n      <ion-row style="height:40vh;">\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4 >\n          <p>Username</p>\n          <p style="border: 2px solid grey; height:70%;"> User Profile Image Here</p>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <p> ERP-Coin Balance:<br>122ERP</p>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-9>\n          <button>View List of Conservation Areas</button>        \n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button>Send ERP</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button>Receive ERP</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button>Manage Account</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button>View Leaderboard</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button>Help and Support</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button (click)="logout()">Logout</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], AccountPage);
    return AccountPage;
    var AccountPage_1, _a;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(198);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */]
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
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */]
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LogPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            var splash = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_splash_splash__["a" /* Splash */]);
            splash.present();
            //this.splashScreen.hide();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Richard\ERP-Coin\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\ERP-Coin\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map