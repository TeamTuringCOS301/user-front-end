webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_api__ = __webpack_require__(19);
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
        this.logUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required), password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required) });
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
        //var param = JSON.stringify(jsonArr);
        /*this.presentToast("Welcome!");
        this.navCtrl.setRoot(DashboardPage);*/
        this.http.post("/user/login", jsonArr).subscribe(function (data) {
            //alert("Success: " +data.text());
            var jsonResp = JSON.parse(data.text());
            //alert(jsonResp);
            if (jsonResp.success) {
                _this.presentToast("Welcome!");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                alert("Invalid username/password combination");
            }
        }, function (error) {
            //alert("Error: "+error);
        });
    };
    LogPage.prototype.navPop = function () {
        this.navCtrl.pop();
    };
    LogPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegPage */]);
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/login/login.html"*/'<ion-content showWhen="core">\n\n  <div id=register-container class="container">\n\n    <div class="login-pane">\n\n      <div style="margin-bottom:auto; margin-top: auto">\n\n        <form (submit)="loginUser(logUser.value)" [formGroup]="logUser">\n\n          <ion-list>\n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-10 offset-1>\n\n                  <ion-item>\n\n                    <ion-label>\n\n                      <ion-icon name="person"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input formControlName="username" type="text" placeholder="Username"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-10 offset-1>\n\n                  <ion-item>\n\n                    <ion-label>\n\n                      <ion-icon name="lock"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-8 offset-2>\n\n                  <button ion-button outline round block type="submit" color="tertiary">Login</button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-list>\n\n        </form>\n\n      </div>\n\n\n\n      <div style="position:relative; margin-bottom: 12px">\n\n        <ion-row>\n\n          <ion-col text-right>\n\n            <p ion-text>Don\'t have an account?</p>\n\n          </ion-col>\n\n          <ion-col text-center>\n\n            <button ion-button outline round (click)="registerPage()">Sign Up</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </div>\n\n    <div id="register-info">\n\n      <p ion-text text-center>Welcome to</p>\n\n      <h1 ion-text text-center>ERP Coin</h1>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-content class="mobile-login" showWhen="ios,android">\n\n  <h3 ion-text text-center color="white">Welcome to</h3>\n\n  <h1 ion-text text-center color="white">\n\n    <b>ERP Coin Portal</b>\n\n  </h1>\n\n\n\n  <ion-card color="white">\n\n    <form (submit)="loginUser(logUser.value)" [formGroup]="logUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-10 offset-1>\n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="person"></ion-icon>\n\n                </ion-label>\n\n                <ion-input formControlName="username" type="text" placeholder="Username"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10 offset-1>\n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon name="lock"></ion-icon>\n\n                </ion-label>\n\n                <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-8 offset-2>\n\n              <button ion-button outline round block type="submit" color="tertiary">Login</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n    </form>\n\n  </ion-card>\n\n\n\n  <ion-footer no-border>\n\n    <ion-toolbar position="bottom">\n\n      <ion-row>\n\n        <ion-col text-right col-auto>\n\n          <p ion-text color="white">\n\n            <b>Don\'t have an account?</b>\n\n          </p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <button ion-button round color="white" (click)="registerPage()">Sign Up</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-content>\n\n\n\n<!--<ion-header showWhen="ios,android">\n\n  <button id="backButton" (click)="navPop()">\n\n    <ion-icon id="backIcon" name="arrow-dropleft"></ion-icon>\n\n  </button>\n\n  <ion-title>Login</ion-title>\n\n</ion-header>\n\n<ion-content showWhen="ios,android">\n\n  <div class="divForm">\n\n    <form (submit)="loginUser(logUser.value)" [formGroup]="logUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input formControlName="username" type="text" required></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password" required></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button type="submit" class="submitBtn" block>Log In</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>-->'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receiveErp_receiveErp__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sendErp_sendErp__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, toastCtrl, http, events, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.http.get("/user/info").subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            console.log(jsonResp);
            _this.user.name = jsonResp.name;
        }, function (error) {
            alert(error);
        });
        this.getBalance();
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe("Reload Balance", function () {
            _this.getBalance();
            //this.navCtrl.pop({animate:false});
            //this.navCtrl.push(AccountPage);
            //this.navCtrl.push(AccountPage,{},{animate:false});
        });
    };
    DashboardPage.prototype.getBalance = function () {
        var _this = this;
        this.http.get("/user/coins").subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.user.balance = jsonResp.balance;
        }, function (error) {
            alert(error);
        });
    };
    /*public presentToast()
    {
      let toast = this.toastCtrl.create(
      {
        message: 'Logged Out',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }*/
    DashboardPage.prototype.sendErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__sendErp_sendErp__["a" /* SendPage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    DashboardPage.prototype.receiveErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__receiveErp_receiveErp__["a" /* ReceivePage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-content class="card-background-page">\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4>\n        <ion-card no-padding>\n          <img src="assets/imgs/group.jpeg" />\n          <div class="card-title">{{user.name}}</div>\n        </ion-card>\n        <button col-12 ion-button round outline color="black">Edit Account</button>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4>\n        <ion-card class="balance" no-padding>\n          <h1><b>{{user.balance}}</b> ERP</h1>\n          <ion-row>\n            <ion-col text-center>\n              <button ion-button round color="danger" (click)="sendErp()">Send</button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button round color="safe" (click)="receiveErp()">Receive</button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4>\n        <ion-card class="grad" no-padding>\n          <h1><b>History</b></h1>\n          <ion-list>\n            <ion-item>\n              <h2>25/6/2018 | 10:24</h2>\n              <h4 text-wrap>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</h4>\n              <button ion-button round color="safe" item-end>+0.0024</button>\n            </ion-item>\n            <ion-item>\n              <h2>25/6/2018 | 10:54</h2>\n              <h4 text-wrap>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</h4>\n              <button ion-button round color="danger" item-end>-0.0024</button>\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-content>\n</ion-content>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-receiveErp',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/receiveErp/receiveErp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Receive ERP Coin</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row padding>\n    <ion-col col-8 offset-2>\n      <img src="assets/imgs/qr.png"/>\n    </ion-col>\n    <ion-col col-12 text-center>\n      <h1 ion-text>1GoBTCTiC8TEVoLmrGk4CQFXiVbRr7ktoz</h1>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/receiveErp/receiveErp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ViewController */]])
    ], ReceivePage);
    return ReceivePage;
}());

//# sourceMappingURL=receiveErp.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(19);
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
        this.sendDetails = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({ address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), amount: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]() });
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
            selector: 'page-sendErp',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/sendErp/sendErp.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n      <ion-buttons start>\n          <button ion-button>\n            <ion-icon name="barcode"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>Send ERP Coin</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col col-12 text-center>\n      <ion-icon name="paper-plane" style="font-size:150px"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]="sendDetails" (submit)="sendFunc(sendDetails.value)">\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10 offset-1>\n            <ion-item>\n              <ion-label></ion-label>\n              <ion-input formControlName="address" type="text" placeholder="Address"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-10 offset-1>\n            <ion-item>\n              <ion-label></ion-label>\n              <ion-input formControlName="amount" type="number" placeholder="Amount"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-10 offset-1>\n            <ion-item>\n              <ion-label></ion-label>\n              <ion-input formControlName="message" type="text" placeholder="Message"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 offset-2>\n          <button ion-button outline round type="submit" color="tertiary" block>Send</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/sendErp/sendErp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Http */]])
    ], SendPage);
    return SendPage;
}());

//# sourceMappingURL=sendErp.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(43);
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
    function ConservationPage(events, http, navCtrl, storage) {
        var _this = this;
        this.events = events;
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
        this.events.publish("Reload Balance");
        this.navCtrl.pop();
    };
    ConservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/conservation/conservation.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Conservation Areas</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class="area-card" col-12 col-sm-9 col-md-6 col-lg-4>\n        <ion-card *ngFor="let area of areas" (click)="picked(area.id)">\n          <ion-card-header>\n            <b>{{area.name}}</b>\n          </ion-card-header>\n          <ion-card-content>\n            <p>Province: {{area.province}}</p>\n            <p> City: {{area.city}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/conservation/conservation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ConservationPage);
    return ConservationPage;
}());

//# sourceMappingURL=conservation.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-rewards',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/rewards/rewards.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>Rewards</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/rewards/rewards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], RewardsPage);
    return RewardsPage;
}());

//# sourceMappingURL=rewards.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(53);
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
    function ConservationPage(events, http, navCtrl, storage) {
        var _this = this;
        this.events = events;
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
        this.events.publish("Reload Balance");
        this.navCtrl.pop();
    };
    ConservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conservation',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\conservation\conservation.html"*/'<ion-header>\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n  <ion-title>Conservation Areas</ion-title>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-card *ngFor="let area of areas" (click)="picked(area.id)">\n          <ion-card-header>\n\n            {{area.name}}\n\n          </ion-card-header>\n          <ion-card-content>\n\n            <p>Province: {{area.province}}, City: {{area.city}}</p>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\conservation\conservation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ConservationPage);
    return ConservationPage;
}());

//# sourceMappingURL=conservation.js.map
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(203);
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
>>>>>>> Stashed changes

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
<<<<<<< Updated upstream
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendAlert_sendAlert__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewAlert_viewAlert__ = __webpack_require__(206);
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
    function MapPage(toastCtrl, events, http, storage, navCtrl, modalCtrl) {
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.area;
        this.alertsArr = [];
        this.naviID;
        this.pointsArr = [];
        this.isTracking = false;
        this.patrol = {};
    }
    MapPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'bottom'
        });
        toast.present();
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.area = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].area;
        this.patrol = {};
        this.patrol.coins = 0;
        this.LoadMap(this.area);
        //this.trackMe();
    };
    MapPage.prototype.getOtherUserPoints = function (since) {
        var _this = this;
        this.http.get("/point/list/" + this.area + "/" + since).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            //console.log("Returned: "+data.text());
            var points = jsonResp.points;
            _this.pointsArr.forEach(function (point) {
                point.setMap(null);
            });
            _this.pointsArr = [];
            points.forEach(function (point) {
                var pointLocation = new google.maps.LatLng(point.lat, point.lng);
                var marker = new google.maps.Marker({
                    position: pointLocation,
                    map: _this.map,
                    title: 'Other User',
                    zIndex: 0,
                    icon: {
                        url: "assets/imgs/userPoint.png",
                        scaledSize: new google.maps.Size(16, 16) // pixels
                    }
                });
                _this.pointsArr.push(marker);
            });
        }, function (error) {
            alert(error);
        });
    };
    MapPage.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].currentLocation = _this.currentLocation;
                _this.showPosition(position);
                _this.map.panTo(_this.currentLocation);
                _this.map.setZoom(16);
                //this.alerts();
            });
            this.naviID = setInterval(function () {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].currentLocation = _this.currentLocation;
                    _this.showPosition(position);
                    //this.alerts();
                    //this.getOtherUserPoints(0);
                });
            }, __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].interval);
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MapPage.prototype.showPosition = function (position) {
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            zIndex: 3,
            title: 'Got you!',
            icon: {
                url: "assets/imgs/people.png",
                scaledSize: new google.maps.Size(48, 48) // pixels
            }
        });
        this.sendLocation(location);
        this.alerts();
    };
    MapPage.prototype.sendLocation = function (location) {
        var _this = this;
        var jsonArr = {};
        jsonArr = location;
        this.http.post("/point/add/" + this.area, jsonArr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.coin) {
                _this.presentToast("Yay, you got a coin!");
                _this.patrol.coins++;
            }
            else {
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    MapPage.prototype.alerts = function () {
        var _this = this;
        var jsonArr = {};
        jsonArr.location = "";
        var since = 0; //CHANGE THIS
        this.http.get("/alert/broadcasts/" + this.area + "/" + since).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            var alertArr = [];
            alertArr = jsonResp.alerts;
            _this.alertsArr.forEach(function (alert) { alert.setMap(null); });
            alertArr.forEach(function (alert) {
                //console.log("Alert: ");
                var testLoc = new google.maps.LatLng(alert.location.lat, alert.location.lng);
                var iconPost = "Alert.png";
                var iconPre = "assets/imgs/";
                var iconSelection = iconPre + alert.severity + iconPost;
                var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">' + alert.title + '</h1>' +
                    '<div id="bodyContent">' +
                    '<p>' + alert.description + '</p>' +
                    '</div>' +
                    '</div>';
                //console.log("Image: "+iconSelection);
                _this.alertsArr = [];
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                var marker = new google.maps.Marker({
                    position: testLoc,
                    map: _this.map,
                    title: alert.title,
                    zIndex: 5,
                    icon: {
                        url: iconSelection,
                        scaledSize: new google.maps.Size(32, 32),
                    }
                });
                //console.log("Marker: "+marker)
                //this.alert = navParams.get('alert');
                alert.severity = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].severity[alert.severity];
                if (alert.image == 0) {
                    alert("Image is blank");
                }
                else {
                    var point = alert.image.indexOf("base64") + 6;
                    var pointTwo = alert.image.indexOf("base64");
                    var pointOne = alert.image.indexOf("image/") + 5;
                    var imageType = alert.image.substring(pointOne, pointTwo);
                    var newDataPre = "data:image";
                    var newDataPost = ";base64,";
                    var finalNewData = newDataPre + imageType + newDataPost;
                    var oldString = alert.image.substring(0, point);
                    alert.image.replace(oldString, finalNewData);
                    finalNewData = finalNewData + alert.image.substr(point);
                    alert.image = finalNewData;
                }
                marker.addListener('click', function () {
                    var modalPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__viewAlert_viewAlert__["a" /* ViewAlert */], { alert: alert });
                    modalPage.present();
                });
                _this.alertsArr.push(marker);
            });
            _this.getOtherUserPoints(0);
        }, function (error) {
            alert("Error" + error);
        });
    };
    MapPage.prototype.LoadMap = function (areaName) {
        var _this = this;
        this.http.get("/area/info/" + areaName).subscribe(function (data) {
            console.log(data.text());
            var jsonResp = JSON.parse(data.text());
            console.log(jsonResp.middle);
            if (jsonResp) {
                var mapDetails;
                _this.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 5,
                    center: jsonResp.middle,
                    mapTypeId: 'terrain'
                });
                // Construct the polygon.
                var mapObj = new google.maps.Polygon({
                    paths: jsonResp.border,
                    strokeColor: '#0000FF',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#0000ff',
                    fillOpacity: 0.2,
                });
                mapObj.setMap(_this.map);
                _this.trackMe();
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    MapPage.prototype.navPop = function () {
        clearInterval(this.naviID);
        this.navCtrl.pop();
    };
    MapPage.prototype.sendAlert = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sendAlert_sendAlert__["a" /* SendAlert */], { location: this.currentLocation });
        modalPage.present();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\map\map.html"*/'<ion-header>\n\n  <button id="backButton" (click)="navPop()"><ion-icon id="backIcon" name="arrow-dropleft"></ion-icon></button>\n\n  <ion-title>Map</ion-title>\n\n</ion-header>\n\n<ion-content>\n\n  <div #map id="map"></div>\n\n  <div id="details">\n\n    <p>You have found: {{patrol.coins}} ERP-Coins this patrol.</p>\n\n    <button id="alertBtn" (click)="sendAlert()">Send Out Alert</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(205);
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
    function SendAlert(formBuilder, storage, viewCtrl, http, navParams) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.navParams = navParams;
        this.severities = [];
        this.severities = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* CONFIG */].severity;
        this.currentLocation = navParams.get('location');
        this.form = formBuilder.group({
            title: [''],
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            description: [''],
            severity: ['']
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        //this.form = new FormGroup({title: new FormControl(), profilePic: new FormControl(), description: new FormControl(), severity: new FormControl()})
    }
    SendAlert.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    SendAlert.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    SendAlert.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
        return false;
    };
    SendAlert.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SendAlert.prototype.sendFunc = function (value) {
        var jsonArr = {};
        jsonArr.title = value.title;
        jsonArr.description = value.description;
        jsonArr.image = value.profilePic;
        jsonArr.severity = parseInt(value.severity);
        jsonArr.location = this.currentLocation;
        this.http.post("/alert/add/" + __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* CONFIG */].area, jsonArr).subscribe(function (response) {
            alert(response); //Handle successful register
        }, function (error) {
            alert(error); //Handle error
        });
        this.viewCtrl.dismiss();
    };
    SendAlert.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        //console.log(this.navParams.get('message'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], SendAlert.prototype, "fileInput", void 0);
    SendAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sendAlert',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendAlert\sendAlert.html"*/'<ion-header>\n\n\n\n<ion-navbar>\n\n    <ion-title>Send Alert</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="divForm">\n\n    <form [formGroup]="form" (submit)="sendFunc(form.value)">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Alert Title</ion-label>\n\n                <ion-input formControlName="title" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Description</ion-label>\n\n                <ion-input formControlName="description" maxlength="300" size="300" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label>Severity</ion-label>\n\n                <ion-select formControlName="severity">\n\n                  <ion-option value=0>{{severities[0]}}</ion-option>\n\n                  <ion-option value=1>{{severities[1]}}</ion-option>\n\n                  <ion-option value=2>{{severities[2]}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col  col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <!--<ion-item no-lines>-->\n\n                <ion-label stacked>Image</ion-label>\n\n                  <input type="file" accept="image/*" #fileInput name="files[]" style="visibility: hidden; height: 0px;" (change)="processWebImage($event)" />\n\n                  <div class="profile-image-wrapper" (click)="getPicture()">\n\n                    <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n\n                      <ion-icon name="add"></ion-icon>\n\n                    </div>\n\n                    <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n\n                  </div>\n\n              <!--</ion-item>-->\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button ion-button type="submit" class="submitBtn" block>Send</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\sendAlert\sendAlert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], SendAlert);
    return SendAlert;
}());

//# sourceMappingURL=sendAlert.js.map
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(205);
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
        this.regUser = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({ username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), fName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), sName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), confirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](), walletAddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]() });
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
            jsonArr.walletAddress = value.walletAddress;
            //jsonArr.vehicleRegistration = value.vehicleReg;
            this.http.post("/user/add", jsonArr).subscribe(function (response) {
                //Handle successful register
                //alert("Success" +response);
                console.log(response);
                _this.presentToast("Registration successful! Please log in");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/register/register.html"*/'<ion-content class="core-login"showWhen="ios,android,core">\n\n\n\n  <ion-card>\n\n\n\n  <ion-navbar color="white">\n\n  </ion-navbar>\n\n  <form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n    <ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="person"></ion-icon></ion-label>\n\n              <ion-input formControlName="username" type="text" placeholder="Username"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n\n              <ion-input formControlName="email" type="email" placeholder="Mail"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="information-circle"></ion-icon></ion-label>\n\n              <ion-input formControlName="fName" type="text" placeholder="Name"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="information-circle"></ion-icon></ion-label>\n\n              <ion-input formControlName="sName" type="text" placeholder="Surname"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n              <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="information-circle"></ion-icon></ion-label>\n\n              <ion-input formControlName="confirmPassword" type="password" placeholder="Confirm Password"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n            <ion-item>\n\n              <ion-label><ion-icon name="card"></ion-icon></ion-label>\n\n              <ion-input formControlName="walletAddress" type="text" placeholder="Wallet Address"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-8 offset-2>\n\n          <button ion-button outline round type="submit" block>Register</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-card>\n\n</ion-content>\n\n\n\n<!--<ion-header showWhen="core">\n\n  <button id="backButton" (click)="navPop()">\n\n    <ion-icon id="backIcon" name="arrow-dropleft"></ion-icon>\n\n  </button>\n\n  <ion-title>Registration</ion-title>\n\n</ion-header>\n\n<ion-content showWhen="core">\n\n  <div class="divForm">\n\n    <form (submit)="registerUser(regUser.value)" [formGroup]="regUser">\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input formControlName="username" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Email Address</ion-label>\n\n                <ion-input formControlName="email" type="email"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Name</ion-label>\n\n                <ion-input formControlName="fName" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Surname</ion-label>\n\n                <ion-input formControlName="sName" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input formControlName="password" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Confim password</ion-label>\n\n                <ion-input formControlName="confirmPassword" type="password"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <ion-item no-lines>\n\n                <ion-label floating>Wallet Address</ion-label>\n\n                <ion-input formControlName="walletAddress" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-1></ion-col>\n\n          <ion-col col-10>\n\n            <button type="submit" class="submitBtn" block>Register</button>\n\n          </ion-col>\n\n          <ion-col col-1></ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </form>\n\n  </div>\n\n</ion-content>-->'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */]])
    ], RegPage);
    return RegPage;
}());

//# sourceMappingURL=register.js.map
>>>>>>> Stashed changes

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
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


var ViewAlert = /** @class */ (function () {
    function ViewAlert(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alert = navParams.get('alert');
    }
    ViewAlert.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ViewAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-viewAlert',template:/*ion-inline-start:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\viewAlert\viewAlert.html"*/'<ion-header>\n\n\n\n<ion-navbar>\n\n    <ion-title>{{alert.title}}</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="divForm">\n\n    <form>\n\n      <ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <div><!--Severity-->\n\n                <p><u>Severity:</u> {{alert.severity}}</p>\n\n                <p> <u>Description:</u> <br>{{alert.description}}</p>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-1></ion-col>\n\n            <ion-col col-10>\n\n              <div>\n\n                <ion-img center style=" background-color: white;" [src]="alert.image"></ion-img>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-list>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Richard\github\ERP-Coin\user-front-end\src\pages\viewAlert\viewAlert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], ViewAlert);
    return ViewAlert;
}());

//# sourceMappingURL=viewAlert.js.map
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conservation_conservation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rewards_rewards__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sendErp_sendErp__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receiveErp_receiveErp__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(105);
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
    function AccountPage(events, storage, toastCtrl, http, navCtrl, modalCtrl) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.rootPage = AccountPage_1;
        this.user = {};
        this.http.get("/user/info").subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.user.name = jsonResp.name;
        }, function (error) {
            alert(error);
        });
        this.getBalance();
        //setInterval(this.getBalance(), 300);
    }
    AccountPage_1 = AccountPage;
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe("Reload Balance", function () {
            _this.getBalance();
            //this.navCtrl.pop({animate:false});
            //this.navCtrl.push(AccountPage);
            //this.navCtrl.push(AccountPage,{},{animate:false});
        });
    };
    AccountPage.prototype.getBalance = function () {
        var _this = this;
        this.http.get("/user/coins").subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            _this.user.balance = jsonResp.balance;
        }, function (error) {
            alert(error);
        });
    };
    AccountPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Logged Out',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AccountPage.prototype.sendErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__sendErp_sendErp__["a" /* SendPage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    AccountPage.prototype.receiveErp = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__receiveErp_receiveErp__["a" /* ReceivePage */], { cssClass: 'send-modal' });
        modalPage.present();
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        //this.navCtrl.push(AccountPage);
        this.http.get("/user/logout").subscribe(function (data) {
            _this.presentToast();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LogPage */]);
        }, function (error) {
            alert("Error: " + error);
        });
    };
    AccountPage.prototype.rewardsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rewards_rewards__["a" /* RewardsPage */]);
    };
    AccountPage.prototype.conservationAreas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__conservation_conservation__["a" /* ConservationPage */]);
    };
    AccountPage = AccountPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <button ion-button start color="primary">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="userAccountDiv">\n    <ion-grid>\n      <ion-row style="height:40vh;">\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4 >\n          <div id="leftDiv">\n            <p><b>Welcome {{user.name}}</b></p>\n            <div id="erpLogo"><img src="assets/imgs/background.png" alt="ERP Image"></div>\n          </div>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <div id="rightDiv">\n            <p><b>ERP-Coin Balance:<br>{{user.balance}} ERP Coins</b></p>\n          </div>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button id="leftButton" (click)="conservationAreas()">View List of Conservation Areas</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button id="rightButton" (click)="rewardsPage()">View Rewards</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button id="leftButton" (click)="sendErp()">Send ERP</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button id="rightButton" (click)="receiveErp()">Receive ERP</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button id="leftButton">Manage Account</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button id="rightButton">View Leaderboard</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-1.5></ion-col>\n        <ion-col col-4>\n          <button id="leftButton">Help and Support</button>\n        </ion-col>\n        <ion-col col-1></ion-col>\n        <ion-col col-4>\n          <button id="rightButton" (click)="logout()">Logout</button>\n        </ion-col>\n        <ion-col col-1.5></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
    var AccountPage_1;
}());

//# sourceMappingURL=account.js.map
>>>>>>> Stashed changes

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendAlert_sendAlert__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewAlert_viewAlert__ = __webpack_require__(209);
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
    function MapPage(toastCtrl, events, http, storage, navCtrl, modalCtrl) {
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.area;
        this.alertsArr = [];
        this.naviID;
        this.pointsArr = [];
        this.isTracking = false;
        this.patrol = {};
    }
    MapPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'bottom'
        });
        toast.present();
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.area = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].area;
        this.patrol = {};
        this.patrol.coins = 0;
        this.LoadMap(this.area);
        //this.trackMe();
    };
    MapPage.prototype.getOtherUserPoints = function (since) {
        var _this = this;
        this.http.get("/point/list/" + this.area + "/" + since).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            //console.log("Returned: "+data.text());
            var points = jsonResp.points;
            _this.pointsArr.forEach(function (point) {
                point.setMap(null);
            });
            _this.pointsArr = [];
            points.forEach(function (point) {
                var pointLocation = new google.maps.LatLng(point.lat, point.lng);
                var marker = new google.maps.Marker({
                    position: pointLocation,
                    map: _this.map,
                    title: 'Other User',
                    zIndex: 0,
                    icon: {
                        url: "assets/imgs/userPoint.png",
                        scaledSize: new google.maps.Size(16, 16) // pixels
                    }
                });
                _this.pointsArr.push(marker);
            });
        }, function (error) {
            alert(error);
        });
    };
    MapPage.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].currentLocation = _this.currentLocation;
                _this.showPosition(position);
                _this.map.panTo(_this.currentLocation);
                _this.map.setZoom(16);
                _this.alerts();
                _this.getOtherUserPoints(0);
            });
            this.naviID = setInterval(function () {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].currentLocation = _this.currentLocation;
                    _this.showPosition(position);
                    _this.alerts();
                    _this.getOtherUserPoints(0);
                });
            }, __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* CONFIG */].interval);
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MapPage.prototype.showPosition = function (position) {
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        if (this.marker) {
            this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            zIndex: 3,
            title: 'Got you!',
            icon: {
                url: "assets/imgs/people.png",
                scaledSize: new google.maps.Size(48, 48) // pixels
            }
        });
        this.sendLocation(location);
    };
    MapPage.prototype.sendLocation = function (location) {
        var _this = this;
        var jsonArr = {};
        jsonArr = location;
        this.http.post("/point/add/" + this.area, jsonArr).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            if (jsonResp.coin) {
                _this.presentToast("Yay, you got a coin!");
                _this.patrol.coins++;
            }
            else {
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    MapPage.prototype.alerts = function () {
        var _this = this;
        var jsonArr = {};
        jsonArr.location = "";
        var since = 0; //CHANGE THIS
        this.http.get("/alert/broadcasts/" + this.area + "/" + since).subscribe(function (data) {
            var jsonResp = JSON.parse(data.text());
            var alertArr = [];
            alertArr = jsonResp.alerts;
            _this.alertsArr.forEach(function (alert) { alert.setMap(null); });
            alertArr.forEach(function (alert) {
                //console.log("Alert: ");
                var testLoc = new google.maps.LatLng(alert.location.lat, alert.location.lng);
                var iconPost = "Alert.png";
                var iconPre = "assets/imgs/";
                var iconSelection = iconPre + alert.severity + iconPost;
                var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">' + alert.title + '</h1>' +
                    '<div id="bodyContent">' +
                    '<p>' + alert.description + '</p>' +
                    '</div>' +
                    '</div>';
                //console.log("Image: "+iconSelection);
                _this.alertsArr = [];
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                var marker = new google.maps.Marker({
                    position: testLoc,
                    map: _this.map,
                    title: alert.title,
                    zIndex: 5,
                    icon: {
                        url: iconSelection,
                        scaledSize: new google.maps.Size(32, 32),
                    }
                });
                //console.log("Marker: "+marker)
                marker.addListener('click', function () {
                    var modalPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__viewAlert_viewAlert__["a" /* ViewAlert */], { alert: alert });
                    modalPage.present();
                });
                _this.alertsArr.push(marker);
            });
        }, function (error) {
            alert("Error" + error);
        });
    };
    MapPage.prototype.LoadMap = function (areaName) {
        var _this = this;
        this.http.get("/area/info/" + areaName).subscribe(function (data) {
            console.log(data.text());
            var jsonResp = JSON.parse(data.text());
            console.log(jsonResp.middle);
            if (jsonResp) {
                var mapDetails;
                _this.map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 5,
                    center: jsonResp.middle,
                    mapTypeId: 'terrain'
                });
                // Construct the polygon.
                var mapObj = new google.maps.Polygon({
                    paths: jsonResp.border,
                    strokeColor: '#0000FF',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#0000ff',
                    fillOpacity: 0.2,
                });
                mapObj.setMap(_this.map);
                _this.trackMe();
            }
        }, function (error) {
            alert("Error: " + error);
        });
    };
    MapPage.prototype.navPop = function () {
        clearInterval(this.naviID);
        this.navCtrl.pop();
    };
    MapPage.prototype.sendAlert = function () {
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__sendAlert_sendAlert__["a" /* SendAlert */], { location: this.currentLocation });
        modalPage.present();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="secondary" text-center>\n      You have found <b> {{patrol.coins}} </b> ERP Coins this patrol.\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <div #map id="map">\n\n  </div>\n  <ion-fab left bottom>\n    <button ion-fab color="danger" (click)="sendAlert()">\n      <ion-icon name="alert"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(208);
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
    function SendAlert(formBuilder, storage, viewCtrl, http, navParams) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.navParams = navParams;
        this.severities = [];
        this.severities = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* CONFIG */].severity;
        this.currentLocation = navParams.get('location');
        this.form = formBuilder.group({
            title: [''],
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            description: [''],
            severity: ['']
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        //this.form = new FormGroup({title: new FormControl(), profilePic: new FormControl(), description: new FormControl(), severity: new FormControl()})
    }
    SendAlert.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    SendAlert.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    SendAlert.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
        return false;
    };
    SendAlert.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    SendAlert.prototype.sendFunc = function (value) {
        var jsonArr = {};
        jsonArr.title = value.title;
        jsonArr.description = value.description;
        jsonArr.image = value.profilePic;
        jsonArr.severity = parseInt(value.severity);
        jsonArr.location = this.currentLocation;
        this.http.post("/alert/add/" + __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* CONFIG */].area, jsonArr).subscribe(function (response) {
            alert(response); //Handle successful register
        }, function (error) {
            alert(error); //Handle error
        });
        this.viewCtrl.dismiss();
    };
    SendAlert.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        //console.log(this.navParams.get('message'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], SendAlert.prototype, "fileInput", void 0);
    SendAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-sendAlert',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/sendAlert/sendAlert.html"*/'<ion-header>\n\n<ion-navbar>\n    <ion-title>Send Alert</ion-title>\n    <ion-buttons end>\n    <button ion-button (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n    </ion-buttons>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form [formGroup]="form" (submit)="sendFunc(form.value)">\n      <ion-list>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-10 offset-1>\n              <ion-item>\n                <ion-label></ion-label>\n                <ion-input formControlName="title" type="text" placeholder="Title"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10 offset-1>\n              <ion-item>\n                <ion-label></ion-label>\n                <ion-input formControlName="description" maxlength="300" size="300" type="text" placeholder="description"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10 offset-1>\n              <ion-item>\n                <ion-label>Severity</ion-label>\n                <ion-select formControlName="severity">\n                  <ion-option value=0>{{severities[0]}}</ion-option>\n                  <ion-option value=1>{{severities[1]}}</ion-option>\n                  <ion-option value=2>{{severities[2]}}</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <!--<ion-item no-lines>-->\n                <ion-label stacked>Image</ion-label>\n                  <input type="file" accept="image/*" #fileInput name="files[]" style="visibility: hidden; height: 0px;" (change)="processWebImage($event)" />\n                  <div class="profile-image-wrapper" (click)="getPicture()">\n                    <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n                      <ion-icon name="add"></ion-icon>\n                    </div>\n                    <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n                  </div>\n              <!--</ion-item>-->\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-8 offset-2>\n            <button ion-button round outline type="submit" color="tertiary" block>Send</button>\n          </ion-col>  \n        </ion-row>\n      </ion-grid>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/sendAlert/sendAlert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__http_api__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], SendAlert);
    return SendAlert;
}());

//# sourceMappingURL=sendAlert.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAlert = /** @class */ (function () {
    function ViewAlert(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alert = navParams.get('alert');
        this.alert.severity = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* CONFIG */].severity[this.alert.severity];
        if (this.alert.image == 0) {
            alert("Image is blank");
        }
        else {
            var point = this.alert.image.indexOf("base64") + 6;
            var pointTwo = this.alert.image.indexOf("base64");
            var pointOne = this.alert.image.indexOf("image/") + 5;
            var imageType = this.alert.image.substring(pointOne, pointTwo);
            var newDataPre = "data:image";
            var newDataPost = ";base64,";
            var finalNewData = newDataPre + imageType + newDataPost;
            var oldString = this.alert.image.substring(0, point);
            this.alert.image.replace(oldString, finalNewData);
            finalNewData = finalNewData + this.alert.image.substr(point);
            this.alert.image = finalNewData;
        }
    }
    ViewAlert.prototype.blobToDataURL = function (blob, callback) {
        var a = new FileReader();
        //a.onload = function(e) {callback(e.target.result);}
        alert(blob);
        //a.readAsDataURL(blob);
    };
    ViewAlert.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ViewAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-viewAlert',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/viewAlert/viewAlert.html"*/'<ion-header>\n\n<ion-navbar>\n    <ion-title>{{alert.title}}</ion-title>\n    <ion-buttons end>\n    <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="divForm">\n    <form>\n      <ion-list>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1></ion-col>\n            <ion-col col-10>\n              <div><!--Severity-->\n                <p><u>Severity:</u> {{alert.severity}}</p>\n                <p> <u>Description:</u> <br>{{alert.description}}</p>\n              </div>\n            </ion-col>\n            <ion-col col-1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-1></ion-col>\n            <ion-col col-10>\n              <div>\n                <ion-img center style=" background-color: white;" [src]="alert.image"></ion-img>\n              </div>\n            </ion-col>\n            <ion-col col-1></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/viewAlert/viewAlert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], ViewAlert);
    return ViewAlert;
}());

//# sourceMappingURL=viewAlert.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_account__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_conservation_conservation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_rewards_rewards__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_map__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sendErp_sendErp__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_receiveErp_receiveErp__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sendAlert_sendAlert__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_viewAlert_viewAlert__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_background_geolocation__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_location_tracker_location_tracker__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__http_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_dashboard_dashboard__ = __webpack_require__(106);
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
                __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_conservation_conservation__["a" /* ConservationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rewards_rewards__["a" /* RewardsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sendErp_sendErp__["a" /* SendPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_receiveErp_receiveErp__["a" /* ReceivePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sendAlert_sendAlert__["a" /* SendAlert */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewAlert_viewAlert__["a" /* ViewAlert */],
                __WEBPACK_IMPORTED_MODULE_27__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_splash_splash__["a" /* Splash */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_conservation_conservation__["a" /* ConservationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_rewards_rewards__["a" /* RewardsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sendErp_sendErp__["a" /* SendPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_receiveErp_receiveErp__["a" /* ReceivePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sendAlert_sendAlert__["a" /* SendAlert */],
                __WEBPACK_IMPORTED_MODULE_17__pages_viewAlert_viewAlert__["a" /* ViewAlert */],
                __WEBPACK_IMPORTED_MODULE_27__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_21__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_22__http_api__["a" /* Http */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                //FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
            selector: 'page-splash',template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/pages/splash/splash.html"*/'<ion-content>\n  <img src="assets/imgs/ERP-Loading.png" alt="Splash Loading Image">\n</ion-content>\n'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

<<<<<<< Updated upstream
"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Http; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(201);
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
=======
//# sourceMappingURL=splash.js.map
>>>>>>> Stashed changes

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_conservation_conservation__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_rewards_rewards__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_api__ = __webpack_require__(19);
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
    function MyApp(platform, statusBar, splashScreen, modalCtrl, toastCtrl, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LogPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Conservation Areas', component: __WEBPACK_IMPORTED_MODULE_6__pages_conservation_conservation__["a" /* ConservationPage */] },
            { title: 'Rewards', component: __WEBPACK_IMPORTED_MODULE_7__pages_rewards_rewards__["a" /* RewardsPage */] }
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
        this.nav.push(page.component);
    };
    MyApp.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Logged Out',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.logOut = function () {
        var _this = this;
        //this.navCtrl.push(AccountPage);
        this.http.get("/user/logout").subscribe(function (data) {
            _this.presentToast();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LogPage */]);
        }, function (error) {
            alert("Error: " + error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tristan/devops/user-front-end/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <button>\n          {{p.title}}\n        </button>\n      </ion-item>\n      <ion-item>\n        <button>\n          Leaderboard\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n    <button ion-button round col-12 color="tertiary" (click)="logOut()" menuToggle>Log Out</button>\n  </ion-footer>>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/tristan/devops/user-front-end/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__http_api__["a" /* Http */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(291);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
<<<<<<< Updated upstream
var CONFIG = {
    url: "https://10.0.2.47:8080",
    interval: 10000,
    area: 1,
    currentLocation: { latitude: 0, longitude: 0 },
    severity: ["Animal Sighting", "Warning/Caution", "Critical Alert"]
};
=======
var CONFIG = {
    url: "https://erpcoin.duckdns.org:80",
    interval: 10000,
    area: 1,
    currentLocation: { latitude: 0, longitude: 0 },
    severity: ["Animal Sighting", "Warning/Caution", "Critical Unicorn"]
};
>>>>>>> Stashed changes
//# sourceMappingURL=app-config.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map