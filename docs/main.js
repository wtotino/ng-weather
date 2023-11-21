(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




let AppComponent = (_class = class AppComponent {
  constructor() {}
}, _class.ctorParameters = () => [], _class);
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_CONFIG: () => (/* binding */ APP_CONFIG),
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var app_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/data/config */ 6266);
/* harmony import */ var app_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/tabs/tabs.component */ 2733);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location.service */ 4056);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather.service */ 8986);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);


















const APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.InjectionToken('app.config');
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_10__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_6__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__.MainPageComponent, app_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__.TabsComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_4__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
  })],
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_7__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_9__.WeatherService, {
    provide: APP_CONFIG,
    useValue: app_data_config__WEBPACK_IMPORTED_MODULE_0__.NG_WEATHER_CONFIG
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 2810:
/*!**********************************!*\
  !*** ./src/app/cache.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app.module */ 8629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
var _class;
var CacheService_1;




/**
 * Service that keeps application data stored inside the browser's localStorage
 * and refreshes it if enough time passed (based on AppConfig.cacheRefresh value)
 * @see AppConfig
 *
 * Personal Note: At first I thought about creating an interceptor but that would've been easy to "copy paste" from the internet so I decided on something more "personal"
 * There's still some advantages in using this approach, for example one can decide in each service which calls gets cached and which aren't.
 * I'm not 100% sure but I think it would also be more complicated to rebuild an HttpResponse with all the headers when saved on the localStorage
 */
let CacheService = CacheService_1 = (_class = class CacheService {
  /**
   * sets the cacheRefreshTime value and gets items from localStorage
   */
  constructor(config) {
    this.cache = {};
    /**
     * How many milliseconds a value needs to be kept inside the cache (default value 2 hours)
     */
    this.cacheRefreshTime = 2 * 60 * 60 * 1000;
    this.cacheRefreshTime = config.cacheRefreshTime;
    const value = localStorage.getItem(CacheService_1.APP_CACHE);
    if (value) {
      this.cache = JSON.parse(value);
    }
  }
  /**
   * checks if a value associated with the given url is inside the cache, otherwise it returns
   * the passed observable and saves the value in cache
   */
  get(url, observable) {
    // When the cache is considered expired
    const cacheExpire = new Date().getTime() - this.cacheRefreshTime;
    // If we find the value in cache
    if (this.cache[url] && this.cache[url].lastUpdate > cacheExpire) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.cache[url].data);
    }
    // If we don't find the value or is expired we return the observable but save data in cache
    return observable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
      this.cache[url] = {
        data,
        lastUpdate: new Date().getTime()
      };
      localStorage.setItem(CacheService_1.APP_CACHE, JSON.stringify(this.cache));
    }));
  }
}, _class.APP_CACHE = "appCache", _class.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
    args: [app_app_module__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG]
  }]
}], _class);
CacheService = CacheService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], CacheService);


/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../location.service */ 4056);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather.service */ 8986);
var _class;
var CurrentConditionsComponent_1;







let CurrentConditionsComponent = CurrentConditionsComponent_1 = (_class = class CurrentConditionsComponent {
  constructor(cdref) {
    this.cdref = cdref;
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_weather_service__WEBPACK_IMPORTED_MODULE_3__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    // We make a computed signal that turns the map into an array
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    this.tabsMap = {};
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  ngAfterViewInit() {
    this.tabs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
      const conditions = this.currentConditionsByZip();
      console.log(conditions);
      // First we check if we have to remove some values
      Object.keys(this.tabsMap).forEach(t => {
        if (!conditions.some(c => CurrentConditionsComponent_1.PREFIX + c.zip === t)) {
          delete this.tabsMap[t];
        }
      });
      // Then we add the values we don't already have
      conditions.filter(c => !this.tabsMap[CurrentConditionsComponent_1.PREFIX + c.zip]).forEach(c => {
        this.tabsMap[CurrentConditionsComponent_1.PREFIX + c.zip] = {
          content: this.conditionTemplate,
          data: c,
          title: c.data.name + " (" + c.zip + ")"
        };
      });
      return Object.values(this.tabsMap);
    });
    // Without this we will have ExpressionChangedAfterItHasBeenCheckedError error while developing
    this.cdref.detectChanges();
  }
}, _class.PREFIX = "z_", _class.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
}], _class.propDecorators = {
  conditionTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ["conditionTemplate"]
  }],
  tabsComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ["tabsComponent"]
  }]
}, _class);
CurrentConditionsComponent = CurrentConditionsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 6266:
/*!********************************!*\
  !*** ./src/app/data/config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NG_WEATHER_CONFIG: () => (/* binding */ NG_WEATHER_CONFIG)
/* harmony export */ });
/**
 * Application configuration variables
 * Personal Note: I could've used the environment files, adding a environment.spec.ts file for tests, but since Angular 15 won't generate environment
 * files when creating a project with ng new I decided to go with the providers approach
 */
const NG_WEATHER_CONFIG = {
  /**
   *  How many milliseconds a value needs to be kept inside the cache
   */
  cacheRefreshTime: 2 * 60 * 60 * 1000
};

/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
var _class;






let ForecastsListComponent = (_class = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
}, _class.ctorParameters = () => [{
  type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
ForecastsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
var _class;



const LOCATIONS = "locations";
let LocationService = (_class = class LocationService {
  /**
   * get locations updates as Observable
   */
  get locations() {
    return this.locationsSub.asObservable();
  }
  constructor() {
    this.locationsArr = [];
    /**
     * Subject used to notify when locations are changed
     * We use a BehaviorSubject so whoever subscribes will get the current state of the locations
     */
    this.locationsSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    const locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locationsArr = JSON.parse(locString);
      // We notify the whole array 
      this.locationsSub.next(this.locationsArr);
    }
  }
  /**
   * Updates locations and localStorage
   */
  addLocation(zipcode) {
    // Don't add empty zipcodes and already existing zipcodes
    if (zipcode?.length > 0 && !this.locationsArr.includes(zipcode)) {
      this.locationsArr.push(zipcode);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsArr));
      this.locationsSub.next(this.locationsArr);
    }
  }
  removeLocation(zipcode) {
    const index = this.locationsArr.indexOf(zipcode);
    if (index !== -1) {
      this.locationsArr.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsArr));
      this.locationsSub.next(this.locationsArr);
    }
  }
}, _class.ctorParameters = () => [], _class);
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], LocationService);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



let MainPageComponent = class MainPageComponent {};
MainPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 2733:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 4872);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 9626);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




/**
 * Component that holds an array of tabs and manages switching from one tab to another, showing the currently active tab in a container
 *
 */
let TabsComponent = (_class = class TabsComponent {
  constructor() {
    this.tabsValue = [];
    this.tabChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  set tabs(value) {
    // We reset the array and the activeTab then use the method addTabs that includes all the logic for adding one or more tabs
    this.tabsValue.length = 0;
    const activeTab = this.activeTab;
    this.activeTab = null;
    this.addTabs(...value);
    //After we add all the tabs we check if the previously active tab is still in the array and in that case select it
    const found = this.tabsValue.find(t => t === activeTab);
    //the addTabs will change to the first value in the array but if we have found a previously selected tab we put it back
    if (found) {
      this.activeTab = found;
    }
  }
  /**
   * Changes the currently active tab to the one passed
   */
  changeTab(tab) {
    // Just to make sure we are changing to one of the tabs handled by the component
    if (this.tabsValue.includes(tab)) {
      this.setTab(tab);
    }
  }
  setTab(tab) {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }
  /**
   * Adds one or more tabs
   */
  addTabs(...tabs) {
    const emptyTabs = this.tabsValue.length === 0;
    this.tabsValue.push(...tabs);
    // If we previously had no tabs we switch to the first one in the array
    if (emptyTabs && this.tabsValue.length > 0) {
      this.changeTab(this.tabsValue[0]);
    }
  }
  /**
   * Removes a tab from the array
   */
  removeTab(tab) {
    const index = this.tabsValue.indexOf(tab);
    if (index !== -1) {
      this.tabsValue.splice(index, 1);
    }
    // if we are removing the currently active tab we go back to the first one
    if (this.activeTab === tab && this.tabsValue?.length > 0) {
      this.changeTab(this.tabsValue[0]);
    } else if (this.tabsValue?.length === 0) {
      // If there's no more tabs in the array we clear the activeTab
      this.setTab(null);
    }
  }
}, _class.propDecorators = {
  tabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  tabChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  tabContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  tabLink: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
}, _class);
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 8986:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var app_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/cache.service */ 2810);
/* harmony import */ var app_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/location.service */ 4056);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 553);
var _class;
var WeatherService_1;







let WeatherService = WeatherService_1 = (_class = class WeatherService {
  constructor(http, locationService, cacheService) {
    this.http = http;
    this.locationService = locationService;
    this.cacheService = cacheService;
    this.currentConditionsMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)({});
    /**
     * computed signal that returns data as an array like in the previous implementation, by doing so the new way of keeping the data is transparent for whoever uses the service
     */
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.computed)(() => Object.values(this.currentConditionsMap()));
    // We use takeUntilDestroyed so that if this service is provided locally in a component it will be destoryed together with the component
    this.locationService.locations.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)()).subscribe(zipcodes => {
      /* Personal note: I implemented the update this way so it wouldn't make unnecessary calls whenever locationservice passes the whole array back.
      I could've just cleared the object and add all the new values back but that would've caused unnecesary calls to the openweather API. Since in the
      Step 3 we implemented a cache system this wouldn't be the case anymore but I decided to leave things as they were when I implemented this in Step 1
       */
      this.currentConditionsMap.mutate(conditions => {
        // We iterate through the existing conditions to remove the ones that have been removed from the locationService
        const keys = Object.getOwnPropertyNames(conditions);
        keys.forEach(c => {
          if (!zipcodes.includes(c)) {
            /* We don't call removeCurrentConditions so we don't have multiple mutations
               at the moment nobody calls removeCurrentConditions because it goes through locationService
               Maybe add and remove CurrentConditions should be private?
             */
            delete conditions[c];
          }
        });
      });
      // Get current conditions so we can use them to filter the zipcodes to avoid making needless calls to already fetched conditions
      const current = this.currentConditionsMap();
      // Then we add the new conditions
      zipcodes.filter(z => !current[WeatherService_1.PREFIX + z]).forEach(z => this.addCurrentConditions(z));
    });
  }
  addCurrentConditions(zipcode) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`;
    this.cacheService.get(url, this.http.get(url)).subscribe(data => this.currentConditionsMap.mutate(conditions => {
      conditions[WeatherService_1.PREFIX + zipcode] = {
        zip: zipcode,
        data
      };
    }));
  }
  /**
   * Personal note: in the previous implementation there was a bug: if the same zipcode was inserted more than once, removing one would've removed them all
   * The new implementation doesn't allow the same zipcode multiple times so the bug doesn't happen (please forgive me if the same zipcode multiple times was actually a feature)
   */
  removeCurrentConditions(zipcode) {
    this.currentConditionsMap.mutate(conditions => {
      delete conditions[WeatherService_1.PREFIX + zipcode];
    });
  }
  getCurrentConditions() {
    // Computed signals are already readonly
    return this.currentConditions;
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const url = `${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`;
    return this.cacheService.get(url, this.http.get(url));
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return WeatherService_1.ICON_URL + "art_storm.png";
    } else if (id >= 501 && id <= 511) {
      return WeatherService_1.ICON_URL + "art_rain.png";
    } else if (id === 500 || id >= 520 && id <= 531) {
      return WeatherService_1.ICON_URL + "art_light_rain.png";
    } else if (id >= 600 && id <= 622) {
      return WeatherService_1.ICON_URL + "art_snow.png";
    } else if (id >= 801 && id <= 804) {
      return WeatherService_1.ICON_URL + "art_clouds.png";
    } else if (id === 741 || id === 761) {
      return WeatherService_1.ICON_URL + "art_fog.png";
    } else {
      return WeatherService_1.ICON_URL + "art_clear.png";
    }
  }
}, _class.PREFIX = "z_", _class.URL = (environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production ? 'https' : 'http') + '://api.openweathermap.org/data/2.5', _class.APPID = '5a4b2d457ecbef9eb2a71e480b947604', _class.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/', _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: app_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
}, {
  type: app_cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService
}], _class);
WeatherService = WeatherService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], WeatherService);


/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 4056);
var _class;




let ZipcodeEntryComponent = (_class = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    this.service.addLocation(zipcode);
  }
}, _class.ctorParameters = () => [{
  type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
}], _class);
ZipcodeEntryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
  padding: 0.2em;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.conditions-container {
	padding: 0.5em;
	border: 1px solid #000000;
}

.tab {
	border: 1px solid #000000;
	color: #FFFFFF;
	border-bottom: 0;
	border-radius: 0;
	background-color: #617AA0;

	border-start-start-radius: 4px;
	border-start-end-radius: 4px;

	display: flex;
	align-items: center;
}

.tab button {
	border: 0;
	background-color: transparent;
	padding: 0.5em;
}

.tab:hover, .tab.selected {
	background-color: #485b78;
}`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;CACC,cAAc;CACd,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;CACzB,cAAc;CACd,gBAAgB;CAChB,gBAAgB;CAChB,yBAAyB;;CAEzB,8BAA8B;CAC9B,4BAA4B;;CAE5B,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,SAAS;CACT,6BAA6B;CAC7B,cAAc;AACf;;AAEA;CACC,yBAAyB;AAC1B","sourcesContent":[".close {\n  cursor: pointer;\n  padding: 0.2em;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.conditions-container {\n\tpadding: 0.5em;\n\tborder: 1px solid #000000;\n}\n\n.tab {\n\tborder: 1px solid #000000;\n\tcolor: #FFFFFF;\n\tborder-bottom: 0;\n\tborder-radius: 0;\n\tbackground-color: #617AA0;\n\n\tborder-start-start-radius: 4px;\n\tborder-start-end-radius: 4px;\n\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.tab button {\n\tborder: 0;\n\tbackground-color: transparent;\n\tpadding: 0.5em;\n}\n\n.tab:hover, .tab.selected {\n\tbackground-color: #485b78;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9626:
/*!****************************************************!*\
  !*** ./src/app/tabs/tabs.component.css?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ul.tabs {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow-x: auto;
	display: flex;
	flex-wrap: nowrap;
	align-items: baseline;
}

li.tab {
	height: 100%;
	margin-right: 0.5em;
	min-width: 120px;
}

li.tab:first-child {
	margin-left: 0.5em;
}

.tab button {
	border: 1px solid #000000;
	border-bottom: 0;
	border-radius: 0;
	background-color: transparent;
	padding: 0.5em;

	border-start-start-radius: 4px;
	border-start-end-radius: 4px;
}

.tab button:hover {
	background-color: #F5F5F5;
}

.tab .selected {
	background-color: #E3E3E3;
}`, "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.component.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,SAAS;CACT,UAAU;CACV,gBAAgB;CAChB,aAAa;CACb,iBAAiB;CACjB,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,mBAAmB;CACnB,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,gBAAgB;CAChB,gBAAgB;CAChB,6BAA6B;CAC7B,cAAc;;CAEd,8BAA8B;CAC9B,4BAA4B;AAC7B;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;AAC1B","sourcesContent":["ul.tabs {\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow-x: auto;\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\talign-items: baseline;\n}\n\nli.tab {\n\theight: 100%;\n\tmargin-right: 0.5em;\n\tmin-width: 120px;\n}\n\nli.tab:first-child {\n\tmargin-left: 0.5em;\n}\n\n.tab button {\n\tborder: 1px solid #000000;\n\tborder-bottom: 0;\n\tborder-radius: 0;\n\tbackground-color: transparent;\n\tpadding: 0.5em;\n\n\tborder-start-start-radius: 4px;\n\tborder-start-end-radius: 4px;\n}\n\n.tab button:hover {\n\tbackground-color: #F5F5F5;\n}\n\n.tab .selected {\n\tbackground-color: #E3E3E3;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tabs #tabsComponent *ngIf=\"tabs\" [tabs]=\"tabs()\" [tabContainer]=\"tabContainer\" [tabLink]=\"tabLink\"></app-tabs>\n\n<ng-template #tabContainer let-activeTab>\n\t<div *ngIf=\"activeTab?.content\" class=\"conditions-container\">\n\t\t<ng-container *ngTemplateOutlet=\"activeTab.content; context: { $implicit: activeTab }\"></ng-container>\n\t</div>\n</ng-template>\n\n<ng-template #tabLink let-tab let-activeTab=\"activeTab\">\n\t<div class=\"tab\" [ngClass]=\"{ 'selected': activeTab === tab }\">\n\t\t<button (click)=\"tabsComponent?.changeTab(tab)\">{{ tab.title }}</button>\n\t\t<span class=\"close\" (click)=\"locationService.removeLocation(tab.data.zip)\">&times;</span>\n\t</div>\n</ng-template>\n\n<ng-template #conditionTemplate let-tab>\n\t<div class=\"well flex\">\n\t\t<div>\n\t\t\t<h3>{{tab.data.data.name}} ({{tab.data.zip}})</h3>\n\t\t\t<h4>Current conditions: {{tab.data.data.weather[0].main}}</h4>\n\t\t\t<h4>Temperatures today:</h4>\n\t\t\t<p>\n\t\t\t\tCurrent {{tab.data.data.main.temp | number:'.0-0'}}\n\t\t\t\t- Max {{tab.data.data.main.temp_max | number:'.0-0'}}\n\t\t\t\t- Min {{tab.data.data.main.temp_min | number:'.0-0'}}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<a [routerLink]=\"['/forecast', tab.data.zip]\">Show 5-day forecast for {{tab.data.data.name}}</a>\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<img [src]=\"weatherService.getWeatherIcon(tab.data.data.weather[0].id)\" alt=\"condition\">\n\t\t</div>\n\t</div>\n</ng-template>\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\" alt=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n\n</div>\n";

/***/ }),

/***/ 4872:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul *ngIf=\"tabsValue?.length > 0\" class=\"tabs\">\n\t<li *ngFor=\"let t of tabsValue\" class=\"tab\">\n\t\t<ng-container *ngIf=\"tabLink\">\n\t\t\t<ng-container *ngTemplateOutlet=\"tabLink; context: { $implicit: t, activeTab: activeTab }\"></ng-container>\n\t\t</ng-container>\n\n\t\t<!-- I used an ng-container instead of ngIf else with template otherwise it would've created a new template for each tab -->\n\t\t<ng-container *ngIf=\"!tabLink\">\n\t\t\t<button [ngClass]=\"{ 'selected': activeTab === t }\" (click)=\"changeTab(t)\">{{ t.title }}</button>\n\t\t</ng-container>\t\t\n\t</li>\n</ul>\n\n<ng-container *ngIf=\"tabContainer; else defaultContainer\">\n\t<ng-container *ngTemplateOutlet=\"tabContainer; context: { $implicit: activeTab }\"></ng-container>\n</ng-container>\n\n<ng-template #defaultContainer>\n\t<div *ngIf=\"activeTab?.content\">\n\t\t<ng-container *ngTemplateOutlet=\"activeTab.content; context: { $implicit: activeTab }\"></ng-container>\n\t</div>\n</ng-template>";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\n    Add location\n  </button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map