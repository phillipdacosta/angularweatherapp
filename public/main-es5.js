(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"jumbotron\" style = \"padding: 0px\" >\n\n        \n\n        <div *ngIf = \"this.night_flag && this.desktop == false\" class = \"background\" style = \"background-image: url('assets/new_night.png');  background-size: cover;\">\n\n              <app-weather-details></app-weather-details>\n         </div>\n\n         <div *ngIf = \"this.evening_flag && this.desktop == false\" class = \"background\" style = \"background-image: url('assets/new_evening.png');  background-size: cover;\">\n\n            <app-weather-details></app-weather-details>\n       </div>\n\n       <div *ngIf = \"this.morning_flag && this.desktop == false\" class = \"background\" style = \"background-image: url('assets/new_early_morning.png');  background-size: cover; z-index: -1\">\n\n        <app-weather-details></app-weather-details>\n   </div>\n\n   <div *ngIf = \"this.dayTimeFlag && this.desktop == false\" class = \"background\" style = \"background-image: url('assets/test.png');  background-size: cover;\">\n\n    <app-weather-details></app-weather-details>\n</div>\n\n<div *ngIf = \"this.desktop == true\" class = \"background\" style = \"background: black\">\n\n   <h1>This application was developed for mobile use only (for the time being).</h1>\n   <br>\n   <h1>To get the proper experience, please hit the same url on a mobile device!</h1>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-details/weather-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-details/weather-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n\n<div class = \"\" *ngIf = \"this.service.data_received == true\">\n    \n    <div id=\"demo-2\">\n        <input type=\"search\" [(ngModel)]=\"city\" placeholder=\"city\" (keyup.enter)=\"makeApiCall(city)\">\n    <!--    <button (click) = \"makeApiCall(city)\">Go</button>--> \n\n\n <!-- -->  \n    </div>\n\n\n    <div  class = \"convertF\" style = \"position: absolute \" >\n\n            <div class = \"nearme\" style = \"position: absolute \">\n            <!--  -->      <button (click) = \"getPosition()\"> <i class=\"material-icons\" style = \"color: white\">near_me</i> </button> \n\n            </div>\n            <button (click) = \"convertToFahrenheit(temperature, $event); \"><span id = \"converted\"></span>&#176;C</button> | <button (click) = \"convertToCelsius(temperature, $event); \"><span></span>&#176;F</button>\n  \n        \n\n    </div>\n\n    <div>\n\n        <div class=\"condition\">\n            {{this.service.current_location.current_observation.condition.text}}\n\n        </div>\n\n        <div class=\"low_high\">\n\n                {{this.service.current_condition_high}}<span class=\"temperature\"> </span>&#176;|\n                {{this.service.current_condition_low}}<span class=\"temperature\"> </span>&#176; \n\n        </div>\n\n        <div class=\"location\">\n            \n        \n\n            {{this.service.current_location.location.city}},\n            {{this.service.current_location.location.region}}\n        </div>\n\n        <div class=\"condition_emoji\">\n        <!--   <div class={{this.service.current_location.current_observation.condition.text}}></div>-->  \n       <!--      <div class = \"{{service.current_location.forecasts[1].text}}\"></div>-->  \n\n        </div>\n    </div>\n\n\n    <div class=\"temperature\">\n\n        {{this.service.current_observation_temperature}}<span class=\"temperature\"> </span>&#176;\n\n\n    </div>\n    <div class=\"forecast\" style=\" word-wrap: break-word; left: 17vw;\">\n        <table cellspacing=\"0\" cellpadding=\"0\" style=\"width:70%; border-collapse:separate;border-spacing:0.5em; font-weight: 700\">\n            \n            <tr width = \"10%\">\n                <td width = \"10%\">{{service.current_location.forecasts[1].day}}</td>\n                <div class = \"day1\"> \n\n                        <td class = \"{{service.current_location.forecasts[1].text}}\"></td>\n\n                </div>\n                <td>\n                        {{service.day_two_high}}<span class=\"temperature\"> </span>&#176;|\n\n                    {{service.day_two_low}} <span class=\"temperature\"> </span>&#176;\n                \n                </td>\n            </tr>\n\n            \n            <tr>\n                <td>{{service.current_location.forecasts[2].day}}</td>\n                <div class = \"day2\"> \n\n                        <p class = \"{{service.current_location.forecasts[2].text}}\"></p>\n\n                </div>\n                <td>\n                        {{service.day_three_high}}<span class=\"temperature\"> </span>&#176;|\n\n                        {{service.day_three_low}} <span class=\"temperature\"> </span>&#176;\n                \n                </td>\n            </tr>\n            <tr>\n                <td>{{service.current_location.forecasts[3].day}}</td>\n                <div class = \"day3\"> \n\n                        <td class = \"{{service.current_location.forecasts[3].text}}\"></td>\n\n                </div>\n                <td>\n                        {{service.day_four_high}}<span class=\"temperature\"> </span>&#176;|\n\n                        {{service.day_four_low}} <span class=\"temperature\"> </span>&#176;\n                </td>\n            </tr>\n\n            <tr>\n                <td>{{service.current_location.forecasts[4].day}}</td>\n                <div class = \"day4\"> \n\n                        <td class = \"{{service.current_location.forecasts[4].text}}\"></td>\n\n                </div>\n                <td>\n                        {{service.day_five_high}}<span class=\"temperature\"> </span>&#176;|\n\n                        {{service.day_five_low}} <span class=\"temperature\"> </span>&#176;\n                \n                </td>\n            </tr>\n\n            <tr>\n                <td>{{service.current_location.forecasts[5].day}}</td>\n                <div class = \"day5\"> \n\n                        <td class = \"{{service.current_location.forecasts[5].text}}\"></td>\n\n                </div>\n                <td>\n                        {{service.day_six_high}}<span class=\"temperature\"> </span>&#176;|\n                        {{service.day_six_low}} <span class=\"temperature\"> </span>&#176;\n                    \n                \n                </td>\n            </tr>\n\n            <tr>\n                <td>{{service.current_location.forecasts[6].day}}</td>\n                <div class = \"day6\"> \n\n                        <td class = \"{{service.current_location.forecasts[2].text}}\"></td>\n\n                </div>\n                <td>{{service.day_seven_high}}<span class=\"temperature\"> </span>&#176;|\n                    {{service.day_seven_low}} <span class=\"temperature\"> </span>&#176;\n                    \n                \n                </td>\n            </tr>\n\n\n\n        </table>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularweathernew';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-details/weather-details.component */ "./src/app/weather-details/weather-details.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_6__["WeatherDetailsComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n\n   \n    color: white;\n    overflow-y: hidden; \n    overflow-x: hidden;\n    height:100vh;\n    margin-bottom: -500px;\n    background-size: cover; \n    padding: 5px;\n\n\n\n}\n\nbody,html{\n    overflow:hidden\n  }\n\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7Ozs7QUFJaEI7O0FBRUE7SUFDSTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xuXG4gICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyBcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIG1hcmdpbi1ib3R0b206IC01MDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICBwYWRkaW5nOiA1cHg7XG5cblxuXG59XG5cbmJvZHksaHRtbHtcbiAgICBvdmVyZmxvdzpoaWRkZW5cbiAgfVxuXG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(service) {
        this.service = service;
        this.desktop = false;
        this.night_flag = false;
        this.morning_flag = false;
        this.dayTimeFlag = false;
        this.evening_flag = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.detectDevice();
        var d = new Date();
        var n = d.getTime();
        console.log(n);
        console.log(this.service.timezone);
        console.log(this.service.sunrise);
        var dusk = new Date();
        dusk.setHours(24, 59, 59);
        this.dusk = dusk.getTime();
        console.log('Dusk: ' + this.dusk);
        var morning = new Date();
        morning.setHours(6, 40, 0);
        this.morning = morning.getTime();
        console.log('Morning: ' + this.morning);
        var afternoon = new Date();
        afternoon.setHours(12, 45);
        this.afternoon = afternoon.getTime();
        console.log('Afternoon: ' + this.afternoon);
        var evening = new Date();
        evening.setHours(18, 0, 0); // 6.00 pm
        this.evening = evening.getTime();
        console.log('Evening: ' + this.evening);
        var night = new Date();
        night.setHours(20, 0, 0); // 8.00 pm
        this.night = night.getTime();
        console.log('Night: ' + this.night);
        console.log(n);
        console.log(this.dusk);
        console.log(this.morning);
        if (n >= this.morning && n <= this.afternoon) {
            console.log("IT IS MORNING TIME");
            console.log('here');
            this.morning_flag = true;
            this.dayTimeFlag = false;
            this.evening_flag = false;
            this.night_flag = false;
        }
        if (n >= this.afternoon && n <= this.evening) {
            //day time (afternoon)
            console.log("IT IS DAY TIME");
            this.morning_flag = false;
            this.dayTimeFlag = true;
            this.evening_flag = false;
            this.night_flag = false;
        }
        if (n >= this.evening && n < this.night) {
            console.log("IT IS EVENING TIME");
            this.morning_flag = false;
            this.dayTimeFlag = false;
            this.evening_flag = true;
            this.night_flag = false;
        }
        if (n >= this.night && n < this.dusk) {
            console.log("IT IS NIGHT TIME");
            this.morning_flag = false;
            this.dayTimeFlag = false;
            this.evening_flag = false;
            this.night_flag = true;
        }
        if (n <= this.dusk && n < this.morning) {
            console.log("IT IS STILL DUSK TIME");
            this.morning_flag = false;
            this.dayTimeFlag = false;
            this.evening_flag = false;
            this.night_flag = true;
        }
    };
    MainComponent.prototype.detectDevice = function () {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            console.log(true);
            return true;
        }
        else {
            console.log(false);
            this.desktop = true;
            return false;
        }
    };
    MainComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/weather-details/weather-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/weather-details/weather-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-wrapper\n{\n    border: 1px solid red;\n    width: 100px;\n    height: 50px;\n    overflow: auto;\n}\n\n.jumbotron {\n    color: white;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    height: 100vh;\n    margin-bottom: -500px;\n    background-size: cover;\n    padding: 1px;\n    width: 100%;\n}\n\n.forecast{\n\n    position: relative;\n    bottom: 9vh;\n}\n\ntable\n{\n   \n    margin-right: 20px;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\n}\n\ntd\n{\n    width: 20px;\n    height: 20px;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\twhite-space: nowrap;\n\t   padding: 0; \n   margin: 0;\n}\n\n.details {\n\n    max-width: 100%;\n    overflow-y: hidden;\n    overflow-x: hidden; \n}\n\n.layer{\n\n    overflow-y: hidden;\n    overflow-x: hidden; \n}\n\n.mysearchbar{\n\n    opacity: 1.1;      \n    overflow-y: hidden;\n    overflow-x: hidden; \n  }\n\nbody {\n\tbackground: #fff;\n\tcolor: #666;\n\tfont: 90%/180% Arial, Helvetica, sans-serif;\n\twidth: 800px;\n\tmax-width: 96%;\n\tmargin: 0 auto;\n}\n\na {\n\tcolor: #69C;\n\ttext-decoration: none;\n}\n\na:hover {\n\tcolor: #F60;\n}\n\nh1 {\n\tfont: 1.7em;\n\tline-height: 110%;\n\tcolor: #000;\n}\n\np {\n\tmargin: 0 0 20px;\n}\n\n.convertF{\n\n\tposition: absolute;\n    margin-top: 200px;\n    width: 5px;\n    height: 25px;\n    z-index: 1;\n    bottom: 60vh;\n\tleft: 2vh;\n\tcolor: white;\n\twhite-space: nowrap;\n\n\tpadding: 0;\n\tborder: none;\n\tbackground: none;\n\toutline: none;\n}\n\nbutton {\n\tbackground: none!important;\n\tborder: none;\n\tpadding: 0!important;\n\t/*optional*/\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\t/*input has OS specific font-family*/\n\tcolor:#ea821f;\n\tcursor: pointer;\n  }\n\n.converted{\n\tcolor: white\n\n\n  }\n\nbutton:focus { outline: none; }\n\ninput {\n\toutline: none;\n}\n\ninput[type=search] {\n\t-webkit-appearance: textfield;\n\t-webkit-box-sizing: content-box;\n\tfont-family: inherit;\n\tfont-size: 100%;\n}\n\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button {\n\tdisplay: none; \n}\n\ninput[type=search] {\n\tbackground: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;\n\tborder: solid 1px #ccc;\n\tpadding: 9px 10px 9px 32px;\n\twidth: 55px;\n\tborder-radius: 10em;\n\ttransition: all .5s;\n}\n\ninput[type=search]:focus {\n\twidth: 130px;\n\tbackground-color: #fff;\n\tborder-color: #66CC75;\n\tfont-size: 16px;\n\tbox-shadow: 0 0 5px rgba(109,207,246,.5);\n\n}\n\ninput:-moz-placeholder {\n\tcolor: #999;\n}\n\ninput::-webkit-input-placeholder {\n\tcolor: #999;\n}\n\n/* Demo 2 */\n\n#demo-2 input[type=search] {\n\tposition: absolute;\n    margin-top: 200px;\n    width: 5px;\n    height: 25px;\n    z-index: 1;\n    bottom: 80vh;\n\tleft: 2vh;\n\t\n}\n\n#demo-2 input[type=search]:hover {\n\tbackground-color: #fff;\n\tz-index: 1;\n}\n\n#demo-2 input[type=search]:focus {\n\twidth: 130px;\n\tpadding-left: 32px;\n\tcolor: #000;\n\tbackground-color: #fff;\n\tcursor: auto;\n\tz-index: 1;\n}\n\n#demo-2 input:-moz-placeholder {\n\tcolor: transparent;\n\tz-index: 1;\n}\n\n#demo-2 input::-webkit-input-placeholder {\n\tcolor: transparent;\n\tz-index: 1;\n}\n\n.temperature_now{\n\n    top: 80px;\n    overflow-y: hidden;\n    overflow-x: hidden; \n}\n\n.location{\n\n    color: white;\n    overflow-y: hidden;\n    overflow-x: hidden; \n}\n\n.mysearchbar{\n\n    opacity: 0.5;     \n    overflow-y: hidden;\n    overflow-x: hidden;  \n  \n  }\n\n.condition{\n\n\tfont-size: 5.5vw;\n    color: white;\n    position: absolute;\n    bottom: 45vh;\n    left: 5vh;\n    overflow-wrap: normal;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    overflow-y: hidden;\n    overflow-x: hidden;\n    white-space: nowrap;\n\n}\n\n.low_high{\n\n\tfont-size: 5.5vw;\n    color: white;\n    position: absolute;\n    bottom: 45vh;\n    left: 40vh;\n    overflow-wrap: normal;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n\n@media only screen \n    and (device-width : 375px) \n    and (device-height : 812px) \n\tand (-webkit-device-pixel-ratio : 3) { \n\n\n\t\t.low_high{\n\n\t\t\tfont-size: 5.5vw;\n\t\t\tcolor: white;\n\t\t\tposition: absolute;\n\t\t\tbottom: 45vh;\n\t\t\tleft: 37vh;\n\t\t\toverflow-wrap: normal;\n\t\t\tfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\t\t\toverflow-y: hidden;\n\t\t\toverflow-x: hidden;\n\t\t} \n\t\t\n\t}\n\n/* 1792x828px at 326ppi */\n\n@media only screen \nand (device-width: 414px) \nand (device-height: 896px) \nand (-webkit-device-pixel-ratio: 2) { \n\n\n\t.low_high{\n\n\t\tfont-size: 5.5vw;\n\t\tcolor: white;\n\t\tposition: absolute;\n\t\tbottom: 45vh;\n\t\tleft: 30vh;\n\t\toverflow-wrap: normal;\n\t\tfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\t\toverflow-y: hidden;\n\t\toverflow-x: hidden;\n\t} \n\n}\n\n/* 1792x828px at 326ppi */\n\n@media only screen \n\tand (device-width: 414px) \n\tand (device-height: 736px) \n\tand (-webkit-device-pixel-ratio: 3) { \n\t\n\t\n\t\t.low_high{\n\t\n\t\t\tfont-size: 5.5vw;\n\t\t\tcolor: white;\n\t\t\tposition: absolute;\n\t\t\tbottom: 45vh;\n\t\t\tleft: 42vh;\n\t\t\toverflow-wrap: normal;\n\t\t\tfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\t\t\toverflow-y: hidden;\n\t\t\toverflow-x: hidden;\n\t\t} \n\t\n\t}\n\n/* 2436x1125px at 458ppi */\n\n@media only screen \n    and (device-width: 375px) \n    and (device-height: 812px) \n    and (-webkit-device-pixel-ratio: 3) { \n\n\t\t.low_high{\n\n\t\t\tfont-size: 5.5vw;\n\t\t\tcolor: white;\n\t\t\tposition: absolute;\n\t\t\tbottom: 45vh;\n\t\t\tleft: 30vh;\n\t\t\toverflow-wrap: normal;\n\t\t\tfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\t\t\toverflow-y: hidden;\n\t\t\toverflow-x: hidden;\n\t\t} \n\n\t}\n\n.condition_emoji{\n\n    right: 50%;\n    top : 50%;\n    font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", \n    Helvetica, Arial, \"Lucida Grande\", sans-serif;  \n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 100%;\n  height: 500px;\n  transform: scale(1.2, 1.2);\n  \n}\n\n.temperature{\n\n\tfont-size: 35vw;\n    color: white;\n    position: absolute;\n    bottom: 35vh;\n\twhite-space: nowrap;\n\tfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\tleft: 58%;\n    transform: translateX(-50%) translateY(-50%);\n\n\n}\n\n.location{\n\n\tfont-size: 5vw;\n    color: white;\n    position: absolute;\n    bottom: 75vh;\n\twhite-space: nowrap;\n\tfont-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n\tleft: 50%;\n    transform: translateX(-50%) translateY(-50%);\n}\n\n/* SUNNY */\n\n.Sunny { \n    -webkit-animation: sunny 25s linear infinite; \n            animation: sunny 25s linear infinite;\n    background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);\n    height: 140px;\n    width: 20px;\n    margin-left: -1px;\n    position: absolute;\n    left: 40vw;\n    top: 29vh;\n    transform: scale(0.2, 0.2);\n\n}\n\n.Sunny:before {\n\tbackground: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);\n\tcontent: ''; \n\theight: 140px; \n\twidth: 20px;\n\topacity: 1; \n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px; \n\ttransform: rotate(90deg);\t    transform: scale(0.3, 0.3);\n\n}\n\n.Sunny:after {\n\tbackground: #FFEE44; \n\tborder-radius: 50%; \n\tbox-shadow: rgba(255,255,0,0.2) 0 0 0 15px;\n\tcontent: '';  \n\theight: 80px;\n\twidth: 80px;  \n\tposition: absolute; \n\tleft: -30px; \n\ttop: 30px;\t    transform: scale(0.3, 0.3);\n\n}\n\n@-webkit-keyframes sunny { \n\t0% { transform: rotate(0deg); }\n\t100% { transform: rotate(360deg); }\n}\n\n@keyframes sunny { \n\t0% { transform: rotate(0deg); }\n\t100% { transform: rotate(360deg); }\n}\n\n/* CLOUDY */\n\n.Cloudy {\n    -webkit-animation: cloudy 5s ease-in-out infinite;\n            animation: cloudy 5s ease-in-out infinite;\n    background: #FFFFFF;\n    border-radius: 50%;\n    box-shadow: #FFFFFF 65px -15px 0 -5px, #FFFFFF 25px -25px, #FFFFFF 30px 10px, #FFFFFF 60px 15px 0 -10px, #FFFFFF 85px 5px 0 -5px;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 48vw;\n    top: 36vh;\n     transform: scale(0.3, 0.3);\n\n}\n\n.Cloudy:after {\n\t-webkit-animation: cloudy_shadow 5s ease-in-out infinite;\n\t        animation: cloudy_shadow 5s ease-in-out infinite;\n\tbackground: #000000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px;\n\twidth: 120px;\n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 5px; \n\tbottom: -60px;\n  transform: scale(1);\n}\n\n@-webkit-keyframes cloudy {\n\t50% { transform: translateY(-px); }\n}\n\n@keyframes cloudy {\n\t50% { transform: translateY(-px); }\n}\n\n@-webkit-keyframes cloudy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity:.05; }\n}\n\n@keyframes cloudy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity:.05; }\n}\n\n.Breezy {\n    -webkit-animation: cloudy 5s ease-in-out infinite;\n            animation: cloudy 5s ease-in-out infinite;\n    background: #FFFFFF;\n    border-radius: 50%;\n    box-shadow: #FFFFFF 65px -15px 0 -5px, #FFFFFF 25px -25px, #FFFFFF 30px 10px, #FFFFFF 60px 15px 0 -10px, #FFFFFF 85px 5px 0 -5px;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 48vw;\n    top: 36vh;\n     transform: scale(0.3, 0.3);\n\n}\n\n.Cloudy:after {\n\t-webkit-animation: cloudy_shadow 5s ease-in-out infinite;\n\t        animation: cloudy_shadow 5s ease-in-out infinite;\n\tbackground: #000000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px;\n\twidth: 120px;\n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 5px; \n\tbottom: -60px;\n  transform: scale(1);\n}\n\n@keyframes cloudy {\n\t50% { transform: translateY(-px); }\n}\n\n@keyframes cloudy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity:.05; }\n}\n\n/* RAINY */\n\n.Showers {\n\t-webkit-animation: Showers 5s ease-in-out infinite 1s;\n\t        animation: Showers 5s ease-in-out infinite 1s;\n\tbackground: #CCCCCC; \n\tborder-radius: 50%;\n\tbox-shadow: \n\t\t#CCCCCC 65px -15px 0 -5px, \n\t\t#CCCCCC 25px -25px, \n\t\t#CCCCCC 30px 10px, \n\t\t#CCCCCC 60px 15px 0 -10px, \n\t\t#CCCCCC 85px 5px 0 -5px;\n\tdisplay: block;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 48vw;\n\ttop: 36vh;\n\ttransform: scale(0.3, 0.3);\n\n\n}\n\n.Showers:after {\n    -webkit-animation: rainy_shadow 5s ease-in-out infinite 1s;\n            animation: rainy_shadow 5s ease-in-out infinite 1s;\n    background: #000000;\n    border-radius: 50%;\n    content: '';\n    height: 15px;\n    width: 120px;\n    opacity: 0.0;\n    position: absolute;\n    left: 5px;\n    bottom: -60px;\n    transform: scale(1);\n}\n\n.Showers:before {\n\t-webkit-animation: rainy_rain .7s infinite linear;\n\t        animation: rainy_rain .7s infinite linear;\n\tcontent: '';\n\tbackground: #CCCCCC;\n\tborder-radius: 50%;\n\tdisplay: block;\n\theight: 6px;\n\twidth: 3px;\n\topacity: 0.3;\n\ttransform: scale(.9);\n}\n\n@-webkit-keyframes rainy {\n\t50% { transform: translateY(-20px); }\n}\n\n@keyframes rainy {\n\t50% { transform: translateY(-20px); }\n}\n\n@-webkit-keyframes rainy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes rainy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@-webkit-keyframes rainy_rain {\n\t0% {  \n\t\tbox-shadow: \n\t\t\trgba(0,0,0,0) 30px 30px, \n\t\t\trgba(0,0,0,0) 40px 40px,  \n\t\t\t#000 50px 75px, \n\t\t\t#000 55px 50px, \n\t\t\t#000 70px 100px, \n\t\t\t#000 80px 95px, \n\t\t\t#000 110px 45px, \n\t\t\t#000 90px 35px; \n\t}\n\t25% {  \n\t  \tbox-shadow: \n\t\t\t#000 30px 45px,\n\t\t\t#000 40px 60px,\n\t\t\t#000 50px 90px,\n\t\t\t#000 55px 65px,\n\t\t\trgba(0,0,0,0) 70px 120px,\n\t\t\trgba(0,0,0,0) 80px 120px,\n\t\t\t#000 110px 70px,\n\t\t\t#000 90px 60px;\n\t}\n\t26% {  \n\t\tbox-shadow:\n\t\t\t#000 30px 45px,\n\t\t\t#000 40px 60px,\n\t\t\t#000 50px 90px,\n\t\t\t#000 55px 65px,\n\t\t\trgba(0,0,0,0) 70px 40px,\n\t\t\trgba(0,0,0,0) 80px 20px,\n\t\t\t#000 110px 70px,\n\t\t\t#000 90px 60px; \n\t}\n\t50% { \n\t\tbox-shadow:\n\t\t\t#000 30px 70px,\n\t\t\t#000 40px 80px,\n\t\t\trgba(0,0,0,0) 50px 100px,\n\t\t\t#000 55px 80px,\n\t\t\t#000 70px 60px,\n\t\t\t#000 80px 45px,\n\t\t\t#000 110px 95px,\n\t\t\t#000 90px 85px;\n\t}\n\t51% {\n\t\tbox-shadow:\n\t\t\t#000 30px 70px,\n\t\t\t#000 40px 80px,\n\t\t\trgba(0,0,0,0) 50px 45px,\n\t\t\t#000 55px 80px,\n\t\t\t#000 70px 60px,\n\t\t\t#000 80px 45px,\n\t\t\t#000 110px 95px,\n\t\t\t#000 90px 85px;\n\t}\n\t75% {\n\t\tbox-shadow:\n\t\t\t#000 30px 95px,\n\t\t\t#000 40px 100px,\n\t\t\t#000 50px 60px,\n\t\t\trgba(0,0,0,0) 55px 95px,\n\t\t\t#000 70px 80px,\n\t\t\t#000 80px 70px,\n\t\t\trgba(0,0,0,0) 110px 120px,\n\t\t\trgba(0,0,0,0) 90px 110px;\n\t}\n\t76% {\n\t\tbox-shadow:\n\t\t\t#000 30px 95px,\n\t\t\t#000 40px 100px,\n\t\t\t#000 50px 60px,\n\t\t\trgba(0,0,0,0) 55px 35px,\n\t\t\t#000 70px 80px,\n\t\t\t#000 80px 70px,\n\t\t\trgba(0,0,0,0) 110px 25px,\n\t\t\trgba(0,0,0,0) 90px 15px;\n\t}\n\t100% {\n\t\tbox-shadow:\n\t\t\trgba(0,0,0,0) 30px 120px,\n\t\t\trgba(0,0,0,0) 40px 120px,\n\t\t\t#000 50px 75px,\n\t\t\t#000 55px 50px,\n\t\t\t#000 70px 100px,\n\t\t\t#000 80px 95px,\n\t\t\t#000 110px 45px,\n\t\t\t#000 90px 35px;\n\t}\n}\n\n@keyframes rainy_rain {\n\t0% {  \n\t\tbox-shadow: \n\t\t\trgba(0,0,0,0) 30px 30px, \n\t\t\trgba(0,0,0,0) 40px 40px,  \n\t\t\t#000 50px 75px, \n\t\t\t#000 55px 50px, \n\t\t\t#000 70px 100px, \n\t\t\t#000 80px 95px, \n\t\t\t#000 110px 45px, \n\t\t\t#000 90px 35px; \n\t}\n\t25% {  \n\t  \tbox-shadow: \n\t\t\t#000 30px 45px,\n\t\t\t#000 40px 60px,\n\t\t\t#000 50px 90px,\n\t\t\t#000 55px 65px,\n\t\t\trgba(0,0,0,0) 70px 120px,\n\t\t\trgba(0,0,0,0) 80px 120px,\n\t\t\t#000 110px 70px,\n\t\t\t#000 90px 60px;\n\t}\n\t26% {  \n\t\tbox-shadow:\n\t\t\t#000 30px 45px,\n\t\t\t#000 40px 60px,\n\t\t\t#000 50px 90px,\n\t\t\t#000 55px 65px,\n\t\t\trgba(0,0,0,0) 70px 40px,\n\t\t\trgba(0,0,0,0) 80px 20px,\n\t\t\t#000 110px 70px,\n\t\t\t#000 90px 60px; \n\t}\n\t50% { \n\t\tbox-shadow:\n\t\t\t#000 30px 70px,\n\t\t\t#000 40px 80px,\n\t\t\trgba(0,0,0,0) 50px 100px,\n\t\t\t#000 55px 80px,\n\t\t\t#000 70px 60px,\n\t\t\t#000 80px 45px,\n\t\t\t#000 110px 95px,\n\t\t\t#000 90px 85px;\n\t}\n\t51% {\n\t\tbox-shadow:\n\t\t\t#000 30px 70px,\n\t\t\t#000 40px 80px,\n\t\t\trgba(0,0,0,0) 50px 45px,\n\t\t\t#000 55px 80px,\n\t\t\t#000 70px 60px,\n\t\t\t#000 80px 45px,\n\t\t\t#000 110px 95px,\n\t\t\t#000 90px 85px;\n\t}\n\t75% {\n\t\tbox-shadow:\n\t\t\t#000 30px 95px,\n\t\t\t#000 40px 100px,\n\t\t\t#000 50px 60px,\n\t\t\trgba(0,0,0,0) 55px 95px,\n\t\t\t#000 70px 80px,\n\t\t\t#000 80px 70px,\n\t\t\trgba(0,0,0,0) 110px 120px,\n\t\t\trgba(0,0,0,0) 90px 110px;\n\t}\n\t76% {\n\t\tbox-shadow:\n\t\t\t#000 30px 95px,\n\t\t\t#000 40px 100px,\n\t\t\t#000 50px 60px,\n\t\t\trgba(0,0,0,0) 55px 35px,\n\t\t\t#000 70px 80px,\n\t\t\t#000 80px 70px,\n\t\t\trgba(0,0,0,0) 110px 25px,\n\t\t\trgba(0,0,0,0) 90px 15px;\n\t}\n\t100% {\n\t\tbox-shadow:\n\t\t\trgba(0,0,0,0) 30px 120px,\n\t\t\trgba(0,0,0,0) 40px 120px,\n\t\t\t#000 50px 75px,\n\t\t\t#000 55px 50px,\n\t\t\t#000 70px 100px,\n\t\t\t#000 80px 95px,\n\t\t\t#000 110px 45px,\n\t\t\t#000 90px 35px;\n\t}\n}\n\n/* RAINY */\n\n.Rain {\n\t-webkit-animation: Rain 5s ease-in-out infinite 1s;\n\t        animation: Rain 5s ease-in-out infinite 1s;\n\tbackground: #CCCCCC; \n\tborder-radius: 50%;\n\tbox-shadow: \n\t\t#CCCCCC 65px -15px 0 -5px, \n\t\t#CCCCCC 25px -25px, \n\t\t#CCCCCC 30px 10px, \n\t\t#CCCCCC 60px 15px 0 -10px, \n\t\t#CCCCCC 85px 5px 0 -5px;\n\tdisplay: block;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n\tleft: 48vw;\n\ttop: 36vh;\n\ttransform: scale(0.3, 0.3);\n\n}\n\n.Rain:after {\n\t-webkit-animation: rainy_shadow 5s ease-in-out infinite 1s;\n\t        animation: rainy_shadow 5s ease-in-out infinite 1s;\n\tbackground: #000000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px;\n\twidth: 120px;\n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 5px; \n\tbottom: -60px;\n\ttransform: scale(1);\n}\n\n.Rain:before {\n\t-webkit-animation: rainy_rain .7s infinite linear;\n\t        animation: rainy_rain .7s infinite linear;\n\tcontent: '';\n\tbackground: #CCCCCC;\n\tborder-radius: 50%;\n\tdisplay: block;\n\theight: 6px;\n\twidth: 3px;\n\topacity: 0.3;\n\ttransform: scale(.9);\n}\n\n@keyframes rainy {\n\t50% { transform: translateY(-20px); }\n}\n\n@keyframes rainy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes rainy_rain {\n\t0% {  \n\t\tbox-shadow: \n\t\t\trgba(0,0,0,0) 30px 30px, \n\t\t\trgba(0,0,0,0) 40px 40px,  \n\t\t\t#000 50px 75px, \n\t\t\t#000 55px 50px, \n\t\t\t#000 70px 100px, \n\t\t\t#000 80px 95px, \n\t\t\t#000 110px 45px, \n\t\t\t#000 90px 35px; \n\t}\n\t25% {  \n\t  \tbox-shadow: \n\t\t\t#000 30px 45px,\n\t\t\t#000 40px 60px,\n\t\t\t#000 50px 90px,\n\t\t\t#000 55px 65px,\n\t\t\trgba(0,0,0,0) 70px 120px,\n\t\t\trgba(0,0,0,0) 80px 120px,\n\t\t\t#000 110px 70px,\n\t\t\t#000 90px 60px;\n\t}\n\t26% {  \n\t\tbox-shadow:\n\t\t\t#000 30px 45px,\n\t\t\t#000 40px 60px,\n\t\t\t#000 50px 90px,\n\t\t\t#000 55px 65px,\n\t\t\trgba(0,0,0,0) 70px 40px,\n\t\t\trgba(0,0,0,0) 80px 20px,\n\t\t\t#000 110px 70px,\n\t\t\t#000 90px 60px; \n\t}\n\t50% { \n\t\tbox-shadow:\n\t\t\t#000 30px 70px,\n\t\t\t#000 40px 80px,\n\t\t\trgba(0,0,0,0) 50px 100px,\n\t\t\t#000 55px 80px,\n\t\t\t#000 70px 60px,\n\t\t\t#000 80px 45px,\n\t\t\t#000 110px 95px,\n\t\t\t#000 90px 85px;\n\t}\n\t51% {\n\t\tbox-shadow:\n\t\t\t#000 30px 70px,\n\t\t\t#000 40px 80px,\n\t\t\trgba(0,0,0,0) 50px 45px,\n\t\t\t#000 55px 80px,\n\t\t\t#000 70px 60px,\n\t\t\t#000 80px 45px,\n\t\t\t#000 110px 95px,\n\t\t\t#000 90px 85px;\n\t}\n\t75% {\n\t\tbox-shadow:\n\t\t\t#000 30px 95px,\n\t\t\t#000 40px 100px,\n\t\t\t#000 50px 60px,\n\t\t\trgba(0,0,0,0) 55px 95px,\n\t\t\t#000 70px 80px,\n\t\t\t#000 80px 70px,\n\t\t\trgba(0,0,0,0) 110px 120px,\n\t\t\trgba(0,0,0,0) 90px 110px;\n\t}\n\t76% {\n\t\tbox-shadow:\n\t\t\t#000 30px 95px,\n\t\t\t#000 40px 100px,\n\t\t\t#000 50px 60px,\n\t\t\trgba(0,0,0,0) 55px 35px,\n\t\t\t#000 70px 80px,\n\t\t\t#000 80px 70px,\n\t\t\trgba(0,0,0,0) 110px 25px,\n\t\t\trgba(0,0,0,0) 90px 15px;\n\t}\n\t100% {\n\t\tbox-shadow:\n\t\t\trgba(0,0,0,0) 30px 120px,\n\t\t\trgba(0,0,0,0) 40px 120px,\n\t\t\t#000 50px 75px,\n\t\t\t#000 55px 50px,\n\t\t\t#000 70px 100px,\n\t\t\t#000 80px 95px,\n\t\t\t#000 110px 45px,\n\t\t\t#000 90px 35px;\n\t}\n}\n\n/* RAINBOW */\n\n.rainbow {\n\t-webkit-animation: rainbow 5s ease-in-out infinite;\n\t        animation: rainbow 5s ease-in-out infinite;\n\tborder-radius: 170px 0 0 0;\n\tbox-shadow: \n\t\t#FB323C -2px -2px 0 1px,\n\t\t#F99716 -4px -4px 0 3px,\n\t\t#FEE124 -6px -6px 0 5px,\n\t\t#AFDF2E -8px -8px 0 7px,\n\t\t#6AD7F8 -10px -10px 0 9px,\n\t\t#60B1F5 -12px -12px 0 11px,\n\t\t#A3459B -14px -14px 0 13px;\n\theight: 70px;\n\twidth: 70px;\n\tmargin-left: -40px;\n\tposition: absolute;\n\tleft: 610px;\n\ttop: 71px;\n  \ttransform: rotate(40deg);\n}\n\n.rainbow:after {\n\t-webkit-animation: rainbow_shadow 5s ease-in-out infinite;\n\t        animation: rainbow_shadow 5s ease-in-out infinite;\n\tbackground: #000000;\n\tborder-radius: 50%;\n\tcontent: '';\n\topacity: 0.2;\n\theight: 15px;\n\twidth: 120px;\n\tposition: absolute;\n\tbottom: -23px; \n\tleft: 17px;\n  \ttransform: rotate(-40deg);\n  \ttransform-origin: 50% 50%;\n}\n\n@-webkit-keyframes rainbow {\n\t50% { transform: rotate(50deg); }\n}\n\n@keyframes rainbow {\n\t50% { transform: rotate(50deg); }\n}\n\n@-webkit-keyframes rainbow_shadow {\n\t50% { transform:  rotate(-50deg) translate(10px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes rainbow_shadow {\n\t50% { transform:  rotate(-50deg) translate(10px) scale(.7); opacity: 0.05; }\n}\n\n/* STARRY */\n\n.Clear {\n  \t-webkit-animation: starry_star 5s ease-in-out infinite;\n  \t        animation: starry_star 5s ease-in-out infinite;\n\tbackground: #fff;\n\tborder-radius: 50%;  \n\tbox-shadow:  \n      \t#FFFFFF 26px 7px 0 -1px, \n      \trgba(255,255,255,0.1) -36px -19px 0 -1px, \n      \trgba(255,255,255,0.1) -51px -34px 0 -1px,\n      \t#FFFFFF -52px -62px 0 -1px, \n      \t#FFFFFF 14px -37px, \n      \trgba(255,255,255,0.1) 41px -19px,  \n      \t#FFFFFF 34px -50px,\n      \trgba(255,255,255,0.1) 14px -71px 0 -1px,\n      \t#FFFFFF 64px -21px 0 -1px, \n      \trgba(255,255,255,0.1) 32px -85px 0 -1px,\n      \t#FFFFFF 64px -90px,\n      \trgba(255,255,255,0.1) 60px -67px 0 -1px,  \n      \t#FFFFFF 34px -127px,\n      \trgba(255,255,255,0.1) -26px -103px 0 -1px;\n\theight: 4px;\n\twidth: 4px; \n  \tmargin-left: -15px;\n\topacity: 1;\n\tposition: absolute;\n    left: 50vw;\n    top: 45vh;\n\ttransform: scale(0.3, 0.3);\n\n\n}\n\n.Clear:after { \n\t-webkit-animation: starry 5s ease-in-out infinite; \n\t        animation: starry 5s ease-in-out infinite;\n\tborder-radius: 50%;\n\tbox-shadow: #FFFFFF -25px 0;\n\tcontent: '';\n\theight: 100px;\n\twidth: 100px;\n\tposition: absolute;\n\ttop: -106px; \n\ttransform: rotate(-5deg);\n\ttransform-origin: 0 50%;\n}\n\n@-webkit-keyframes starry {\n\t50% { transform: rotate(10deg); }\n}\n\n@keyframes starry {\n\t50% { transform: rotate(10deg); }\n}\n\n@-webkit-keyframes starry_star {\n  50% { \n\tbox-shadow:  \n\t\trgba(255,255,255,0.1) 26px 7px 0 -1px, \n      \t#FFFFFF -36px -19px 0 -1px, \n      \t#FFFFFF -51px -34px 0 -1px,\n      \trgba(255,255,255,0.1) -52px -62px 0 -1px, \n      \trgba(255,255,255,0.1) 14px -37px,\n      \t#FFFFFF 41px -19px,   \n      \trgba(255,255,255,0.1) 34px -50px,\n      \t#FFFFFF 14px -71px 0 -1px,\n      \trgba(255,255,255,0.1) 64px -21px 0 -1px, \n      \t#FFFFFF 32px -85px 0 -1px,\n      \trgba(255,255,255,0.1) 64px -90px,\n      \t#FFFFFF 60px -67px 0 -1px,  \n      \trgba(255,255,255,0.1) 34px -127px,\n      \t#FFFFFF -26px -103px 0 -1px;\n\t}\n}\n\n@keyframes starry_star {\n  50% { \n\tbox-shadow:  \n\t\trgba(255,255,255,0.1) 26px 7px 0 -1px, \n      \t#FFFFFF -36px -19px 0 -1px, \n      \t#FFFFFF -51px -34px 0 -1px,\n      \trgba(255,255,255,0.1) -52px -62px 0 -1px, \n      \trgba(255,255,255,0.1) 14px -37px,\n      \t#FFFFFF 41px -19px,   \n      \trgba(255,255,255,0.1) 34px -50px,\n      \t#FFFFFF 14px -71px 0 -1px,\n      \trgba(255,255,255,0.1) 64px -21px 0 -1px, \n      \t#FFFFFF 32px -85px 0 -1px,\n      \trgba(255,255,255,0.1) 64px -90px,\n      \t#FFFFFF 60px -67px 0 -1px,  \n      \trgba(255,255,255,0.1) 34px -127px,\n      \t#FFFFFF -26px -103px 0 -1px;\n\t}\n}\n\n/* STORMY */\n\n.Scattered {\n\t-webkit-animation: Scattered 5s ease-in-out infinite;\n\t        animation: Scattered 5s ease-in-out infinite;\n\tbackground: #222222;\n\tborder-radius: 50%;\n\tbox-shadow: \n\t\t#222222 65px -15px 0 -5px, \n\t\t#222222 25px -25px, \n\t\t#222222 30px 10px, \n\t\t#222222 60px 15px 0 -10px, \n\t\t#222222 85px 5px 0 -5px;\n\theight: 50px;  \n\twidth: 50px; \n\tmargin-left: -70px; \n\tposition: absolute;\n\tleft: 50vw;\n\ttop: 36vh;\n\ttransform: scale(0.3, 0.3);\n\n\n}\n\n.Scattered:after {\n\t-webkit-animation: stormy_shadow 5s ease-in-out infinite;\n\t        animation: stormy_shadow 5s ease-in-out infinite;\n\tbackground: #000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px; \n\twidth: 120px; \n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 5px; \n\tbottom: -60px;\n\ttransform: scale(1);\n}\n\n.Scattered:before {\n\t-webkit-animation: stormy_thunder 2s steps(1, end) infinite;\n\t        animation: stormy_thunder 2s steps(1, end) infinite; \n\tborder-left: 0px solid transparent;\n\tborder-right: 7px solid transparent;\n\tborder-top: 43px solid yellow; \n\tbox-shadow: yellow -7px -32px;\n\tcontent: '';\n\tdisplay: block;\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tleft: 57px;\n\ttop: 70px;\n\ttransform: rotate(14deg);\n\ttransform-origin: 50% -60px;\n}\n\n@-webkit-keyframes Scattered {\n\t50% { transform: translateY(-px); } \n}\n\n@keyframes Scattered {\n\t50% { transform: translateY(-px); } \n}\n\n@-webkit-keyframes stormy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes stormy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@-webkit-keyframes stormy_thunder {\n\t0%  { transform: rotate(20deg); opacity:1; }\n\t5%  { transform: rotate(-34deg); opacity:1; }\n\t10% { transform: rotate(0deg); opacity:1; }\n\t15% { transform: rotate(-34deg); opacity:0; }\n}\n\n@keyframes stormy_thunder {\n\t0%  { transform: rotate(20deg); opacity:1; }\n\t5%  { transform: rotate(-34deg); opacity:1; }\n\t10% { transform: rotate(0deg); opacity:1; }\n\t15% { transform: rotate(-34deg); opacity:0; }\n}\n\n.Thunderstorms {\n\t-webkit-animation: Scattered 5s ease-in-out infinite;\n\t        animation: Scattered 5s ease-in-out infinite;\n\tbackground: #222222;\n\tborder-radius: 50%;\n\tbox-shadow: \n\t\t#222222 65px -15px 0 -5px, \n\t\t#222222 25px -25px, \n\t\t#222222 30px 10px, \n\t\t#222222 60px 15px 0 -10px, \n\t\t#222222 85px 5px 0 -5px;\n\theight: 50px;  \n\twidth: 50px; \n\tmargin-left: -70px; \n\tposition: absolute;\n    left: 50vw;\n\ttop: 36vh;\n\ttransform: scale(0.3, 0.3);\n\n\n}\n\n.Thunderstorms:after {\n\t-webkit-animation: stormy_shadow 5s ease-in-out infinite;\n\t        animation: stormy_shadow 5s ease-in-out infinite;\n\tbackground: #000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px; \n\twidth: 120px; \n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 5px; \n\tbottom: -60px;\n\ttransform: scale(1);\n}\n\n.Thunderstorms:before {\n\t-webkit-animation: stormy_thunder 2s steps(1, end) infinite;\n\t        animation: stormy_thunder 2s steps(1, end) infinite; \n\tborder-left: 0px solid transparent;\n\tborder-right: 7px solid transparent;\n\tborder-top: 43px solid yellow; \n\tbox-shadow: yellow -7px -32px;\n\tcontent: '';\n\tdisplay: block;\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tleft: 57px;\n\ttop: 70px;\n\ttransform: rotate(14deg);\n\ttransform-origin: 50% -60px;\n}\n\n@-webkit-keyframes Thunderstorms {\n\t50% { transform: translateY(-px); } \n}\n\n@keyframes Thunderstorms {\n\t50% { transform: translateY(-px); } \n}\n\n@keyframes stormy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes stormy_thunder {\n\t0%  { transform: rotate(20deg); opacity:1; }\n\t5%  { transform: rotate(-34deg); opacity:1; }\n\t10% { transform: rotate(0deg); opacity:1; }\n\t15% { transform: rotate(-34deg); opacity:0; }\n}\n\n/* SNOWY */\n\n.snowy {\n\t-webkit-animation: snowy 5s ease-in-out infinite 1s;\n\t        animation: snowy 5s ease-in-out infinite 1s;\n\tbackground: #FFFFFF; \n\tborder-radius: 50%;\n\tbox-shadow: \n\t\t#FFFFFF 65px -15px 0 -5px, \n\t\t#FFFFFF 25px -25px, \n\t\t#FFFFFF 30px 10px, \n\t\t#FFFFFF 60px 15px 0 -10px, \n\t\t#FFFFFF 85px 5px 0 -5px;\n\tdisplay: block;\n\theight: 50px;  \n\twidth: 50px; \n\tmargin-left: -70px; \n\tposition: absolute;\n    left: 50vw;\n\ttop: 36vh;\n\ttransform: scale(0.3, 0.3);\n\n\n}\n\n.snowy:after {\n\t-webkit-animation: snowy_shadow 5s ease-in-out infinite 1s;\n\t        animation: snowy_shadow 5s ease-in-out infinite 1s;\n\tbackground: #000000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px;\n\twidth: 120px;\n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 8px;\n\tbottom: -60px;\n\ttransform: scale(1);\n}\n\n.snowy:before {\n\t-webkit-animation: snowy_snow 2s infinite linear;\n\t        animation: snowy_snow 2s infinite linear;\n\tcontent: '';\n\tborder-radius: 50%;\n\tdisplay: block;\n\theight: 7px;\n\twidth: 7px;\n\topacity: 0.8;\n\ttransform: scale(.9);\n}\n\n@-webkit-keyframes snowy {\n\t50% { transform: translateY(-20px); }\n}\n\n@keyframes snowy {\n\t50% { transform: translateY(-20px); }\n}\n\n@-webkit-keyframes snowy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes snowy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@-webkit-keyframes snowy_snow {\n\t0% {  \n\t\tbox-shadow: \n\t\t\trgba(238,238,238,0) 30px 30px, \n\t\t\trgba(238,238,238,0) 40px 40px,  \n\t\t\t#EEEEEE 50px 75px, \n\t\t\t#EEEEEE 55px 50px, \n\t\t\t#EEEEEE 70px 100px, \n\t\t\t#EEEEEE 80px 95px, \n\t\t\t#EEEEEE 110px 45px, \n\t\t\t#EEEEEE 90px 35px; \n\t}\n\t25% {  \n\t  \tbox-shadow: \n\t\t\t#EEEEEE 30px 45px,\n\t\t\t#EEEEEE 40px 60px,\n\t\t\t#EEEEEE 50px 90px,\n\t\t\t#EEEEEE 55px 65px,\n\t\t\trgba(238,238,238,0) 70px 120px,\n\t\t\trgba(238,238,238,0) 80px 120px,\n\t\t\t#EEEEEE 110px 70px,\n\t\t\t#EEEEEE 90px 60px;\n\t}\n\t26% {  \n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 45px,\n\t\t\t#EEEEEE 40px 60px,\n\t\t\t#EEEEEE 50px 90px,\n\t\t\t#EEEEEE 55px 65px,\n\t\t\trgba(238,238,238,0) 70px 40px,\n\t\t\trgba(238,238,238,0) 80px 20px,\n\t\t\t#EEEEEE 110px 70px,\n\t\t\t#EEEEEE 90px 60px; \n\t}\n\t50% { \n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 70px,\n\t\t\t#EEEEEE 40px 80px,\n\t\t\trgba(238,238,238,0) 50px 100px,\n\t\t\t#EEEEEE 55px 80px,\n\t\t\t#EEEEEE 70px 60px,\n\t\t\t#EEEEEE 80px 45px,\n\t\t\t#EEEEEE 110px 95px,\n\t\t\t#EEEEEE 90px 85px;\n\t}\n\t51% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 70px,\n\t\t\t#EEEEEE 40px 80px,\n\t\t\trgba(238,238,238,0) 50px 45px,\n\t\t\t#EEEEEE 55px 80px,\n\t\t\t#EEEEEE 70px 60px,\n\t\t\t#EEEEEE 80px 45px,\n\t\t\t#EEEEEE 110px 95px,\n\t\t\t#EEEEEE 90px 85px;\n\t}\n\t75% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 95px,\n\t\t\t#EEEEEE 40px 100px,\n\t\t\t#EEEEEE 50px 60px,\n\t\t\trgba(238,238,238,0) 55px 95px,\n\t\t\t#EEEEEE 70px 80px,\n\t\t\t#EEEEEE 80px 70px,\n\t\t\trgba(238,238,238,0) 110px 120px,\n\t\t\trgba(238,238,238,0) 90px 110px;\n\t}\n\t76% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 95px,\n\t\t\t#EEEEEE 40px 100px,\n\t\t\t#EEEEEE 50px 60px,\n\t\t\trgba(238,238,238,0) 55px 35px,\n\t\t\t#EEEEEE 70px 80px,\n\t\t\t#EEEEEE 80px 70px,\n\t\t\trgba(238,238,238,0) 110px 25px,\n\t\t\trgba(238,238,238,0) 90px 15px;\n\t}\n\t100% {\n\t\tbox-shadow:\n\t\t\trgba(238,238,238,0) 30px 120px,\n\t\t\trgba(238,238,238,0) 40px 120px,\n\t\t\t#EEEEEE 50px 75px,\n\t\t\t#EEEEEE 55px 50px,\n\t\t\t#EEEEEE 70px 100px,\n\t\t\t#EEEEEE 80px 95px,\n\t\t\t#EEEEEE 110px 45px,\n\t\t\t#EEEEEE 90px 35px;\n\t}\n}\n\n@keyframes snowy_snow {\n\t0% {  \n\t\tbox-shadow: \n\t\t\trgba(238,238,238,0) 30px 30px, \n\t\t\trgba(238,238,238,0) 40px 40px,  \n\t\t\t#EEEEEE 50px 75px, \n\t\t\t#EEEEEE 55px 50px, \n\t\t\t#EEEEEE 70px 100px, \n\t\t\t#EEEEEE 80px 95px, \n\t\t\t#EEEEEE 110px 45px, \n\t\t\t#EEEEEE 90px 35px; \n\t}\n\t25% {  \n\t  \tbox-shadow: \n\t\t\t#EEEEEE 30px 45px,\n\t\t\t#EEEEEE 40px 60px,\n\t\t\t#EEEEEE 50px 90px,\n\t\t\t#EEEEEE 55px 65px,\n\t\t\trgba(238,238,238,0) 70px 120px,\n\t\t\trgba(238,238,238,0) 80px 120px,\n\t\t\t#EEEEEE 110px 70px,\n\t\t\t#EEEEEE 90px 60px;\n\t}\n\t26% {  \n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 45px,\n\t\t\t#EEEEEE 40px 60px,\n\t\t\t#EEEEEE 50px 90px,\n\t\t\t#EEEEEE 55px 65px,\n\t\t\trgba(238,238,238,0) 70px 40px,\n\t\t\trgba(238,238,238,0) 80px 20px,\n\t\t\t#EEEEEE 110px 70px,\n\t\t\t#EEEEEE 90px 60px; \n\t}\n\t50% { \n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 70px,\n\t\t\t#EEEEEE 40px 80px,\n\t\t\trgba(238,238,238,0) 50px 100px,\n\t\t\t#EEEEEE 55px 80px,\n\t\t\t#EEEEEE 70px 60px,\n\t\t\t#EEEEEE 80px 45px,\n\t\t\t#EEEEEE 110px 95px,\n\t\t\t#EEEEEE 90px 85px;\n\t}\n\t51% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 70px,\n\t\t\t#EEEEEE 40px 80px,\n\t\t\trgba(238,238,238,0) 50px 45px,\n\t\t\t#EEEEEE 55px 80px,\n\t\t\t#EEEEEE 70px 60px,\n\t\t\t#EEEEEE 80px 45px,\n\t\t\t#EEEEEE 110px 95px,\n\t\t\t#EEEEEE 90px 85px;\n\t}\n\t75% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 95px,\n\t\t\t#EEEEEE 40px 100px,\n\t\t\t#EEEEEE 50px 60px,\n\t\t\trgba(238,238,238,0) 55px 95px,\n\t\t\t#EEEEEE 70px 80px,\n\t\t\t#EEEEEE 80px 70px,\n\t\t\trgba(238,238,238,0) 110px 120px,\n\t\t\trgba(238,238,238,0) 90px 110px;\n\t}\n\t76% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 95px,\n\t\t\t#EEEEEE 40px 100px,\n\t\t\t#EEEEEE 50px 60px,\n\t\t\trgba(238,238,238,0) 55px 35px,\n\t\t\t#EEEEEE 70px 80px,\n\t\t\t#EEEEEE 80px 70px,\n\t\t\trgba(238,238,238,0) 110px 25px,\n\t\t\trgba(238,238,238,0) 90px 15px;\n\t}\n\t100% {\n\t\tbox-shadow:\n\t\t\trgba(238,238,238,0) 30px 120px,\n\t\t\trgba(238,238,238,0) 40px 120px,\n\t\t\t#EEEEEE 50px 75px,\n\t\t\t#EEEEEE 55px 50px,\n\t\t\t#EEEEEE 70px 100px,\n\t\t\t#EEEEEE 80px 95px,\n\t\t\t#EEEEEE 110px 45px,\n\t\t\t#EEEEEE 90px 35px;\n\t}\n}\n\n.BlowingSnow {\n\t-webkit-animation: snowy 5s ease-in-out infinite 1s;\n\t        animation: snowy 5s ease-in-out infinite 1s;\n\tbackground: #FFFFFF; \n\tborder-radius: 50%;\n\tbox-shadow: \n\t\t#FFFFFF 65px -15px 0 -5px, \n\t\t#FFFFFF 25px -25px, \n\t\t#FFFFFF 30px 10px, \n\t\t#FFFFFF 60px 15px 0 -10px, \n\t\t#FFFFFF 85px 5px 0 -5px;\n\tdisplay: block;\n\theight: 50px;  \n\twidth: 50px; \n\tmargin-left: -70px; \n\tposition: absolute;\n    left: 50vw;\n\ttop: 36vh;\n\ttransform: scale(0.3, 0.3);\n\n\n}\n\n.Snow:after {\n\t-webkit-animation: snowy_shadow 5s ease-in-out infinite 1s;\n\t        animation: snowy_shadow 5s ease-in-out infinite 1s;\n\tbackground: #000000;\n\tborder-radius: 50%;\n\tcontent: '';\n\theight: 15px;\n\twidth: 120px;\n\topacity: 0.2;\n\tposition: absolute;\n\tleft: 8px;\n\tbottom: -60px;\n\ttransform: scale(1);\n}\n\n.Snow:before {\n\t-webkit-animation: snowy_snow 2s infinite linear;\n\t        animation: snowy_snow 2s infinite linear;\n\tcontent: '';\n\tborder-radius: 50%;\n\tdisplay: block;\n\theight: 7px;\n\twidth: 7px;\n\topacity: 0.8;\n\ttransform: scale(.9);\n}\n\n@keyframes snowy {\n\t50% { transform: translateY(-20px); }\n}\n\n@keyframes snowy_shadow {\n\t50% { transform: translateY(20px) scale(.7); opacity: 0.05; }\n}\n\n@keyframes snowy_snow {\n\t0% {  \n\t\tbox-shadow: \n\t\t\trgba(238,238,238,0) 30px 30px, \n\t\t\trgba(238,238,238,0) 40px 40px,  \n\t\t\t#EEEEEE 50px 75px, \n\t\t\t#EEEEEE 55px 50px, \n\t\t\t#EEEEEE 70px 100px, \n\t\t\t#EEEEEE 80px 95px, \n\t\t\t#EEEEEE 110px 45px, \n\t\t\t#EEEEEE 90px 35px; \n\t}\n\t25% {  \n\t  \tbox-shadow: \n\t\t\t#EEEEEE 30px 45px,\n\t\t\t#EEEEEE 40px 60px,\n\t\t\t#EEEEEE 50px 90px,\n\t\t\t#EEEEEE 55px 65px,\n\t\t\trgba(238,238,238,0) 70px 120px,\n\t\t\trgba(238,238,238,0) 80px 120px,\n\t\t\t#EEEEEE 110px 70px,\n\t\t\t#EEEEEE 90px 60px;\n\t}\n\t26% {  \n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 45px,\n\t\t\t#EEEEEE 40px 60px,\n\t\t\t#EEEEEE 50px 90px,\n\t\t\t#EEEEEE 55px 65px,\n\t\t\trgba(238,238,238,0) 70px 40px,\n\t\t\trgba(238,238,238,0) 80px 20px,\n\t\t\t#EEEEEE 110px 70px,\n\t\t\t#EEEEEE 90px 60px; \n\t}\n\t50% { \n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 70px,\n\t\t\t#EEEEEE 40px 80px,\n\t\t\trgba(238,238,238,0) 50px 100px,\n\t\t\t#EEEEEE 55px 80px,\n\t\t\t#EEEEEE 70px 60px,\n\t\t\t#EEEEEE 80px 45px,\n\t\t\t#EEEEEE 110px 95px,\n\t\t\t#EEEEEE 90px 85px;\n\t}\n\t51% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 70px,\n\t\t\t#EEEEEE 40px 80px,\n\t\t\trgba(238,238,238,0) 50px 45px,\n\t\t\t#EEEEEE 55px 80px,\n\t\t\t#EEEEEE 70px 60px,\n\t\t\t#EEEEEE 80px 45px,\n\t\t\t#EEEEEE 110px 95px,\n\t\t\t#EEEEEE 90px 85px;\n\t}\n\t75% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 95px,\n\t\t\t#EEEEEE 40px 100px,\n\t\t\t#EEEEEE 50px 60px,\n\t\t\trgba(238,238,238,0) 55px 95px,\n\t\t\t#EEEEEE 70px 80px,\n\t\t\t#EEEEEE 80px 70px,\n\t\t\trgba(238,238,238,0) 110px 120px,\n\t\t\trgba(238,238,238,0) 90px 110px;\n\t}\n\t76% {\n\t\tbox-shadow:\n\t\t\t#EEEEEE 30px 95px,\n\t\t\t#EEEEEE 40px 100px,\n\t\t\t#EEEEEE 50px 60px,\n\t\t\trgba(238,238,238,0) 55px 35px,\n\t\t\t#EEEEEE 70px 80px,\n\t\t\t#EEEEEE 80px 70px,\n\t\t\trgba(238,238,238,0) 110px 25px,\n\t\t\trgba(238,238,238,0) 90px 15px;\n\t}\n\t100% {\n\t\tbox-shadow:\n\t\t\trgba(238,238,238,0) 30px 120px,\n\t\t\trgba(238,238,238,0) 40px 120px,\n\t\t\t#EEEEEE 50px 75px,\n\t\t\t#EEEEEE 55px 50px,\n\t\t\t#EEEEEE 70px 100px,\n\t\t\t#EEEEEE 80px 95px,\n\t\t\t#EEEEEE 110px 45px,\n\t\t\t#EEEEEE 90px 35px;\n\t}\n\n\n}\n\nbody {\n\tfont-family: sans-serif;\n\tbackground: #f5f5f5;\n\tmargin: 0;\n\toverflow: hidden;\n\n}\n\nh1 {\n\ttext-align: center;\n\tfont-weight: 400;\n\tposition: absolute;\n\twidth: 100%;\n  font-size: 15px;\n\ttop: 50%;\n\tmargin-top: -130px;\n  \topacity: .6;\n  \tletter-spacing: 2px;\n}\n\n#fabrizio {\n\tborder-top: 100px solid black; \n\tborder-right: 63px solid transparent;\n\twidth: 0;\n\ttransform: scale(.33);\n\ttransform-origin: 0 0;\n\tmargin: 20px;\n\topacity:.6;\n    display: none;\n}\n\n#fabrizio:before {\n\tbackground: black;\n\twidth: 20px;\n\theight: 30px;\n\tcontent: '';\n\tdisplay: block;\n\ttransform: skewX(-32deg);\n\tposition: relative;\n\ttop: -64px;\n\tleft: 30px;\n}\n\n#fabrizio:after {\n\tbackground: black;\n\twidth: 40px;\n\theight: 36px;\n\tcontent: '';\n\tdisplay: block;\n\ttransform: skewX(-32deg);\n\tposition: relative;\n\ttop: -130px;\n\tleft: 50px;\n}\n\na { \n  position: absolute;\n  top: 30px;\n  left: 60px;\n  color: #777;\n  text-decoration: none;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  display: none;\n}\n\n.container {\n\tbackground: linear-gradient(left, #00BBFF, #00BBFF 14.3%, #2EB5E5 14.3%, #2EB5E5 28.6%, #E6E6E6 28.6%, #E6E6E6 42.9%, #F3D166 42.9%, #F3D166 57.2%, #222233 57.2%, #222233 71.5%, #444444 71.5%, #444444 85.8%, #85DB8C 85.8%);\n\ttransform: scale(.9);\n\twidth: 1200px;\n\tposition: absolute;\n\theight: 210px;\n\tleft: 50%;\n\ttop: 50%;\n\tmargin: -65px -600px;\n}\n\n.day1{\n\n\tposition: relative;\n    bottom: 37vh;\n    right: 21vw;\n}\n\n.day2{\n\n\tposition: relative;\n    bottom: 37vh;\n    right: 21vw;\n}\n\n.day3{\n\n\tposition: relative;\n    bottom: 37vh;\n    right: 21vw;\n}\n\n.day4{\n\n\tposition: relative;\n    bottom: 37vh;\n    right: 21vw;\n}\n\n.day5{\n\n\tposition: relative;\n    bottom: 37vh;\n    right: 21vw;\n}\n\n.day6{\n\n\tposition: relative;\n    bottom: 37vh;\n    right: 21vw;\n}\n\n.nearme{\n\n\tbottom: 14vh;\n\tleft: 3vw;\n\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci1kZXRhaWxzL3dlYXRoZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQiwySEFBMkg7O0FBRS9IOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkhBQTJIO0NBQzlILG1CQUFtQjtJQUNoQixVQUFVO0dBQ1gsU0FBUztBQUNaOztBQUdBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBR0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBRUE7Q0FDRCxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLDJDQUEyQztDQUMzQyxZQUFZO0NBQ1osY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQyxrQkFBa0I7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtDQUNmLFNBQVM7Q0FDVCxZQUFZO0NBQ1osbUJBQW1COztDQUVuQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixhQUFhO0FB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Q1osV0FBVztBQUNmOztBQUVBOztDQUVDLFlBQVk7Q0FDWixTQUFTOztBQUVWIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci1kZXRhaWxzL3dlYXRoZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXdyYXBwZXJcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmp1bWJvdHJvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNTAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JlY2FzdHtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDl2aDtcbn1cblxudGFibGVcbntcbiAgIFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcblxufVxuXG50ZFxue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0ICAgcGFkZGluZzogMDsgXG4gICBtYXJnaW46IDA7XG59XG5cblxuLmRldGFpbHMge1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxufVxuXG4ubGF5ZXJ7XG5cbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcbn1cblxuXG4ubXlzZWFyY2hiYXJ7XG5cbiAgICBvcGFjaXR5OiAxLjE7ICAgICAgXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXG4gIH1cblxuICBib2R5IHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Y29sb3I6ICM2NjY7XG5cdGZvbnQ6IDkwJS8xODAlIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdHdpZHRoOiA4MDBweDtcblx0bWF4LXdpZHRoOiA5NiU7XG5cdG1hcmdpbjogMCBhdXRvO1xufVxuYSB7XG5cdGNvbG9yOiAjNjlDO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcblx0Y29sb3I6ICNGNjA7XG59XG5oMSB7XG5cdGZvbnQ6IDEuN2VtO1xuXHRsaW5lLWhlaWdodDogMTEwJTtcblx0Y29sb3I6ICMwMDA7XG59XG5wIHtcblx0bWFyZ2luOiAwIDAgMjBweDtcbn1cblxuLmNvbnZlcnRGe1xuXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogNjB2aDtcblx0bGVmdDogMnZoO1xuXHRjb2xvcjogd2hpdGU7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24ge1xuXHRiYWNrZ3JvdW5kOiBub25lIWltcG9ydGFudDtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwIWltcG9ydGFudDtcblx0LypvcHRpb25hbCovXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1MaWdodFwiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG5cdC8qaW5wdXQgaGFzIE9TIHNwZWNpZmljIGZvbnQtZmFtaWx5Ki9cblx0Y29sb3I6I2VhODIxZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNvbnZlcnRlZHtcblx0Y29sb3I6IHdoaXRlXG5cblxuICB9XG4gIFxuICBidXR0b246Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XG5cblxuaW5wdXQge1xuXHRvdXRsaW5lOiBub25lO1xufVxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG5cdC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXNpemU6IDEwMCU7XG59XG5pbnB1dDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbmlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcblx0ZGlzcGxheTogbm9uZTsgXG59XG5cblxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcblx0YmFja2dyb3VuZDogI2VkZWRlZCB1cmwoaHR0cHM6Ly9zdGF0aWMudHVtYmxyLmNvbS9mdHY4NWJwL01JWG11ZDR0eC9zZWFyY2gtaWNvbi5wbmcpIG5vLXJlcGVhdCA5cHggY2VudGVyO1xuXHRib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuXHRwYWRkaW5nOiA5cHggMTBweCA5cHggMzJweDtcblx0d2lkdGg6IDU1cHg7XG5cdFxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwZW07XG5cdC1tb3otYm9yZGVyLXJhZGl1czogMTBlbTtcblx0Ym9yZGVyLXJhZGl1czogMTBlbTtcblx0XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cztcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgLjVzO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzIHtcblx0d2lkdGg6IDEzMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRib3JkZXItY29sb3I6ICM2NkNDNzU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMTA5LDIwNywyNDYsLjUpO1xuXHQtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgxMDksMjA3LDI0NiwuNSk7XG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgxMDksMjA3LDI0NiwuNSk7XG5cbn1cblxuXG5cbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRjb2xvcjogIzk5OTtcbn1cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6ICM5OTk7XG59XG5cbi8qIERlbW8gMiAqL1xuI2RlbW8tMiBpbnB1dFt0eXBlPXNlYXJjaF0ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IDgwdmg7XG5cdGxlZnQ6IDJ2aDtcblx0XG59XG4jZGVtby0yIGlucHV0W3R5cGU9c2VhcmNoXTpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHotaW5kZXg6IDE7XG59XG4jZGVtby0yIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1cyB7XG5cdHdpZHRoOiAxMzBweDtcblx0cGFkZGluZy1sZWZ0OiAzMnB4O1xuXHRjb2xvcjogIzAwMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBhdXRvO1xuXHR6LWluZGV4OiAxO1xufVxuI2RlbW8tMiBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcblx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHR6LWluZGV4OiAxO1xufVxuI2RlbW8tMiBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGNvbG9yOiB0cmFuc3BhcmVudDtcblx0ei1pbmRleDogMTtcbn1cblxuXG4udGVtcGVyYXR1cmVfbm93e1xuXG4gICAgdG9wOiA4MHB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxufVxuXG4ubG9jYXRpb257XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXG59XG5cbi5teXNlYXJjaGJhcntcblxuICAgIG9wYWNpdHk6IDAuNTsgICAgIFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47ICBcbiAgXG4gIH1cblxuICAuY29uZGl0aW9ue1xuXG5cdGZvbnQtc2l6ZTogNS41dnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQ1dmg7XG4gICAgbGVmdDogNXZoO1xuICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbn0gXG5cbi5sb3dfaGlnaHtcblxuXHRmb250LXNpemU6IDUuNXZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0NXZoO1xuICAgIGxlZnQ6IDQwdmg7XG4gICAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59IFxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgICBhbmQgKGRldmljZS13aWR0aCA6IDM3NXB4KSBcbiAgICBhbmQgKGRldmljZS1oZWlnaHQgOiA4MTJweCkgXG5cdGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7IFxuXG5cblx0XHQubG93X2hpZ2h7XG5cblx0XHRcdGZvbnQtc2l6ZTogNS41dnc7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRib3R0b206IDQ1dmg7XG5cdFx0XHRsZWZ0OiAzN3ZoO1xuXHRcdFx0b3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1MaWdodFwiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7XG5cdFx0XHRvdmVyZmxvdy15OiBoaWRkZW47XG5cdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0fSBcblx0XHRcblx0fVxuXG5cblx0LyogMTc5Mng4MjhweCBhdCAzMjZwcGkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAoZGV2aWNlLXdpZHRoOiA0MTRweCkgXG5hbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KSBcbmFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHsgXG5cblxuXHQubG93X2hpZ2h7XG5cblx0XHRmb250LXNpemU6IDUuNXZ3O1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiA0NXZoO1xuXHRcdGxlZnQ6IDMwdmg7XG5cdFx0b3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuXHRcdGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYU5ldWUtTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuXHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdH0gXG5cbn1cblxuXG5cdC8qIDE3OTJ4ODI4cHggYXQgMzI2cHBpICovXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBcblx0YW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcblx0YW5kIChkZXZpY2UtaGVpZ2h0OiA3MzZweCkgXG5cdGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHsgXG5cdFxuXHRcblx0XHQubG93X2hpZ2h7XG5cdFxuXHRcdFx0Zm9udC1zaXplOiA1LjV2dztcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogNDV2aDtcblx0XHRcdGxlZnQ6IDQydmg7XG5cdFx0XHRvdmVyZmxvdy13cmFwOiBub3JtYWw7XG5cdFx0XHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHR9IFxuXHRcblx0fVxuXG5cbi8qIDI0MzZ4MTEyNXB4IGF0IDQ1OHBwaSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIFxuICAgIGFuZCAoZGV2aWNlLXdpZHRoOiAzNzVweCkgXG4gICAgYW5kIChkZXZpY2UtaGVpZ2h0OiA4MTJweCkgXG4gICAgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykgeyBcblxuXHRcdC5sb3dfaGlnaHtcblxuXHRcdFx0Zm9udC1zaXplOiA1LjV2dztcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogNDV2aDtcblx0XHRcdGxlZnQ6IDMwdmg7XG5cdFx0XHRvdmVyZmxvdy13cmFwOiBub3JtYWw7XG5cdFx0XHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcblx0XHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0XHR9IFxuXG5cdH1cblx0XG5cblxuXG4uY29uZGl0aW9uX2Vtb2ppe1xuXG4gICAgcmlnaHQ6IDUwJTtcbiAgICB0b3AgOiA1MCU7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhTmV1ZS1MaWdodFwiLCBcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXG4gICAgSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7ICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICBcbn0gIFxuXG4udGVtcGVyYXR1cmV7XG5cblx0Zm9udC1zaXplOiAzNXZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzNXZoO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcblx0bGVmdDogNTglO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuXG5cbn0gIFxuXG5cblxuLmxvY2F0aW9ue1xuXG5cdGZvbnQtc2l6ZTogNXZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA3NXZoO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRmb250LWZhbWlseTogXCJIZWx2ZXRpY2FOZXVlLUxpZ2h0XCIsIFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZjtcblx0bGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4vKiBTVU5OWSAqL1xuLlN1bm55IHsgXG4gICAgYW5pbWF0aW9uOiBzdW5ueSAyNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC44KSA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDB2dztcbiAgICB0b3A6IDI5dmg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XG5cbn1cbi5TdW5ueTpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpO1xuXHRjb250ZW50OiAnJzsgXG5cdGhlaWdodDogMTQwcHg7IFxuXHR3aWR0aDogMjBweDtcblx0b3BhY2l0eTogMTsgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwcHg7XG5cdGxlZnQ6IDBweDsgXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcdCAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxufVxuLlN1bm55OmFmdGVyIHtcblx0YmFja2dyb3VuZDogI0ZGRUU0NDsgXG5cdGJvcmRlci1yYWRpdXM6IDUwJTsgXG5cdGJveC1zaGFkb3c6IHJnYmEoMjU1LDI1NSwwLDAuMikgMCAwIDAgMTVweDtcblx0Y29udGVudDogJyc7ICBcblx0aGVpZ2h0OiA4MHB4O1xuXHR3aWR0aDogODBweDsgIFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7IFxuXHRsZWZ0OiAtMzBweDsgXG5cdHRvcDogMzBweDtcdCAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxufVxuQGtleWZyYW1lcyBzdW5ueSB7IFxuXHQwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG5cdDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIENMT1VEWSAqL1xuLkNsb3VkeSB7XG4gICAgYW5pbWF0aW9uOiBjbG91ZHkgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogI0ZGRkZGRiA2NXB4IC0xNXB4IDAgLTVweCwgI0ZGRkZGRiAyNXB4IC0yNXB4LCAjRkZGRkZGIDMwcHggMTBweCwgI0ZGRkZGRiA2MHB4IDE1cHggMCAtMTBweCwgI0ZGRkZGRiA4NXB4IDVweCAwIC01cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDh2dztcbiAgICB0b3A6IDM2dmg7XG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zLCAwLjMpO1xuXG59XG4uQ2xvdWR5OmFmdGVyIHtcblx0YW5pbWF0aW9uOiBjbG91ZHlfc2hhZG93IDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGNvbnRlbnQ6ICcnO1xuXHRoZWlnaHQ6IDE1cHg7XG5cdHdpZHRoOiAxMjBweDtcblx0b3BhY2l0eTogMC4yO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDVweDsgXG5cdGJvdHRvbTogLTYwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5Aa2V5ZnJhbWVzIGNsb3VkeSB7XG5cdDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtcHgpOyB9XG59XG5Aa2V5ZnJhbWVzIGNsb3VkeV9zaGFkb3cge1xuXHQ1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjcpOyBvcGFjaXR5Oi4wNTsgfVxufVxuXG5cbi5CcmVlenkge1xuICAgIGFuaW1hdGlvbjogY2xvdWR5IDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6ICNGRkZGRkYgNjVweCAtMTVweCAwIC01cHgsICNGRkZGRkYgMjVweCAtMjVweCwgI0ZGRkZGRiAzMHB4IDEwcHgsICNGRkZGRkYgNjBweCAxNXB4IDAgLTEwcHgsICNGRkZGRkYgODVweCA1cHggMCAtNXB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ4dnc7XG4gICAgdG9wOiAzNnZoO1xuICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxufVxuLkNsb3VkeTphZnRlciB7XG5cdGFuaW1hdGlvbjogY2xvdWR5X3NoYWRvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0YmFja2dyb3VuZDogIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb250ZW50OiAnJztcblx0aGVpZ2h0OiAxNXB4O1xuXHR3aWR0aDogMTIwcHg7XG5cdG9wYWNpdHk6IDAuMjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1cHg7IFxuXHRib3R0b206IC02MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuQGtleWZyYW1lcyBjbG91ZHkge1xuXHQ1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLXB4KTsgfVxufVxuQGtleWZyYW1lcyBjbG91ZHlfc2hhZG93IHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC43KTsgb3BhY2l0eTouMDU7IH1cbn1cblxuLyogUkFJTlkgKi9cbi5TaG93ZXJzIHtcblx0YW5pbWF0aW9uOiBTaG93ZXJzIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIDFzO1xuXHRiYWNrZ3JvdW5kOiAjQ0NDQ0NDOyBcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3gtc2hhZG93OiBcblx0XHQjQ0NDQ0NDIDY1cHggLTE1cHggMCAtNXB4LCBcblx0XHQjQ0NDQ0NDIDI1cHggLTI1cHgsIFxuXHRcdCNDQ0NDQ0MgMzBweCAxMHB4LCBcblx0XHQjQ0NDQ0NDIDYwcHggMTVweCAwIC0xMHB4LCBcblx0XHQjQ0NDQ0NDIDg1cHggNXB4IDAgLTVweDtcblx0ZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDh2dztcblx0dG9wOiAzNnZoO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxuXG59XG4uU2hvd2VyczphZnRlciB7XG4gICAgYW5pbWF0aW9uOiByYWlueV9zaGFkb3cgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgMXM7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBvcGFjaXR5OiAwLjA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDVweDtcbiAgICBib3R0b206IC02MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uU2hvd2VyczpiZWZvcmUge1xuXHRhbmltYXRpb246IHJhaW55X3JhaW4gLjdzIGluZmluaXRlIGxpbmVhcjtcblx0Y29udGVudDogJyc7XG5cdGJhY2tncm91bmQ6ICNDQ0NDQ0M7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNnB4O1xuXHR3aWR0aDogM3B4O1xuXHRvcGFjaXR5OiAwLjM7XG5cdHRyYW5zZm9ybTogc2NhbGUoLjkpO1xufVxuQGtleWZyYW1lcyByYWlueSB7XG5cdDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbkBrZXlmcmFtZXMgcmFpbnlfc2hhZG93IHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC43KTsgb3BhY2l0eTogMC4wNTsgfVxufVxuQGtleWZyYW1lcyByYWlueV9yYWluIHtcblx0MCUgeyAgXG5cdFx0Ym94LXNoYWRvdzogXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDMwcHggMzBweCwgXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDQwcHggNDBweCwgIFxuXHRcdFx0IzAwMCA1MHB4IDc1cHgsIFxuXHRcdFx0IzAwMCA1NXB4IDUwcHgsIFxuXHRcdFx0IzAwMCA3MHB4IDEwMHB4LCBcblx0XHRcdCMwMDAgODBweCA5NXB4LCBcblx0XHRcdCMwMDAgMTEwcHggNDVweCwgXG5cdFx0XHQjMDAwIDkwcHggMzVweDsgXG5cdH1cblx0MjUlIHsgIFxuXHQgIFx0Ym94LXNoYWRvdzogXG5cdFx0XHQjMDAwIDMwcHggNDVweCxcblx0XHRcdCMwMDAgNDBweCA2MHB4LFxuXHRcdFx0IzAwMCA1MHB4IDkwcHgsXG5cdFx0XHQjMDAwIDU1cHggNjVweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNzBweCAxMjBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgODBweCAxMjBweCxcblx0XHRcdCMwMDAgMTEwcHggNzBweCxcblx0XHRcdCMwMDAgOTBweCA2MHB4O1xuXHR9XG5cdDI2JSB7ICBcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDQ1cHgsXG5cdFx0XHQjMDAwIDQwcHggNjBweCxcblx0XHRcdCMwMDAgNTBweCA5MHB4LFxuXHRcdFx0IzAwMCA1NXB4IDY1cHgsXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDcwcHggNDBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgODBweCAyMHB4LFxuXHRcdFx0IzAwMCAxMTBweCA3MHB4LFxuXHRcdFx0IzAwMCA5MHB4IDYwcHg7IFxuXHR9XG5cdDUwJSB7IFxuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjMDAwIDMwcHggNzBweCxcblx0XHRcdCMwMDAgNDBweCA4MHB4LFxuXHRcdFx0cmdiYSgwLDAsMCwwKSA1MHB4IDEwMHB4LFxuXHRcdFx0IzAwMCA1NXB4IDgwcHgsXG5cdFx0XHQjMDAwIDcwcHggNjBweCxcblx0XHRcdCMwMDAgODBweCA0NXB4LFxuXHRcdFx0IzAwMCAxMTBweCA5NXB4LFxuXHRcdFx0IzAwMCA5MHB4IDg1cHg7XG5cdH1cblx0NTElIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDcwcHgsXG5cdFx0XHQjMDAwIDQwcHggODBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNTBweCA0NXB4LFxuXHRcdFx0IzAwMCA1NXB4IDgwcHgsXG5cdFx0XHQjMDAwIDcwcHggNjBweCxcblx0XHRcdCMwMDAgODBweCA0NXB4LFxuXHRcdFx0IzAwMCAxMTBweCA5NXB4LFxuXHRcdFx0IzAwMCA5MHB4IDg1cHg7XG5cdH1cblx0NzUlIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDk1cHgsXG5cdFx0XHQjMDAwIDQwcHggMTAwcHgsXG5cdFx0XHQjMDAwIDUwcHggNjBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNTVweCA5NXB4LFxuXHRcdFx0IzAwMCA3MHB4IDgwcHgsXG5cdFx0XHQjMDAwIDgwcHggNzBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgMTEwcHggMTIwcHgsXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDkwcHggMTEwcHg7XG5cdH1cblx0NzYlIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDk1cHgsXG5cdFx0XHQjMDAwIDQwcHggMTAwcHgsXG5cdFx0XHQjMDAwIDUwcHggNjBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNTVweCAzNXB4LFxuXHRcdFx0IzAwMCA3MHB4IDgwcHgsXG5cdFx0XHQjMDAwIDgwcHggNzBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgMTEwcHggMjVweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgOTBweCAxNXB4O1xuXHR9XG5cdDEwMCUge1xuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHRyZ2JhKDAsMCwwLDApIDMwcHggMTIwcHgsXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDQwcHggMTIwcHgsXG5cdFx0XHQjMDAwIDUwcHggNzVweCxcblx0XHRcdCMwMDAgNTVweCA1MHB4LFxuXHRcdFx0IzAwMCA3MHB4IDEwMHB4LFxuXHRcdFx0IzAwMCA4MHB4IDk1cHgsXG5cdFx0XHQjMDAwIDExMHB4IDQ1cHgsXG5cdFx0XHQjMDAwIDkwcHggMzVweDtcblx0fVxufVxuXG5cbi8qIFJBSU5ZICovXG4uUmFpbiB7XG5cdGFuaW1hdGlvbjogUmFpbiA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSAxcztcblx0YmFja2dyb3VuZDogI0NDQ0NDQzsgXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym94LXNoYWRvdzogXG5cdFx0I0NDQ0NDQyA2NXB4IC0xNXB4IDAgLTVweCwgXG5cdFx0I0NDQ0NDQyAyNXB4IC0yNXB4LCBcblx0XHQjQ0NDQ0NDIDMwcHggMTBweCwgXG5cdFx0I0NDQ0NDQyA2MHB4IDE1cHggMCAtMTBweCwgXG5cdFx0I0NDQ0NDQyA4NXB4IDVweCAwIC01cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA0OHZ3O1xuXHR0b3A6IDM2dmg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC4zLCAwLjMpO1xuXG59XG4uUmFpbjphZnRlciB7XG5cdGFuaW1hdGlvbjogcmFpbnlfc2hhZG93IDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIDFzO1xuXHRiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGNvbnRlbnQ6ICcnO1xuXHRoZWlnaHQ6IDE1cHg7XG5cdHdpZHRoOiAxMjBweDtcblx0b3BhY2l0eTogMC4yO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDVweDsgXG5cdGJvdHRvbTogLTYwcHg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uUmFpbjpiZWZvcmUge1xuXHRhbmltYXRpb246IHJhaW55X3JhaW4gLjdzIGluZmluaXRlIGxpbmVhcjtcblx0Y29udGVudDogJyc7XG5cdGJhY2tncm91bmQ6ICNDQ0NDQ0M7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNnB4O1xuXHR3aWR0aDogM3B4O1xuXHRvcGFjaXR5OiAwLjM7XG5cdHRyYW5zZm9ybTogc2NhbGUoLjkpO1xufVxuQGtleWZyYW1lcyByYWlueSB7XG5cdDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbkBrZXlmcmFtZXMgcmFpbnlfc2hhZG93IHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC43KTsgb3BhY2l0eTogMC4wNTsgfVxufVxuQGtleWZyYW1lcyByYWlueV9yYWluIHtcblx0MCUgeyAgXG5cdFx0Ym94LXNoYWRvdzogXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDMwcHggMzBweCwgXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDQwcHggNDBweCwgIFxuXHRcdFx0IzAwMCA1MHB4IDc1cHgsIFxuXHRcdFx0IzAwMCA1NXB4IDUwcHgsIFxuXHRcdFx0IzAwMCA3MHB4IDEwMHB4LCBcblx0XHRcdCMwMDAgODBweCA5NXB4LCBcblx0XHRcdCMwMDAgMTEwcHggNDVweCwgXG5cdFx0XHQjMDAwIDkwcHggMzVweDsgXG5cdH1cblx0MjUlIHsgIFxuXHQgIFx0Ym94LXNoYWRvdzogXG5cdFx0XHQjMDAwIDMwcHggNDVweCxcblx0XHRcdCMwMDAgNDBweCA2MHB4LFxuXHRcdFx0IzAwMCA1MHB4IDkwcHgsXG5cdFx0XHQjMDAwIDU1cHggNjVweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNzBweCAxMjBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgODBweCAxMjBweCxcblx0XHRcdCMwMDAgMTEwcHggNzBweCxcblx0XHRcdCMwMDAgOTBweCA2MHB4O1xuXHR9XG5cdDI2JSB7ICBcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDQ1cHgsXG5cdFx0XHQjMDAwIDQwcHggNjBweCxcblx0XHRcdCMwMDAgNTBweCA5MHB4LFxuXHRcdFx0IzAwMCA1NXB4IDY1cHgsXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDcwcHggNDBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgODBweCAyMHB4LFxuXHRcdFx0IzAwMCAxMTBweCA3MHB4LFxuXHRcdFx0IzAwMCA5MHB4IDYwcHg7IFxuXHR9XG5cdDUwJSB7IFxuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjMDAwIDMwcHggNzBweCxcblx0XHRcdCMwMDAgNDBweCA4MHB4LFxuXHRcdFx0cmdiYSgwLDAsMCwwKSA1MHB4IDEwMHB4LFxuXHRcdFx0IzAwMCA1NXB4IDgwcHgsXG5cdFx0XHQjMDAwIDcwcHggNjBweCxcblx0XHRcdCMwMDAgODBweCA0NXB4LFxuXHRcdFx0IzAwMCAxMTBweCA5NXB4LFxuXHRcdFx0IzAwMCA5MHB4IDg1cHg7XG5cdH1cblx0NTElIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDcwcHgsXG5cdFx0XHQjMDAwIDQwcHggODBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNTBweCA0NXB4LFxuXHRcdFx0IzAwMCA1NXB4IDgwcHgsXG5cdFx0XHQjMDAwIDcwcHggNjBweCxcblx0XHRcdCMwMDAgODBweCA0NXB4LFxuXHRcdFx0IzAwMCAxMTBweCA5NXB4LFxuXHRcdFx0IzAwMCA5MHB4IDg1cHg7XG5cdH1cblx0NzUlIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDk1cHgsXG5cdFx0XHQjMDAwIDQwcHggMTAwcHgsXG5cdFx0XHQjMDAwIDUwcHggNjBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNTVweCA5NXB4LFxuXHRcdFx0IzAwMCA3MHB4IDgwcHgsXG5cdFx0XHQjMDAwIDgwcHggNzBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgMTEwcHggMTIwcHgsXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDkwcHggMTEwcHg7XG5cdH1cblx0NzYlIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0IzAwMCAzMHB4IDk1cHgsXG5cdFx0XHQjMDAwIDQwcHggMTAwcHgsXG5cdFx0XHQjMDAwIDUwcHggNjBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgNTVweCAzNXB4LFxuXHRcdFx0IzAwMCA3MHB4IDgwcHgsXG5cdFx0XHQjMDAwIDgwcHggNzBweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgMTEwcHggMjVweCxcblx0XHRcdHJnYmEoMCwwLDAsMCkgOTBweCAxNXB4O1xuXHR9XG5cdDEwMCUge1xuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHRyZ2JhKDAsMCwwLDApIDMwcHggMTIwcHgsXG5cdFx0XHRyZ2JhKDAsMCwwLDApIDQwcHggMTIwcHgsXG5cdFx0XHQjMDAwIDUwcHggNzVweCxcblx0XHRcdCMwMDAgNTVweCA1MHB4LFxuXHRcdFx0IzAwMCA3MHB4IDEwMHB4LFxuXHRcdFx0IzAwMCA4MHB4IDk1cHgsXG5cdFx0XHQjMDAwIDExMHB4IDQ1cHgsXG5cdFx0XHQjMDAwIDkwcHggMzVweDtcblx0fVxufVxuXG4vKiBSQUlOQk9XICovXG4ucmFpbmJvdyB7XG5cdGFuaW1hdGlvbjogcmFpbmJvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0Ym9yZGVyLXJhZGl1czogMTcwcHggMCAwIDA7XG5cdGJveC1zaGFkb3c6IFxuXHRcdCNGQjMyM0MgLTJweCAtMnB4IDAgMXB4LFxuXHRcdCNGOTk3MTYgLTRweCAtNHB4IDAgM3B4LFxuXHRcdCNGRUUxMjQgLTZweCAtNnB4IDAgNXB4LFxuXHRcdCNBRkRGMkUgLThweCAtOHB4IDAgN3B4LFxuXHRcdCM2QUQ3RjggLTEwcHggLTEwcHggMCA5cHgsXG5cdFx0IzYwQjFGNSAtMTJweCAtMTJweCAwIDExcHgsXG5cdFx0I0EzNDU5QiAtMTRweCAtMTRweCAwIDEzcHg7XG5cdGhlaWdodDogNzBweDtcblx0d2lkdGg6IDcwcHg7XG5cdG1hcmdpbi1sZWZ0OiAtNDBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA2MTBweDtcblx0dG9wOiA3MXB4O1xuICBcdHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbn1cbi5yYWluYm93OmFmdGVyIHtcblx0YW5pbWF0aW9uOiByYWluYm93X3NoYWRvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0YmFja2dyb3VuZDogIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb250ZW50OiAnJztcblx0b3BhY2l0eTogMC4yO1xuXHRoZWlnaHQ6IDE1cHg7XG5cdHdpZHRoOiAxMjBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC0yM3B4OyBcblx0bGVmdDogMTdweDtcbiAgXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xuICBcdHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG59XG5Aa2V5ZnJhbWVzIHJhaW5ib3cge1xuXHQ1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7IH1cbn1cbkBrZXlmcmFtZXMgcmFpbmJvd19zaGFkb3cge1xuXHQ1MCUgeyB0cmFuc2Zvcm06ICByb3RhdGUoLTUwZGVnKSB0cmFuc2xhdGUoMTBweCkgc2NhbGUoLjcpOyBvcGFjaXR5OiAwLjA1OyB9XG59XG5cbi8qIFNUQVJSWSAqL1xuLkNsZWFyIHtcbiAgXHRhbmltYXRpb246IHN0YXJyeV9zdGFyIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7ICBcblx0Ym94LXNoYWRvdzogIFxuICAgICAgXHQjRkZGRkZGIDI2cHggN3B4IDAgLTFweCwgXG4gICAgICBcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAtMzZweCAtMTlweCAwIC0xcHgsIFxuICAgICAgXHRyZ2JhKDI1NSwyNTUsMjU1LDAuMSkgLTUxcHggLTM0cHggMCAtMXB4LFxuICAgICAgXHQjRkZGRkZGIC01MnB4IC02MnB4IDAgLTFweCwgXG4gICAgICBcdCNGRkZGRkYgMTRweCAtMzdweCwgXG4gICAgICBcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSA0MXB4IC0xOXB4LCAgXG4gICAgICBcdCNGRkZGRkYgMzRweCAtNTBweCxcbiAgICAgIFx0cmdiYSgyNTUsMjU1LDI1NSwwLjEpIDE0cHggLTcxcHggMCAtMXB4LFxuICAgICAgXHQjRkZGRkZGIDY0cHggLTIxcHggMCAtMXB4LCBcbiAgICAgIFx0cmdiYSgyNTUsMjU1LDI1NSwwLjEpIDMycHggLTg1cHggMCAtMXB4LFxuICAgICAgXHQjRkZGRkZGIDY0cHggLTkwcHgsXG4gICAgICBcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSA2MHB4IC02N3B4IDAgLTFweCwgIFxuICAgICAgXHQjRkZGRkZGIDM0cHggLTEyN3B4LFxuICAgICAgXHRyZ2JhKDI1NSwyNTUsMjU1LDAuMSkgLTI2cHggLTEwM3B4IDAgLTFweDtcblx0aGVpZ2h0OiA0cHg7XG5cdHdpZHRoOiA0cHg7IFxuICBcdG1hcmdpbi1sZWZ0OiAtMTVweDtcblx0b3BhY2l0eTogMTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwdnc7XG4gICAgdG9wOiA0NXZoO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxuXG59XG4uQ2xlYXI6YWZ0ZXIgeyBcblx0YW5pbWF0aW9uOiBzdGFycnkgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym94LXNoYWRvdzogI0ZGRkZGRiAtMjVweCAwO1xuXHRjb250ZW50OiAnJztcblx0aGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDEwMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTEwNnB4OyBcblx0dHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcbn1cblxuQGtleWZyYW1lcyBzdGFycnkge1xuXHQ1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7IH1cbn1cbkBrZXlmcmFtZXMgc3RhcnJ5X3N0YXIge1xuICA1MCUgeyBcblx0Ym94LXNoYWRvdzogIFxuXHRcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAyNnB4IDdweCAwIC0xcHgsIFxuICAgICAgXHQjRkZGRkZGIC0zNnB4IC0xOXB4IDAgLTFweCwgXG4gICAgICBcdCNGRkZGRkYgLTUxcHggLTM0cHggMCAtMXB4LFxuICAgICAgXHRyZ2JhKDI1NSwyNTUsMjU1LDAuMSkgLTUycHggLTYycHggMCAtMXB4LCBcbiAgICAgIFx0cmdiYSgyNTUsMjU1LDI1NSwwLjEpIDE0cHggLTM3cHgsXG4gICAgICBcdCNGRkZGRkYgNDFweCAtMTlweCwgICBcbiAgICAgIFx0cmdiYSgyNTUsMjU1LDI1NSwwLjEpIDM0cHggLTUwcHgsXG4gICAgICBcdCNGRkZGRkYgMTRweCAtNzFweCAwIC0xcHgsXG4gICAgICBcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSA2NHB4IC0yMXB4IDAgLTFweCwgXG4gICAgICBcdCNGRkZGRkYgMzJweCAtODVweCAwIC0xcHgsXG4gICAgICBcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSA2NHB4IC05MHB4LFxuICAgICAgXHQjRkZGRkZGIDYwcHggLTY3cHggMCAtMXB4LCAgXG4gICAgICBcdHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAzNHB4IC0xMjdweCxcbiAgICAgIFx0I0ZGRkZGRiAtMjZweCAtMTAzcHggMCAtMXB4O1xuXHR9XG59XG5cbi8qIFNUT1JNWSAqL1xuLlNjYXR0ZXJlZCB7XG5cdGFuaW1hdGlvbjogU2NhdHRlcmVkIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJveC1zaGFkb3c6IFxuXHRcdCMyMjIyMjIgNjVweCAtMTVweCAwIC01cHgsIFxuXHRcdCMyMjIyMjIgMjVweCAtMjVweCwgXG5cdFx0IzIyMjIyMiAzMHB4IDEwcHgsIFxuXHRcdCMyMjIyMjIgNjBweCAxNXB4IDAgLTEwcHgsIFxuXHRcdCMyMjIyMjIgODVweCA1cHggMCAtNXB4O1xuXHRoZWlnaHQ6IDUwcHg7ICBcblx0d2lkdGg6IDUwcHg7IFxuXHRtYXJnaW4tbGVmdDogLTcwcHg7IFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDUwdnc7XG5cdHRvcDogMzZ2aDtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjMsIDAuMyk7XG5cblxufVxuLlNjYXR0ZXJlZDphZnRlciB7XG5cdGFuaW1hdGlvbjogc3Rvcm15X3NoYWRvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0YmFja2dyb3VuZDogIzAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb250ZW50OiAnJztcblx0aGVpZ2h0OiAxNXB4OyBcblx0d2lkdGg6IDEyMHB4OyBcblx0b3BhY2l0eTogMC4yO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDVweDsgXG5cdGJvdHRvbTogLTYwcHg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uU2NhdHRlcmVkOmJlZm9yZSB7XG5cdGFuaW1hdGlvbjogc3Rvcm15X3RodW5kZXIgMnMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTsgXG5cdGJvcmRlci1sZWZ0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItdG9wOiA0M3B4IHNvbGlkIHllbGxvdzsgXG5cdGJveC1zaGFkb3c6IHllbGxvdyAtN3B4IC0zMnB4O1xuXHRjb250ZW50OiAnJztcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogMDtcblx0d2lkdGg6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTdweDtcblx0dG9wOiA3MHB4O1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDUwJSAtNjBweDtcbn1cbkBrZXlmcmFtZXMgU2NhdHRlcmVkIHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1weCk7IH0gXG59ICBcbkBrZXlmcmFtZXMgc3Rvcm15X3NoYWRvdyB7XG5cdDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KSBzY2FsZSguNyk7IG9wYWNpdHk6IDAuMDU7IH1cbn1cbkBrZXlmcmFtZXMgc3Rvcm15X3RodW5kZXIge1xuXHQwJSAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7IG9wYWNpdHk6MTsgfVxuXHQ1JSAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMzRkZWcpOyBvcGFjaXR5OjE7IH1cblx0MTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IG9wYWNpdHk6MTsgfVxuXHQxNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMzRkZWcpOyBvcGFjaXR5OjA7IH1cbn1cblxuXG4uVGh1bmRlcnN0b3JtcyB7XG5cdGFuaW1hdGlvbjogU2NhdHRlcmVkIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuXHRiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJveC1zaGFkb3c6IFxuXHRcdCMyMjIyMjIgNjVweCAtMTVweCAwIC01cHgsIFxuXHRcdCMyMjIyMjIgMjVweCAtMjVweCwgXG5cdFx0IzIyMjIyMiAzMHB4IDEwcHgsIFxuXHRcdCMyMjIyMjIgNjBweCAxNXB4IDAgLTEwcHgsIFxuXHRcdCMyMjIyMjIgODVweCA1cHggMCAtNXB4O1xuXHRoZWlnaHQ6IDUwcHg7ICBcblx0d2lkdGg6IDUwcHg7IFxuXHRtYXJnaW4tbGVmdDogLTcwcHg7IFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTB2dztcblx0dG9wOiAzNnZoO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxuXG59XG4uVGh1bmRlcnN0b3JtczphZnRlciB7XG5cdGFuaW1hdGlvbjogc3Rvcm15X3NoYWRvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcblx0YmFja2dyb3VuZDogIzAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb250ZW50OiAnJztcblx0aGVpZ2h0OiAxNXB4OyBcblx0d2lkdGg6IDEyMHB4OyBcblx0b3BhY2l0eTogMC4yO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDVweDsgXG5cdGJvdHRvbTogLTYwcHg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uVGh1bmRlcnN0b3JtczpiZWZvcmUge1xuXHRhbmltYXRpb246IHN0b3JteV90aHVuZGVyIDJzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7IFxuXHRib3JkZXItbGVmdDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXRvcDogNDNweCBzb2xpZCB5ZWxsb3c7IFxuXHRib3gtc2hhZG93OiB5ZWxsb3cgLTdweCAtMzJweDtcblx0Y29udGVudDogJyc7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDU3cHg7XG5cdHRvcDogNzBweDtcblx0dHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgLTYwcHg7XG59XG5Aa2V5ZnJhbWVzIFRodW5kZXJzdG9ybXMge1xuXHQ1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLXB4KTsgfSBcbn0gIFxuQGtleWZyYW1lcyBzdG9ybXlfc2hhZG93IHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC43KTsgb3BhY2l0eTogMC4wNTsgfVxufVxuQGtleWZyYW1lcyBzdG9ybXlfdGh1bmRlciB7XG5cdDAlICB7IHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTsgb3BhY2l0eToxOyB9XG5cdDUlICB7IHRyYW5zZm9ybTogcm90YXRlKC0zNGRlZyk7IG9wYWNpdHk6MTsgfVxuXHQxMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgb3BhY2l0eToxOyB9XG5cdDE1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0zNGRlZyk7IG9wYWNpdHk6MDsgfVxufVxuXG4vKiBTTk9XWSAqL1xuLnNub3d5IHtcblx0YW5pbWF0aW9uOiBzbm93eSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSAxcztcblx0YmFja2dyb3VuZDogI0ZGRkZGRjsgXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym94LXNoYWRvdzogXG5cdFx0I0ZGRkZGRiA2NXB4IC0xNXB4IDAgLTVweCwgXG5cdFx0I0ZGRkZGRiAyNXB4IC0yNXB4LCBcblx0XHQjRkZGRkZGIDMwcHggMTBweCwgXG5cdFx0I0ZGRkZGRiA2MHB4IDE1cHggMCAtMTBweCwgXG5cdFx0I0ZGRkZGRiA4NXB4IDVweCAwIC01cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDUwcHg7ICBcblx0d2lkdGg6IDUwcHg7IFxuXHRtYXJnaW4tbGVmdDogLTcwcHg7IFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTB2dztcblx0dG9wOiAzNnZoO1xuXHR0cmFuc2Zvcm06IHNjYWxlKDAuMywgMC4zKTtcblxuXG59XG4uc25vd3k6YWZ0ZXIge1xuXHRhbmltYXRpb246IHNub3d5X3NoYWRvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSAxcztcblx0YmFja2dyb3VuZDogIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb250ZW50OiAnJztcblx0aGVpZ2h0OiAxNXB4O1xuXHR3aWR0aDogMTIwcHg7XG5cdG9wYWNpdHk6IDAuMjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA4cHg7XG5cdGJvdHRvbTogLTYwcHg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uc25vd3k6YmVmb3JlIHtcblx0YW5pbWF0aW9uOiBzbm93eV9zbm93IDJzIGluZmluaXRlIGxpbmVhcjtcblx0Y29udGVudDogJyc7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogN3B4O1xuXHR3aWR0aDogN3B4O1xuXHRvcGFjaXR5OiAwLjg7XG5cdHRyYW5zZm9ybTogc2NhbGUoLjkpO1xufVxuQGtleWZyYW1lcyBzbm93eSB7XG5cdDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cbn1cbkBrZXlmcmFtZXMgc25vd3lfc2hhZG93IHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC43KTsgb3BhY2l0eTogMC4wNTsgfVxufVxuQGtleWZyYW1lcyBzbm93eV9zbm93IHtcblx0MCUgeyAgXG5cdFx0Ym94LXNoYWRvdzogXG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDMwcHggMzBweCwgXG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDQwcHggNDBweCwgIFxuXHRcdFx0I0VFRUVFRSA1MHB4IDc1cHgsIFxuXHRcdFx0I0VFRUVFRSA1NXB4IDUwcHgsIFxuXHRcdFx0I0VFRUVFRSA3MHB4IDEwMHB4LCBcblx0XHRcdCNFRUVFRUUgODBweCA5NXB4LCBcblx0XHRcdCNFRUVFRUUgMTEwcHggNDVweCwgXG5cdFx0XHQjRUVFRUVFIDkwcHggMzVweDsgXG5cdH1cblx0MjUlIHsgIFxuXHQgIFx0Ym94LXNoYWRvdzogXG5cdFx0XHQjRUVFRUVFIDMwcHggNDVweCxcblx0XHRcdCNFRUVFRUUgNDBweCA2MHB4LFxuXHRcdFx0I0VFRUVFRSA1MHB4IDkwcHgsXG5cdFx0XHQjRUVFRUVFIDU1cHggNjVweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNzBweCAxMjBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgODBweCAxMjBweCxcblx0XHRcdCNFRUVFRUUgMTEwcHggNzBweCxcblx0XHRcdCNFRUVFRUUgOTBweCA2MHB4O1xuXHR9XG5cdDI2JSB7ICBcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0I0VFRUVFRSAzMHB4IDQ1cHgsXG5cdFx0XHQjRUVFRUVFIDQwcHggNjBweCxcblx0XHRcdCNFRUVFRUUgNTBweCA5MHB4LFxuXHRcdFx0I0VFRUVFRSA1NXB4IDY1cHgsXG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDcwcHggNDBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgODBweCAyMHB4LFxuXHRcdFx0I0VFRUVFRSAxMTBweCA3MHB4LFxuXHRcdFx0I0VFRUVFRSA5MHB4IDYwcHg7IFxuXHR9XG5cdDUwJSB7IFxuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjRUVFRUVFIDMwcHggNzBweCxcblx0XHRcdCNFRUVFRUUgNDBweCA4MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA1MHB4IDEwMHB4LFxuXHRcdFx0I0VFRUVFRSA1NXB4IDgwcHgsXG5cdFx0XHQjRUVFRUVFIDcwcHggNjBweCxcblx0XHRcdCNFRUVFRUUgODBweCA0NXB4LFxuXHRcdFx0I0VFRUVFRSAxMTBweCA5NXB4LFxuXHRcdFx0I0VFRUVFRSA5MHB4IDg1cHg7XG5cdH1cblx0NTElIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0I0VFRUVFRSAzMHB4IDcwcHgsXG5cdFx0XHQjRUVFRUVFIDQwcHggODBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNTBweCA0NXB4LFxuXHRcdFx0I0VFRUVFRSA1NXB4IDgwcHgsXG5cdFx0XHQjRUVFRUVFIDcwcHggNjBweCxcblx0XHRcdCNFRUVFRUUgODBweCA0NXB4LFxuXHRcdFx0I0VFRUVFRSAxMTBweCA5NXB4LFxuXHRcdFx0I0VFRUVFRSA5MHB4IDg1cHg7XG5cdH1cblx0NzUlIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0I0VFRUVFRSAzMHB4IDk1cHgsXG5cdFx0XHQjRUVFRUVFIDQwcHggMTAwcHgsXG5cdFx0XHQjRUVFRUVFIDUwcHggNjBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNTVweCA5NXB4LFxuXHRcdFx0I0VFRUVFRSA3MHB4IDgwcHgsXG5cdFx0XHQjRUVFRUVFIDgwcHggNzBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgMTEwcHggMTIwcHgsXG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDkwcHggMTEwcHg7XG5cdH1cblx0NzYlIHtcblx0XHRib3gtc2hhZG93OlxuXHRcdFx0I0VFRUVFRSAzMHB4IDk1cHgsXG5cdFx0XHQjRUVFRUVFIDQwcHggMTAwcHgsXG5cdFx0XHQjRUVFRUVFIDUwcHggNjBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNTVweCAzNXB4LFxuXHRcdFx0I0VFRUVFRSA3MHB4IDgwcHgsXG5cdFx0XHQjRUVFRUVFIDgwcHggNzBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgMTEwcHggMjVweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgOTBweCAxNXB4O1xuXHR9XG5cdDEwMCUge1xuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDMwcHggMTIwcHgsXG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDQwcHggMTIwcHgsXG5cdFx0XHQjRUVFRUVFIDUwcHggNzVweCxcblx0XHRcdCNFRUVFRUUgNTVweCA1MHB4LFxuXHRcdFx0I0VFRUVFRSA3MHB4IDEwMHB4LFxuXHRcdFx0I0VFRUVFRSA4MHB4IDk1cHgsXG5cdFx0XHQjRUVFRUVFIDExMHB4IDQ1cHgsXG5cdFx0XHQjRUVFRUVFIDkwcHggMzVweDtcblx0fVxufVxuXG5cbi5CbG93aW5nU25vdyB7XG5cdGFuaW1hdGlvbjogc25vd3kgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgMXM7XG5cdGJhY2tncm91bmQ6ICNGRkZGRkY7IFxuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJveC1zaGFkb3c6IFxuXHRcdCNGRkZGRkYgNjVweCAtMTVweCAwIC01cHgsIFxuXHRcdCNGRkZGRkYgMjVweCAtMjVweCwgXG5cdFx0I0ZGRkZGRiAzMHB4IDEwcHgsIFxuXHRcdCNGRkZGRkYgNjBweCAxNXB4IDAgLTEwcHgsIFxuXHRcdCNGRkZGRkYgODVweCA1cHggMCAtNXB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA1MHB4OyAgXG5cdHdpZHRoOiA1MHB4OyBcblx0bWFyZ2luLWxlZnQ6IC03MHB4OyBcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwdnc7XG5cdHRvcDogMzZ2aDtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjMsIDAuMyk7XG5cblxufVxuLlNub3c6YWZ0ZXIge1xuXHRhbmltYXRpb246IHNub3d5X3NoYWRvdyA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSAxcztcblx0YmFja2dyb3VuZDogIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb250ZW50OiAnJztcblx0aGVpZ2h0OiAxNXB4O1xuXHR3aWR0aDogMTIwcHg7XG5cdG9wYWNpdHk6IDAuMjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA4cHg7XG5cdGJvdHRvbTogLTYwcHg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uU25vdzpiZWZvcmUge1xuXHRhbmltYXRpb246IHNub3d5X3Nub3cgMnMgaW5maW5pdGUgbGluZWFyO1xuXHRjb250ZW50OiAnJztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA3cHg7XG5cdHdpZHRoOiA3cHg7XG5cdG9wYWNpdHk6IDAuODtcblx0dHJhbnNmb3JtOiBzY2FsZSguOSk7XG59XG5Aa2V5ZnJhbWVzIHNub3d5IHtcblx0NTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxufVxuQGtleWZyYW1lcyBzbm93eV9zaGFkb3cge1xuXHQ1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjcpOyBvcGFjaXR5OiAwLjA1OyB9XG59XG5Aa2V5ZnJhbWVzIHNub3d5X3Nub3cge1xuXHQwJSB7ICBcblx0XHRib3gtc2hhZG93OiBcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgMzBweCAzMHB4LCBcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNDBweCA0MHB4LCAgXG5cdFx0XHQjRUVFRUVFIDUwcHggNzVweCwgXG5cdFx0XHQjRUVFRUVFIDU1cHggNTBweCwgXG5cdFx0XHQjRUVFRUVFIDcwcHggMTAwcHgsIFxuXHRcdFx0I0VFRUVFRSA4MHB4IDk1cHgsIFxuXHRcdFx0I0VFRUVFRSAxMTBweCA0NXB4LCBcblx0XHRcdCNFRUVFRUUgOTBweCAzNXB4OyBcblx0fVxuXHQyNSUgeyAgXG5cdCAgXHRib3gtc2hhZG93OiBcblx0XHRcdCNFRUVFRUUgMzBweCA0NXB4LFxuXHRcdFx0I0VFRUVFRSA0MHB4IDYwcHgsXG5cdFx0XHQjRUVFRUVFIDUwcHggOTBweCxcblx0XHRcdCNFRUVFRUUgNTVweCA2NXB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA3MHB4IDEyMHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA4MHB4IDEyMHB4LFxuXHRcdFx0I0VFRUVFRSAxMTBweCA3MHB4LFxuXHRcdFx0I0VFRUVFRSA5MHB4IDYwcHg7XG5cdH1cblx0MjYlIHsgIFxuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjRUVFRUVFIDMwcHggNDVweCxcblx0XHRcdCNFRUVFRUUgNDBweCA2MHB4LFxuXHRcdFx0I0VFRUVFRSA1MHB4IDkwcHgsXG5cdFx0XHQjRUVFRUVFIDU1cHggNjVweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNzBweCA0MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA4MHB4IDIwcHgsXG5cdFx0XHQjRUVFRUVFIDExMHB4IDcwcHgsXG5cdFx0XHQjRUVFRUVFIDkwcHggNjBweDsgXG5cdH1cblx0NTAlIHsgXG5cdFx0Ym94LXNoYWRvdzpcblx0XHRcdCNFRUVFRUUgMzBweCA3MHB4LFxuXHRcdFx0I0VFRUVFRSA0MHB4IDgwcHgsXG5cdFx0XHRyZ2JhKDIzOCwyMzgsMjM4LDApIDUwcHggMTAwcHgsXG5cdFx0XHQjRUVFRUVFIDU1cHggODBweCxcblx0XHRcdCNFRUVFRUUgNzBweCA2MHB4LFxuXHRcdFx0I0VFRUVFRSA4MHB4IDQ1cHgsXG5cdFx0XHQjRUVFRUVFIDExMHB4IDk1cHgsXG5cdFx0XHQjRUVFRUVFIDkwcHggODVweDtcblx0fVxuXHQ1MSUge1xuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjRUVFRUVFIDMwcHggNzBweCxcblx0XHRcdCNFRUVFRUUgNDBweCA4MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA1MHB4IDQ1cHgsXG5cdFx0XHQjRUVFRUVFIDU1cHggODBweCxcblx0XHRcdCNFRUVFRUUgNzBweCA2MHB4LFxuXHRcdFx0I0VFRUVFRSA4MHB4IDQ1cHgsXG5cdFx0XHQjRUVFRUVFIDExMHB4IDk1cHgsXG5cdFx0XHQjRUVFRUVFIDkwcHggODVweDtcblx0fVxuXHQ3NSUge1xuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjRUVFRUVFIDMwcHggOTVweCxcblx0XHRcdCNFRUVFRUUgNDBweCAxMDBweCxcblx0XHRcdCNFRUVFRUUgNTBweCA2MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA1NXB4IDk1cHgsXG5cdFx0XHQjRUVFRUVFIDcwcHggODBweCxcblx0XHRcdCNFRUVFRUUgODBweCA3MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSAxMTBweCAxMjBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgOTBweCAxMTBweDtcblx0fVxuXHQ3NiUge1xuXHRcdGJveC1zaGFkb3c6XG5cdFx0XHQjRUVFRUVFIDMwcHggOTVweCxcblx0XHRcdCNFRUVFRUUgNDBweCAxMDBweCxcblx0XHRcdCNFRUVFRUUgNTBweCA2MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA1NXB4IDM1cHgsXG5cdFx0XHQjRUVFRUVFIDcwcHggODBweCxcblx0XHRcdCNFRUVFRUUgODBweCA3MHB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSAxMTBweCAyNXB4LFxuXHRcdFx0cmdiYSgyMzgsMjM4LDIzOCwwKSA5MHB4IDE1cHg7XG5cdH1cblx0MTAwJSB7XG5cdFx0Ym94LXNoYWRvdzpcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgMzBweCAxMjBweCxcblx0XHRcdHJnYmEoMjM4LDIzOCwyMzgsMCkgNDBweCAxMjBweCxcblx0XHRcdCNFRUVFRUUgNTBweCA3NXB4LFxuXHRcdFx0I0VFRUVFRSA1NXB4IDUwcHgsXG5cdFx0XHQjRUVFRUVFIDcwcHggMTAwcHgsXG5cdFx0XHQjRUVFRUVFIDgwcHggOTVweCxcblx0XHRcdCNFRUVFRUUgMTEwcHggNDVweCxcblx0XHRcdCNFRUVFRUUgOTBweCAzNXB4O1xuXHR9XG5cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmJvZHkge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcblx0bWFyZ2luOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5oMSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuXHR0b3A6IDUwJTtcblx0bWFyZ2luLXRvcDogLTEzMHB4O1xuICBcdG9wYWNpdHk6IC42O1xuICBcdGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4jZmFicml6aW8ge1xuXHRib3JkZXItdG9wOiAxMDBweCBzb2xpZCBibGFjazsgXG5cdGJvcmRlci1yaWdodDogNjNweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0d2lkdGg6IDA7XG5cdHRyYW5zZm9ybTogc2NhbGUoLjMzKTtcblx0dHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXHRtYXJnaW46IDIwcHg7XG5cdG9wYWNpdHk6LjY7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiNmYWJyaXppbzpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiBibGFjaztcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMzBweDtcblx0Y29udGVudDogJyc7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0cmFuc2Zvcm06IHNrZXdYKC0zMmRlZyk7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtNjRweDtcblx0bGVmdDogMzBweDtcbn1cbiNmYWJyaXppbzphZnRlciB7XG5cdGJhY2tncm91bmQ6IGJsYWNrO1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiAzNnB4O1xuXHRjb250ZW50OiAnJztcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRyYW5zZm9ybTogc2tld1goLTMyZGVnKTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IC0xMzBweDtcblx0bGVmdDogNTBweDtcbn1cbmEgeyBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIGNvbG9yOiAjNzc3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDBCQkZGLCAjMDBCQkZGIDE0LjMlLCAjMkVCNUU1IDE0LjMlLCAjMkVCNUU1IDI4LjYlLCAjRTZFNkU2IDI4LjYlLCAjRTZFNkU2IDQyLjklLCAjRjNEMTY2IDQyLjklLCAjRjNEMTY2IDU3LjIlLCAjMjIyMjMzIDU3LjIlLCAjMjIyMjMzIDcxLjUlLCAjNDQ0NDQ0IDcxLjUlLCAjNDQ0NDQ0IDg1LjglLCAjODVEQjhDIDg1LjglKTtcblx0dHJhbnNmb3JtOiBzY2FsZSguOSk7XG5cdHdpZHRoOiAxMjAwcHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0aGVpZ2h0OiAyMTBweDtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDUwJTtcblx0bWFyZ2luOiAtNjVweCAtNjAwcHg7XG59XG5cbi5kYXkxe1xuXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDM3dmg7XG4gICAgcmlnaHQ6IDIxdnc7XG59XG5cbi5kYXkye1xuXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDM3dmg7XG4gICAgcmlnaHQ6IDIxdnc7XG59XG4uZGF5M3tcblxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzN3ZoO1xuICAgIHJpZ2h0OiAyMXZ3O1xufVxuXG4uZGF5NHtcblxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzN3ZoO1xuICAgIHJpZ2h0OiAyMXZ3O1xufVxuXG4uZGF5NXtcblxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAzN3ZoO1xuICAgIHJpZ2h0OiAyMXZ3O1xufVxuXG5cbi5kYXk2e1xuXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDM3dmg7XG4gICAgcmlnaHQ6IDIxdnc7XG59XG5cbi5uZWFybWV7XG5cblx0Ym90dG9tOiAxNHZoO1xuXHRsZWZ0OiAzdnc7XG5cbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/weather-details/weather-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/weather-details/weather-details.component.ts ***!
  \**************************************************************/
/*! exports provided: WeatherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsComponent", function() { return WeatherDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main/main.component */ "./src/app/main/main.component.ts");




var WeatherDetailsComponent = /** @class */ (function () {
    function WeatherDetailsComponent(service, main) {
        this.service = service;
        this.main = main;
        this.flag = false;
        this.flag2 = false;
    }
    WeatherDetailsComponent.prototype.ngOnInit = function () {
        this.getPosition();
    };
    WeatherDetailsComponent.prototype.convertToFahrenheit = function (temperature, event) {
        console.log('clicked!');
        if (this.flag2 == true) {
            console.log('this code ran in Cel');
            event.target.disabled = true;
            this.flag = true;
            this.convertToCelsius(temperature, event);
        }
        this.service.convertToFahrenheit(temperature);
        if (this.flag) {
            event.target.disabled = false;
        }
    };
    WeatherDetailsComponent.prototype.convertToCelsius = function (temperature, event) {
        event.target.disabled = false;
        console.log('you clicked fahrenheit');
        this.flag2 = true;
        if (this.flag) {
            event.target.disabled = false;
        }
        this.service.convertToCelsius(temperature);
    };
    WeatherDetailsComponent.prototype.makeApiCall = function (city) {
        console.log(city);
        console.log("called me");
        this.weather_data = this.service.apiCall(this.city);
        this.city = "";
    };
    WeatherDetailsComponent.prototype.getPosition = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    console.log(position);
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    _this.lat = position.coords.latitude;
                    _this.long = position.coords.longitude;
                    _this.service.apiCallLongLat(_this.long, _this.lat);
                }
            }, function (err) {
                reject(err);
            });
        });
    };
    WeatherDetailsComponent.ctorParameters = function () { return [
        { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
        { type: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], WeatherDetailsComponent.prototype, "city", void 0);
    WeatherDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-details',
            template: __webpack_require__(/*! raw-loader!./weather-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-details/weather-details.component.html"),
            styles: [__webpack_require__(/*! ./weather-details.component.css */ "./src/app/weather-details/weather-details.component.css")]
        })
    ], WeatherDetailsComponent);
    return WeatherDetailsComponent;
}());



/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WeatherService = /** @class */ (function () {
    function WeatherService(https) {
        this.https = https;
        this.data_received = false;
        this.clicked = false;
        this.clicked_Celsius = false;
        this.morning_flag = false;
        this.dayTimeFlag = false;
        this.evening_flag = true;
        this.night_flag = false;
        // uri = "http://localhost:5000"
        this.uri = "https://philweather.herokuapp.com";
    }
    WeatherService.prototype.apiCall = function (city) {
        var _this = this;
        console.log(city);
        this.https.post(this.uri + '/phil', { city: city })
            .subscribe(function (response) {
            _this.data = JSON.parse(response.city_data);
            //  return this.data
            console.log(_this.data);
            // On city search, update the GeoLocation to be overwritten by searched city
            _this.current_location = _this.data;
            _this.current_observation_temperature = _this.current_location.current_observation.condition.temperature;
            _this.current_condition = _this.current_location.current_observation.condition.text;
            _this.current_condition_low = _this.current_location.forecasts[0].low;
            _this.current_condition_high = _this.current_location.forecasts[0].high;
            console.log(_this.current_condition);
            console.log(_this.current_condition_high);
            _this.current_condition_low = _this.current_location.forecasts[0].low;
            _this.current_condition_high = _this.current_location.forecasts[0].high;
            console.log(_this.current_condition_low);
            console.log(_this.current_condition_high);
            _this.day_two_high = _this.current_location.forecasts[1].high;
            _this.day_three_high = _this.current_location.forecasts[2].high;
            _this.day_four_high = _this.current_location.forecasts[3].high;
            _this.day_five_high = _this.current_location.forecasts[4].high;
            _this.day_six_high = _this.current_location.forecasts[5].high;
            _this.day_seven_high = _this.current_location.forecasts[6].high;
            _this.day_two_low = _this.current_location.forecasts[1].low;
            _this.day_three_low = _this.current_location.forecasts[2].low;
            _this.day_four_low = _this.current_location.forecasts[3].low;
            _this.day_five_low = _this.current_location.forecasts[4].low;
            _this.day_six_low = _this.current_location.forecasts[5].low;
            _this.day_seven_low = _this.current_location.forecasts[6].low;
            _this.data_received = true;
            _this.sunset = _this.current_location.current_observation.astronomy.sunset.substring(0, 7);
            //  console.log(this.convertTo24Hour(this.sunset))
            _this.timezone = _this.current_location.location.timezone_id;
            console.log(_this.timezone);
            _this.getLocalTime(_this.timezone);
        });
    };
    WeatherService.prototype.convertToFahrenheit = function (temperature) {
        // (°F − 32) x 5/9
        console.log(this.current_observation_temperature);
        this.current_observation_temperature = Math.round((this.current_observation_temperature - 32) * 5 / 9);
        for (var i = 0; i < this.current_location.forecasts.length; i++) {
            this.current_condition_high = Math.round((this.current_location.forecasts[0].high - 32) * 5 / 9);
            this.current_condition_low = Math.round((this.current_location.forecasts[0].low - 32) * 5 / 9);
            this.day_two_high = Math.round((this.current_location.forecasts[1].high - 32) * 5 / 9);
            this.day_three_high = Math.round((this.current_location.forecasts[2].high - 32) * 5 / 9);
            this.day_four_high = Math.round((this.current_location.forecasts[3].high - 32) * 5 / 9);
            this.day_five_high = Math.round((this.current_location.forecasts[4].high - 32) * 5 / 9);
            this.day_six_high = Math.round((this.current_location.forecasts[5].high - 32) * 5 / 9);
            this.day_seven_high = Math.round((this.current_location.forecasts[6].high - 32) * 5 / 9);
            this.day_two_low = Math.round((this.current_location.forecasts[1].low - 32) * 5 / 9);
            this.day_three_low = Math.round((this.current_location.forecasts[2].low - 32) * 5 / 9);
            this.day_four_low = Math.round((this.current_location.forecasts[3].low - 32) * 5 / 9);
            this.day_five_low = Math.round((this.current_location.forecasts[4].low - 32) * 5 / 9);
            this.day_six_low = Math.round((this.current_location.forecasts[5].low - 32) * 5 / 9);
            this.day_seven_low = Math.round((this.current_location.forecasts[6].low - 32) * 5 / 9);
        }
    };
    WeatherService.prototype.convertToCelsius = function (temperature) {
        // (0°C × 9/5) + 32
        console.log("clicked me");
        this.current_observation_temperature = (this.current_location.current_observation.condition.temperature);
        this.current_condition_low = this.current_location.forecasts[0].low;
        this.current_condition_high = this.current_location.forecasts[0].high;
        this.day_two_high = this.current_location.forecasts[1].high;
        this.day_three_high = this.current_location.forecasts[2].high;
        this.day_four_high = this.current_location.forecasts[3].high;
        this.day_five_high = this.current_location.forecasts[4].high;
        this.day_six_high = this.current_location.forecasts[5].high;
        this.day_seven_high = this.current_location.forecasts[6].high;
        this.day_two_low = this.current_location.forecasts[1].low;
        this.day_three_low = this.current_location.forecasts[2].low;
        this.day_four_low = this.current_location.forecasts[3].low;
        this.day_five_low = this.current_location.forecasts[4].low;
        this.day_six_low = this.current_location.forecasts[5].low;
        this.day_seven_low = this.current_location.forecasts[6].low;
        if (this.clicked_Celsius = true) {
            this.clicked = false;
        }
    };
    WeatherService.prototype.apiCallLongLat = function (long, lat) {
        var _this = this;
        console.log(long);
        console.log(lat);
        this.data_received = false;
        this.https.post(this.uri + '/get_current_location', { long: long, lat: lat })
            .subscribe(function (response) {
            _this.current_location = JSON.parse(response.current_location);
            _this.current_observation_temperature = _this.current_location.current_observation.condition.temperature;
            _this.current_condition = _this.current_location.current_observation.condition.text;
            console.log(_this.current_location);
            console.log(_this.current_observation_temperature);
            _this.current_condition_low = _this.current_location.forecasts[0].low;
            _this.current_condition_high = _this.current_location.forecasts[0].high;
            console.log(_this.current_condition_low);
            console.log(_this.current_condition_high);
            _this.day_two_high = _this.current_location.forecasts[1].high;
            _this.day_three_high = _this.current_location.forecasts[2].high;
            _this.day_four_high = _this.current_location.forecasts[3].high;
            _this.day_five_high = _this.current_location.forecasts[4].high;
            _this.day_six_high = _this.current_location.forecasts[5].high;
            _this.day_seven_high = _this.current_location.forecasts[6].high;
            _this.day_two_low = _this.current_location.forecasts[1].low;
            _this.day_three_low = _this.current_location.forecasts[2].low;
            _this.day_four_low = _this.current_location.forecasts[3].low;
            _this.day_five_low = _this.current_location.forecasts[4].low;
            _this.day_six_low = _this.current_location.forecasts[5].low;
            _this.day_seven_low = _this.current_location.forecasts[6].low;
            _this.sunrise = _this.current_location.current_observation.astronomy.sunrise.substring(0, 4);
            _this.sunrise = _this.sunrise + ':00';
            _this.sunset = _this.current_location.current_observation.astronomy.sunset.substring(0, 7);
            // console.log(this.convertTo24Hour(this.sunset))
            //  return this.data
            _this.timezone = _this.current_location.location.timezone_id;
            console.log(_this.timezone);
            _this.data_received = true;
            _this.getLocalTime(_this.timezone);
        });
    };
    WeatherService.prototype.getLocalTime = function (timezone) {
        var _this = this;
        timezone = this.timezone;
        this.https.post(this.uri + '/get_local_time', { timezone: timezone })
            .subscribe(function (response) {
            _this.timezone = JSON.parse(response.timezone);
            console.log(_this.timezone);
            _this.timezone = _this.timezone.datetime.substring(11, 16);
            console.log(_this.timezone);
            //  this.setTimeAndCompare(this.timezone );
        });
    };
    WeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phillipdacosta/angularweathernew/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map