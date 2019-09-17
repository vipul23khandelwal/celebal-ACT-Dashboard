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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"ml-4 mr-4\">\r\n    <app-home></app-home>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-dark\">\n    <a class=\"navbar-brand text-center m-auto text-info\" href=\"#\">\n       <h1 style=\"letter-spacing: 2.5px;font-size: 1.6rem;\" > ACT - Inbound Logistics Dashboard - Real Time </h1>\n    </a>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"load\" id=\"load\"></div>\n  <div class=\"contents\" id=\"contents\" style=\"visibility: hidden;\" >\n\n\n<div class=\"row mt-4\">\n    <div class=\"col\">\n        <div class=\"card bg-dark text-light text-center\">\n            <div class=\"card-header text-info\">\n                Port Stock\n            </div>\n            <div class=\"card-body\">\n                <table class=\"w-100\">\n                    <thead>\n                        <td></td>\n                        <td> P1 </td>\n                        <td> P2 </td>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td> KSPL </td>\n                            <td> {{inboundlist.Port_stock.Stock_Kspl_P1}} </td>\n                            <td> {{inboundlist.Port_stock.Stock_Kspl_P2}} </td>\n                        </tr>\n                        <tr>\n                            <td> GPL </td>\n                            <td> {{inboundlist.Port_stock.Stock_Gpl_P1}} </td>\n                            <td> {{inboundlist.Port_stock.Stock_Gpl_P2}} </td>\n                        </tr>\n                        <tr>\n                            <td> Vessel Stock </td>\n                            <td> {{inboundlist.Port_stock.vessel_Stock_Kspl_P1}} </td>\n                            <td> {{inboundlist.Port_stock.vessel_Stock_Kspl_P2}} </td>\n                        </tr>\n                        <tr>\n                            <td> Total </td>\n                            \n                            <td> {{ total_port_stock_P1 }} </td>\n                            <td> {{ total_port_stock_P2 }} </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card bg-dark  text-light\">\n            <div class=\" card-header text-center text-info\">\n                Plant Stock\n            </div>\n            <div class=\" card-body\">\n                    <p class=\"mb-2\"> P1 Days : {{ inboundlist.P1_P2_days.P1_days }}</p>\n                    <p class=\"mb-2\" > P2 Days : {{ inboundlist.P1_P2_days.P2_days }}</p>\n                    <p class=\"mb-2\" > Complex Days : {{ inboundlist.P1_P2_days.complex_days }} </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"card bg-dark text-center text-light\">\n            <div class=\"card-header text-info\">\n                In Transit Stock\n            </div>\n            <div class=\"card-body\">\n                    <table class=\"w-100\">\n                            <thead>\n                                <td></td>\n                                <td> P1 </td>\n                                <td> P2 </td>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td> Bulker </td>\n                                    <td> {{ inboundlist.Transit_Stock.Bulker_P1 }} </td>\n                                    <td> {{ inboundlist.Transit_Stock.Bulker_P2 }} </td>\n                                </tr>\n                                <tr>\n                                    <td> Truck </td>\n                                    <td> {{ inboundlist.Transit_Stock.Truck_P1 }} </td>\n                                    <td> {{ inboundlist.Transit_Stock.Truck_P2 }} </td>\n                                </tr>\n                                <tr>\n                                    <td> BTAP </td>\n                                    <td> {{inboundlist.Transit_Stock.BTAP_P1}} </td>\n                                    <td> {{inboundlist.Transit_Stock.BTAP_P2}} </td>\n                                </tr>\n                                <tr>\n                                    <td> Total </td>\n                                    <td> {{total_transit_stock_P1}} </td>\n                                    <td> {{total_transit_stock_P2}} </td>\n                                </tr>\n                            </tbody>\n                        </table>\n            </div>\n        </div>\n    </div>\n    <div class=\"col \">\n        <div class=\"card bg-dark  text-light\">\n            <div class=\" card-header text-center text-info\">\n                Consumption\n            </div>\n            <div class=\"card-body\">\n                   <p class=\"mb-1\" > P1 Consumption : {{ inboundlist.consumption.P1_Consumption }} </p>\n                   <p class=\"mb-1\" > P2 Consumption : {{ inboundlist.consumption.P2_Consumption }} </p>\n            </div> \n        </div>\n    </div>\n    <div class=\"col \">\n        <div class=\"card bg-dark text-center text-light \">\n            <div class=\" card-header text-info\">\n                Plant Stock\n            </div>\n            <div class=\"card-body\">\n                <p> {{ inboundlist.Plant_Stock.Planned_Stock }} vs {{ inboundlist.Plant_Stock.Actual_Stock }} </p>\n                <p> {{ inboundlist.P1_P2_days.P1_days + inboundlist.P1_P2_days.P2_days }} </p>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col\"></div>\n    <div class=\"col-4\">\n        <div class=\"card bg-dark text-center text-info\">\n            BTAP Status\n        </div>\n    </div>\n    <div class=\"col\"></div>\n    <div class=\"col-4\">\n        <div class=\"card bg-dark text-center text-info\">\n            Bulker / Truck Status\n        </div>\n    </div>\n    <div class=\"col\"></div>\n</div>\n<br>\n<div class=\"row  text-light \">\n    <div class=\"col ml-2 mr-4 \"  >\n        <div class=\"row\">\n            <div class=\"col-4 pl-0 pr-0 bg-dark\">\n                <div class=\"mb-2 card-header\">\n                    Lanjigarh <span class=\"float-right\"  > {{LNJ_LNJ}} </span>\n                </div>\n                <div class=\"mb-2 card-body\" *ngIf=\"LNJ.LNJ\">\n                    <b> {{ LNJ.LNJ.current_station }} </b>\n                    <span class=\"float-right p-2 bg-success\" *ngIf=\"LNJ[LNJ].load_status == 'L'\"  > {{LNJ[LNJ].load_status}} </span>\n                    <span class=\"float-right p-2 bg-danger\" *ngIf=\"LNJ[LNJ].load_status == 'E'\"  > {{LNJ[LNJ].load_status}} </span>\n                </div>\n                <div class=\"p-0 pl-4 card-body\" *ngIf=\"!(LNJ.LNJ)\">\n                    <b>No Rakes Arrived </b>\n                </div>\n                <div class=\"mb-2 card-header\">\n                        Transit <span class=\"float-right\" > {{LNJ_transit}} </span>\n                </div>\n                <div class=\"card-body pt-2 pb-2\">\n                    <p  *ngFor=\"let item of LNJ | keyvalue\" class=\"pt-0 pb-0 mb-1\" >\n                            {{LNJ[item.key].current_station}}  \n                            <span class=\"float-right p-2  bg-success\" *ngIf=\"LNJ[item.key].load_status == 'L'\"  >  </span>\n                            <span class=\"float-right p-2 bg-danger\" *ngIf=\"LNJ[item.key].load_status == 'E'\"  >  </span>\n                    </p>\n                   <!-- <div *ngFor=\"let item of LNJrakes | keyvalue\">\n                            <b>{{item.key}}</b> : <b>{{item.value}}</b>\n                    </div> -->\n                </div>\n                <div class=\"mb-2 card-header\">\n                        Jharsuguda <span class=\"float-right\" > {{LNJ_JHRS}} </span>\n                </div>\n                <div class=\"mb-2 card-body\" *ngIf=\"LNJ.JHRS\">\n                        <b> {{ LNJ.JHRS.current_station }} </b>\n                        <span class=\"float-right p-2 bg-success\" *ngIf=\"LNJ[LNJ].load_status == 'L'\"  > {{LNJ[JHRS].load_status}} </span>\n                        <span class=\"float-right p-2 bg-danger\" *ngIf=\"LNJ[LNJ].load_status == 'E'\"  > {{LNJ[JHRS].load_status}} </span>\n                </div>\n                <div class=\"p-0 pl-4 card-body mb-2\" *ngIf=\"!(LNJ.JHRS)\">\n                    <b>No Rakes at the Source</b>\n                </div>\n                <div class=\"mb-2 card-footer\">\n                 Total rakes in circuit  <span class=\"float-right\" > {{ LNJ_LNJ + LNJ_transit + LNJ_JHRS}} </span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <br><br><br><br><br><br>\n                <span > Empty Rake <span class=\"float-right p-2 pr-4 pl-4  bg-success\"  > </span> </span>\n                <span > Loaded Rake <span class=\"float-right p-2 pr-4 pl-4  bg-danger\"  > </span>  </span>\n            </div>\n            <div class=\"col-4 pl-0 pr-0 bg-dark\">\n                    <div class=\"mb-2 card-header\">\n                            KSPL <span class=\"float-right\"  > {{KSPL_KSPL}} </span>\n                        </div>\n                        <div class=\"mb-2 card-body\" *ngIf=\"KSPL.KSPL\">\n                            <b> {{ KSPL.KSPL.current_station }} </b>\n                            <span class=\"float-right p-2 bg-success\" *ngIf=\"KSPL[KSPL].load_status == 'L'\"  > {{KSPL[KSPL].load_status}} </span>\n                            <span class=\"float-right p-2 bg-danger\" *ngIf=\"KSPL[KSPL].load_status == 'E'\"  > {{KSPL[KSPL].load_status}} </span>\n                        </div>\n                        <div class=\"p-0 pl-4 card-body\" *ngIf=\"!(KSPL[KSPL])\">\n                            <b>No Rakes Arrived </b>\n                        </div>\n                        <div class=\"mb-2 card-header\">\n                            Transit <span class=\"float-right\" > {{KSPL_transit}} </span>\n                        </div>\n                        <div class=\"card-body pt-2 pb-2\">\n                            <p  *ngFor=\"let item of KSPL | keyvalue\" class=\"pt-0 pb-0 mb-1\" >\n                                    {{KSPL[item.key].current_station}}  \n                                    <span class=\"float-right p-2  bg-success\" *ngIf=\"KSPL[item.key].load_status == 'L'\"  >  </span>\n                                    <span class=\"float-right p-2 bg-danger\" *ngIf=\"KSPL[item.key].load_status == 'E'\"  >  </span>\n                            </p>\n                           <!-- <div *ngFor=\"let item of LNJrakes | keyvalue\">\n                                    <b>{{item.key}}</b> : <b>{{item.value}}</b>\n                            </div> -->\n                        </div>\n                        <div class=\"mb-2 card-header\">\n                                Jharsuguda <span class=\"float-right\" > {{KSPL_JHRS}} </span>\n                        </div>\n                        <div class=\"mb-2 card-body\" *ngIf=\"KSPL.JHRS\">\n                                <b> {{ KSPL.JHRS.current_station }} </b>\n                                <span class=\"float-right p-2 bg-success\" *ngIf=\"KSPL[JHRS].load_status == 'L'\"  > {{KSPL[JHRS].load_status}} </span>\n                                <span class=\"float-right p-2 bg-danger\" *ngIf=\"KSPL[JHRS].load_status == 'E'\"  > {{KSPL[JHRS].load_status}} </span>\n                        </div>\n                        <div class=\"p-0 pl-4 card-body mb-2\" *ngIf=\"!(KSPL.JHRS)\">\n                            <b>No Rakes at the Source</b>\n                        </div>\n                        <div class=\"mb-2 card-footer\">\n                         Total rakes in circuit  <span class=\"float-right\" > {{ KSPL_KSPL + KSPL_transit + KSPL_JHRS}} </span>\n                        </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col  \"  >\n       <div class=\"row\">\n            <div class=\"col\">\n                    <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Truck / Bulker Status\n                        </div>\n                        <div class=\" card-body\">\n                            Status / Dispatch A.O.D\n                        </div>\n                    </div>\n                </div>\n           <div class=\"col\">\n                <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Truck / Bulker Status\n                        </div>\n                        <div class=\" card-body\">\n                            Status / Receipt in Plant A.O.D \n                        </div>\n                </div>\n           </div>\n           <div class=\"col\">\n                <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Truck / Bulker Status\n                        </div>\n                        <div class=\" card-body\">\n                            Status / Unloaded in Plant A.O.D \n                        </div>\n                </div>\n           </div>\n       </div>\n       <div class=\"row mt-2\">\n            <div class=\"col\">\n                    <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Bulker Logo\n                        </div>\n                        <div class=\" card-body\">\n                            <p class=\"mb-1\"> P1 - No. and Qty. </p>\n                            <p class=\"mb-1\"> P2 - No. and Qty. </p>\n                        </div>\n                    </div>\n                </div>\n           <div class=\"col\">\n                <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Bulker Logo\n                        </div>\n                        <div class=\" card-body\">\n                            <p class=\"mb-1\"> P1 - No. and Qty. </p>\n                            <p class=\"mb-1\"> P2 - No. and Qty. </p> \n                        </div>\n                </div>\n           </div>\n           <div class=\"col\">\n                <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Bulker Logo\n                        </div>\n                        <div class=\" card-body\">\n                            <p class=\"mb-1\"> P1 - No. and Qty. </p>\n                            <p class=\"mb-1\"> P2 - No. and Qty. </p> \n                        </div>\n                </div>\n           </div>\n       </div>\n       <div class=\"row mt-2\">\n            <div class=\"col\">\n                    <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Truck Logo\n                        </div>\n                        <div class=\" card-body\">\n                            <p class=\"mb-1\"> P1 - No. and Qty. </p>\n                            <p class=\"mb-1\"> P2 - No. and Qty. </p>\n                        </div>\n                    </div>\n                </div>\n           <div class=\"col\">\n                <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Truck Logo\n                        </div>\n                        <div class=\" card-body\">\n                            <p class=\"mb-1\"> P1 - No. and Qty. </p>\n                            <p class=\"mb-1\"> P2 - No. and Qty. </p> \n                        </div>\n                </div>\n           </div>\n           <div class=\"col\">\n                <div class=\"card bg-dark  text-light\">\n                        <div class=\" card-header text-center text-info\">\n                            Truck Logo\n                        </div>\n                        <div class=\" card-body\">\n                            <p class=\"mb-1\"> P1 - No. and Qty. </p>\n                            <p class=\"mb-1\"> P2 - No. and Qty. </p> \n                        </div>\n                </div>\n           </div>\n       </div>\n    </div>\n</div>\n\n</div>\n\n\n<!--\n<h1>{{inboundlist.consumption.P1_Consumption}}</h1>\n<h1>{{jsondatalist}}</h1>\n-->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'celebal-vedanta';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_vedanta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vedanta.service */ "./src/app/services/vedanta.service.ts");



let HomeComponent = class HomeComponent {
    // LNJrakes = {
    //   'transit':7,
    //   'V1':{
    //     'current_station': 'Brundmal',
    //     'Load_status':'L',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'V2':{
    //     'current_station': 'Sason',
    //     'Load_status':'L',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'V3':{
    //     'current_station': 'Bargarh Road',
    //     'Load_status':'E',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'V4':{
    //     'current_station': 'Ambodala',
    //     'Load_status':'E',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'V5':{
    //     'current_station': 'Badmal',
    //     'Load_status':'L',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'V6':{
    //     'current_station': 'Loisingha',
    //     'Load_status':'L',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'V7':{
    //     'current_station': 'Bissamcuttack',
    //     'Load_status':'E',
    //     'src':'P2',
    //     'destination':'LNJ'
    //   },
    //   'LNJ':0,
    //   'Jharsugada':0
    // }
    constructor(dataS) {
        this.dataS = dataS;
        this.inboundlist = [];
        this.jsondatalist = [];
        this.LNJ = [];
        this.LNJ_LNJ = 0;
        this.LNJ_transit = 0;
        this.LNJ_JHRS = 0;
        this.KSPL = [];
        this.KSPL_KSPL = 0;
        this.KSPL_transit = 0;
        this.KSPL_JHRS = 0;
    }
    ngOnInit() {
        this.dataS.getData().subscribe(data => {
            console.log(data);
            this.responsedata = data;
            console.log(this.responsedata);
            this.inboundlist = data.success.inbound;
            console.log(data.success.inbound);
            console.log(this.inboundlist);
            if (!(data.success.inbound.Port_stock.Stock_Kspl_P1 == 'NA')) {
                this.total_port_stock_P1 = data.success.inbound.Port_stock.Stock_Kspl_P1 + data.success.inbound.Port_stock.Stock_Gpl_P1 + data.success.inbound.Port_stock.vessel_Stock_Kspl_P1;
            }
            else {
                this.total_port_stock_P1 = NaN;
            }
            if (!(data.success.inbound.Port_stock.Stock_Kspl_P2 == 'NA')) {
                this.total_port_stock_P2 = data.success.inbound.Port_stock.Stock_Kspl_P2 + data.success.inbound.Port_stock.Stock_Gpl_P2 + data.success.inbound.Port_stock.vessel_Stock_Kspl_P2;
            }
            else {
                this.total_port_stock_P2 = NaN;
            }
            if (!(data.success.inbound.Transit_Stock.Bulker_P1 == 'NA')) {
                this.total_transit_stock_P1 = data.success.inbound.Transit_Stock.Bulker_P1 + data.success.inbound.Transit_Stock.Truck_P1 + data.success.inbound.Transit_Stock.Bulker_P1;
            }
            else {
                this.total_transit_stock_P1 = NaN;
            }
            if (!(data.success.inbound.Transit_Stock.Bulker_P2 == 'NA')) {
                this.total_transit_stock_P2 = data.success.inbound.Transit_Stock.Bulker_P2 + data.success.inbound.Transit_Stock.Truck_P2 + data.success.inbound.Transit_Stock.Bulker_P2;
            }
            else {
                this.total_transit_stock_P2 = NaN;
            }
            console.log(this.inboundlist['Port_stock']);
            this.jsondatalist = data.success.latest.data.json_data;
            for (let key in this.jsondatalist) {
                console.log(key);
                if (this.jsondatalist[key].current_station == 'LNJ') {
                    this.LNJ.push({ 'LNJ': this.jsondatalist[key] });
                    this.LNJ_LNJ += 1;
                }
                if (this.jsondatalist[key].current_station == 'KSPL') {
                    this.KSPL.push({ 'KSPL': this.jsondatalist[key] });
                    this.KSPL_KSPL += 1;
                }
                if (this.jsondatalist[key].current_station == 'JHRS' && this.jsondatalist[key].destination == 'LNJ') {
                    this.LNJ.push({ 'JHRS': this.jsondatalist[key] });
                    this.LNJ_JHRS += 1;
                }
                if (this.jsondatalist[key].current_station == 'JHRS' && this.jsondatalist[key].destination == 'KSPL') {
                    this.KSPL.push({ 'JHRS': this.jsondatalist[key] });
                    this.KSPL_JHRS += 1;
                }
                if (this.jsondatalist[key].destination == 'LNJ') {
                    this.LNJ.push(this.jsondatalist[key]);
                    this.LNJ_transit += 1;
                }
                if (this.jsondatalist[key].destination == 'KSPL') {
                    this.KSPL.push(this.jsondatalist[key]);
                    this.KSPL_transit += 1;
                }
            }
            console.log(this.LNJ);
            console.log(this.KSPL);
            document.getElementById('load').style.visibility = "hidden";
            document.getElementById('contents').style.visibility = "visible";
            //console.log(this.jsondatalist);
            //console.log(this.jsondatalist['VED-1']);
        });
        //console.log(this.inboundlist);
        //console.log(this.LNJrakes);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_vedanta_service__WEBPACK_IMPORTED_MODULE_2__["VedantaService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/vedanta.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vedanta.service.ts ***!
  \*********************************************/
/*! exports provided: VedantaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VedantaService", function() { return VedantaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let VedantaService = class VedantaService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        var body = { "Date": "18-08-2019" };
        const url = "https://vedantaapi.azurewebsites.net/inboundDesktop/Inbound/";
        return this.http.post(url, body, httpOptions);
    }
};
VedantaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VedantaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VedantaService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\celebal-vedanta\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map