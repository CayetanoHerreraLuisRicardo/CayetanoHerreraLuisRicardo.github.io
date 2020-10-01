webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\" style=\"text-align: center;\">\r\n            <h1>GoogleMaps with Angular </h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <app-map (addressEvent)=\"getAddress($event)\" [oCoord]=\"oCoord\"></app-map>\r\n        </div>\r\n        <div class=\"col\">\r\n            <h3>Address:</h3>\r\n            <form [formGroup]=\"form\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-2 col-form-label\">Direccion:</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"direccion\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 col-form-label\">Calle:</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"calle\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 col-form-label\">Colonia:</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"colonia\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 col-form-label\">Estado:</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"estado\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 col-form-label\">CP:</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"cp\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 col-form-label\">Latitud:</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"latitud\">\r\n                        </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                        <label class=\"col-sm-2 col-form-label\">Longitud:</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"longitud\">\r\n                        </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__ = __webpack_require__("../../../../../src/app/shared/services/collection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_collection, formBuilder) {
        this._collection = _collection;
        this.formBuilder = formBuilder;
    }
    /**
     * @summary Ejecutado seguido del método contructor
     */
    AppComponent.prototype.ngOnInit = function () {
        this.oAddress = this._collection.initAddress();
        this.oCoord = { latitude: null, longitude: null, marker: true };
        this.initForm();
    };
    /**
     * @summary Extrae los datos de Direcciones del componente de Google Maps
     * @param _e: Objeto Address
     */
    AppComponent.prototype.getAddress = function (_e) {
        this.oAddress = _e;
        console.log(this.oAddress);
        this.setValues(this.oAddress);
    };
    AppComponent.prototype.setValues = function (_address) {
        this.form.controls['direccion'].setValue(_address.direccionCompleta);
        this.form.controls['calle'].setValue(_address.calle);
        this.form.controls['colonia'].setValue(_address.colonia);
        this.form.controls['estado'].setValue(_address.estado);
        this.form.controls['cp'].setValue(_address.cp);
        this.form.controls['latitud'].setValue(_address.latitud);
        this.form.controls['longitud'].setValue(_address.longitud);
    };
    AppComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            direccion: [''],
            calle: [''],
            colonia: [''],
            estado: [''],
            cp: [''],
            latitud: [''],
            longitud: [''],
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_collection_service__["a" /* CollectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_map_component__ = __webpack_require__("../../../../../src/app/shared/components/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_collection_service__ = __webpack_require__("../../../../../src/app/shared/services/collection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR



// COMPONENTS


// SERVICES


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared_components_map_component__["a" /* MapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_collection_service__["a" /* CollectionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div #gmap style=\"width:100%;height:400px\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_coordinates_model__ = __webpack_require__("../../../../../src/app/shared/models/coordinates.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_coordinates_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_coordinates_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service__ = __webpack_require__("../../../../../src/app/shared/services/collection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = (function () {
    function MapComponent(_collection) {
        this._collection = _collection;
        this.addressEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * @summary Ejecutado seguido metodo contructor
     */
    MapComponent.prototype.ngOnInit = function () {
        this.oAddress = this._collection.initAddress();
        console.log(this.oCoord);
        if (this.oCoord.latitude == null && this.oCoord.longitude == null) {
            this.initLocation();
        }
        else {
            this.initMap(new google.maps.LatLng(this.oCoord.latitude, this.oCoord.longitude));
        }
    };
    MapComponent.prototype.initLocation = function () {
        var _this = this;
        var coords = new google.maps.LatLng(20.6961778, -103.2992737);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.initMap(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            });
        }
        else {
            this.initMap(coords);
        }
    };
    MapComponent.prototype.initMap = function (_coords) {
        var _this = this;
        this.setMap(_coords);
        this.setMapType('roadmap');
        this.addMarker(_coords);
        this.getData(_coords);
        google.maps.event.addListener(this.map, 'click', function (event) {
            _this.placeMarker(event);
        });
    };
    MapComponent.prototype.setMap = function (_coords) {
        var mapProp = {
            center: _coords,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    MapComponent.prototype.setMapType = function (_type) {
        this.map.setMapTypeId(_type);
    };
    MapComponent.prototype.addMarker = function (_coords) {
        this.marker = new google.maps.Marker({
            position: _coords,
            map: this.map
        });
    };
    MapComponent.prototype.placeMarker = function (_e) {
        if (this.oCoord.marker) {
            var coords = new google.maps.LatLng(_e.latLng.lat(), _e.latLng.lng());
            this.oAddress.latitud = Number(coords.lat());
            this.oAddress.longitud = Number(coords.lng());
            if (this.marker) {
                this.marker.setMap(null);
            }
            this.addMarker(coords);
            this.getData(coords);
            this.map.setCenter(coords);
        }
    };
    MapComponent.prototype.getData = function (_coords) {
        var _this = this;
        this.oAddress.latitud = Number(_coords.lat());
        this.oAddress.longitud = Number(_coords.lng());
        this.geocoder = new google.maps.Geocoder();
        var location = { 'location': _coords };
        this.geocoder.geocode(location, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results) {
                    if (results.length > 0) {
                        _this.getAddress(results);
                    }
                }
            }
        });
    };
    MapComponent.prototype.codeAddress = function (_address) {
        this.geocoder = new google.maps.Geocoder();
        var address = { 'address': _address };
        this.geocoder.geocode(address, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results) {
                    if (results.length > 0) {
                        console.log(results);
                    }
                }
            }
        });
    };
    MapComponent.prototype.getAddress = function (_array) {
        var _this = this;
        this.oAddress.direccionCompleta = _array[0].formatted_address;
        _array[0].address_components.forEach(function (_item, index) {
            _item.types.forEach(function (_type) {
                switch (_type) {
                    case 'street_number':
                        _this.oAddress.numero = _item.long_name;
                        break;
                    case 'route':
                        _this.oAddress.calle = _item.long_name;
                        break;
                    case 'sublocality':
                        _this.oAddress.colonia = _item.long_name;
                        break;
                    case 'locality':
                        _this.oAddress.municipio = _item.long_name;
                        break;
                    case 'administrative_area_level_1':
                        _this.oAddress.estado = _item.long_name;
                        break;
                    case 'postal_code':
                        _this.oAddress.cp = _item.long_name;
                        break;
                }
            });
        });
        this.addressEvent.emit(this.oAddress);
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_coordinates_model__["Coordinates"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_coordinates_model__["Coordinates"]) === "function" && _a || Object)
], MapComponent.prototype, "oCoord", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "addressEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('gmap'),
    __metadata("design:type", Object)
], MapComponent.prototype, "gmapElement", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/shared/components/map.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/coordinates.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=coordinates.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/collection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionService = (function () {
    function CollectionService() {
    }
    /**
     * @summary Inicializa el objeto Address.
     * @returns Objecto de typo Address
     */
    CollectionService.prototype.initAddress = function () {
        var oAddress = {
            numero: '',
            calle: '',
            colonia: '',
            municipio: '',
            estado: '',
            cp: '',
            direccionCompleta: '',
            latitud: null,
            longitud: null,
        };
        return oAddress;
    };
    return CollectionService;
}());
CollectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CollectionService);

//# sourceMappingURL=collection.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map