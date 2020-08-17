(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n<!--   <div class=\"row align-items-center justify-content-xl-between\">\n    <div class=\"col-xl-6\">\n      <div class=\"copyright text-center text-xl-left text-muted\">\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"http://blog.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n        </li>\n      </ul>\n    </div>\n  </div> -->\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\n    <!-- Form -->\n    <!-- <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n        <div class=\"input-group input-group-alternative\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n          (blur)=\"focus = false\">\n        </div>\n      </div>\n    </form> -->\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{identity[0].name}} {{identity[0].lastname}}</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n<!--           <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a> -->\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n       aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n      <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n          <i class=\"ni ni-bell-55\"></i>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n        <a class=\"dropdown-item\" (click)=\"logout()\" href=\"javascript:void(0)\">Logout</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n          \n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <!-- <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a> -->\n          <!-- <div class=\"dropdown-divider\"></div> -->\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span (click)=\"logout()\">Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a  routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <!-- <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form> -->\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n          <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n              <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n                  <i class=\"ni {{menuItem.icon}}\"></i>\n                  {{menuItem.title}}\n              </a>\n          </li>\n      </ul>\n      <!-- Divider -->\n      <!-- <hr class=\"my-3\"> -->\n      <!-- Heading -->\n     <!--  <h6 class=\"navbar-heading text-muted\">Documentation</h6>\n      \n      <ul class=\"navbar-nav mb-md-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial\">\n            <i class=\"ni ni-spaceship\"></i> Getting started\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors\">\n            <i class=\"ni ni-palette\"></i> Foundation\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts\">\n            <i class=\"ni ni-ui-04\"></i> Components\n          </a>\n        </li>\n      </ul> -->\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<app-sidebar></app-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\n    <div class=\"container px-4\">\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n        <img src=\"assets/img/brand/argon-white.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n         aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                <img src=\"assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" >\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Navbar items -->\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text\">Dashboard</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\n              <i class=\"ni ni-circle-08\"></i>\n              <span class=\"nav-link-inner--text\">Register</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n              <i class=\"ni ni-key-25\"></i>\n              <span class=\"nav-link-inner--text\">Login</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\n              <i class=\"ni ni-single-02\"></i>\n              <span class=\"nav-link-inner--text\">Profile</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n</div>\n<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 mb-12 mb-xl-0\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col\">\n                            <h3 class=\"mb-0\">Pedidos</h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <!-- Projects table -->\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Id</th>\n                                <th scope=\"col\">Precio</th>\n                                <th scope=\"col\">userId</th>\n                                <th scope=\"col\">Fecha realizado</th>\n                                <th scope=\"col\">Fecha de reparto</th>\n                                <th scope=\"col\">Notas</th>\n                                <th scope=\"col\">Cliente</th>\n                                <th scope=\"col\">Email</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let o of orders\">\n                                <th scope=\"row\">\n                                    {{o.id}}\n                                </th>\n                                <td>\n                                    {{o.grossAmount}}\n                                </td>\n                                <td>\n                                    {{o.userId}}\n                                </td>\n                                <td>\n                                    {{o.date | date:'medium'}}\n                                </td>\n                                <td>\n                                    {{o.deliverydate | date:'medium'}}\n                                </td>\n                                <td>\n                                    {{o.orderNotes}}\n                                </td>\n                                <td>\n                                    {{o.name}} {{o.lastname}}\n                                </td>\n                                <td>\n                                    {{o.email}}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n</div>\n<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 mb-12 mb-xl-0\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col\">\n                            <h3 class=\"mb-0\">Productos</h3>\n                        </div>\n                        <div class=\"col text-right\">\n                            <a href=\"#/products\" class=\"btn btn-md btn-primary\" (click)=\"save()\">Save</a>\n                        </div> \n                    </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <!-- Projects table -->\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\"></th>\n                                <th scope=\"col\">Id</th>\n                                <th scope=\"col\">Nombre</th>\n                                <th scope=\"col\">PLU</th>\n                                <th scope=\"col\">Id de Familia</th>\n                                <th scope=\"col\">Precio</th>\n                                <th scope=\"col\">Notas</th>\n                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let p of products\">\n                                <th scope=\"row\">\n                                    <input type=\"checkbox\" (change)=\"checked($event, p)\">\n                                </th>\n                                <td >\n                                    {{p.id}}\n                                </td>\n                                <td>\n                                    {{p.name}}\n                                </td>\n                                <td>\n                                    {{p.PLU}}\n                                </td>\n                                <td>\n                                    {{p.familyId}}\n                                </td>\n                                <td>\n                                <input class=\"form-control form-control-lg\" (value)=\"p.costPrice\" [(ngModel)]=\"p.costPrice\" type=\"text\" placeholder=\".form-control-lg\">\n                                </td>\n                                <td>\n                                    <div class=\"form-group\">\n                                        <textarea class=\"form-control\" (value)=\"p.notes\" [(ngModel)]=\"p.notes\" id=\"area\" rows=\"4\"></textarea>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n</div>\n<div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 mb-12 mb-xl-0\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col\">\n                            <h3 class=\"mb-0\">Ventas</h3>\n                        </div>\n                        <!-- <div class=\"col text-right\">\n                            <a href=\"#!\" *ngIf=\"viewMore\" class=\"btn btn-sm btn-primary\" (click)=\"loadAll()\">Ver mas</a>\n                            <a href=\"#!\" class=\"btn btn-sm btn-primary\" *ngIf=\"!viewMore\" (click)=\"load()\">Ver mas</a>\n                        </div> -->\n                    </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <!-- Projects table -->\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Id</th>\n                                <th scope=\"col\">Nombre</th>\n                                <th scope=\"col\">Apellidos</th>\n                                <th scope=\"col\">CIF</th>\n                                <th scope=\"col\">calle</th>\n                                <th scope=\"col\">CP</th>\n                                <th scope=\"col\">poblacion</th>\n                                <th scope=\"col\">email</th>\n                                <th scope=\"col\">telefono</th>\n                                <th scope=\"col\">role</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let u of users\">\n                                <th scope=\"row\">\n                                    {{u.id}}\n                                </th>\n                                <td>\n                                    {{u.name}}\n                                </td>\n                                <td>\n                                    {{u.lastname}}\n                                </td>\n                                <td>\n                                    {{u.CIF}} \n                                </td>\n                                <td>\n                                    {{u.calle}}\n                                </td>\n                                <td>\n                                    {{u.CP}}\n                                </td>\n                                <td>\n                                    {{u.poblacion}}\n                                </td>\n                                <td>\n                                    {{u.email}}\n                                </td>\n                                <td>\n                                    {{u.telefono}}\n                                </td>\n                                <td>\n                                    {{u.role}}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'argon-dashboard-angular';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/orders/orders.component */ "./src/app/pages/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
            _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
            _pages_users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"],
            _pages_products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"],
            _pages_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__["OrdersComponent"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JWT_OPTIONS"] },
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtHelperService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: 'login',
        redirectTo: 'login'
    }, {
        path: '**',
        redirectTo: 'dashboard'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                useHash: true
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ],
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let NavbarComponent = class NavbarComponent {
    constructor(location, element, router) {
        this.element = element;
        this.router = router;
        this.location = location;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(listTitle => listTitle);
        this.identity = JSON.parse(localStorage.getItem('identity'));
        console.log(this.identity[0]);
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/users', title: 'Usuarios', icon: 'ni-single-02 text-blue', class: '' },
    { path: '/products', title: 'Productos', icon: 'ni-basket text-orange', class: '' },
    { path: '/orders', title: 'Pedidos', icon: 'ni-bullet-list-67 text-red', class: '' }
    /*  { path: '/user-profile', title: 'User profile',  icon:'ni-circle-08 text-yellow', class: '' },
     { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
     { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
     { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' } */
];
let SidebarComponent = class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }
    logout() {
        localStorage.clear();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AdminLayoutComponent = class AdminLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-layout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    ngOnInit() {
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
        });
    }
    ngOnDestroy() {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    }
};
AuthLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-auth-layout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/pages/orders/orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/orders/orders.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let OrdersComponent = class OrdersComponent {
    constructor(_productsService, http) {
        this._productsService = _productsService;
        this.http = http;
    }
    ngOnInit() {
        this._productsService.getAllOrders().subscribe(response => {
            this.orders = response;
            console.log(this.orders);
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-orders',
        template: __importDefault(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html")).default,
        providers: [_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]],
        styles: [__importDefault(__webpack_require__(/*! ./orders.component.css */ "./src/app/pages/orders/orders.component.css")).default]
    }),
    __metadata("design:paramtypes", [_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrdersComponent);



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/products/products.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#area {\n    width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FyZWEge1xuICAgIHdpZHRoOiAyNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ProductsComponent = class ProductsComponent {
    constructor(_productsService, http) {
        this._productsService = _productsService;
        this.http = http;
        this.products = [];
        this.updateProducts = [];
    }
    ngOnInit() {
        this._productsService.getProducts().subscribe(response => {
            this.products = response;
        });
    }
    save() {
        var body = {
            'products': JSON.stringify(this.updateProducts)
        };
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        });
        this.http
            .post('https://panesandco.herokuapp.com/admin/updateProducts/', body, { headers: headers })
            .subscribe(data => {
            console.log(data);
        }, error => {
        });
    }
    checked(event, p) {
        if (event.currentTarget.checked) {
            this.updateProducts.push(p);
        }
        else {
            for (let i = 0; i < this.updateProducts.length; i++) {
                if (this.updateProducts[i].id == p.id) {
                    this.updateProducts.splice(i, 1);
                }
            }
        }
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-products',
        template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
        providers: [_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]],
        styles: [__importDefault(__webpack_require__(/*! ./products.component.css */ "./src/app/pages/products/products.component.css")).default]
    }),
    __metadata("design:paramtypes", [_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductsComponent);



/***/ }),

/***/ "./src/app/pages/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let UsersComponent = class UsersComponent {
    constructor(_userService, http) {
        this._userService = _userService;
        this.http = http;
        this.users = [];
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this._userService.getUsers().subscribe(response => {
            console.log(response);
            this.users = response;
        }, error => {
            console.log(error);
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-users',
        template: __importDefault(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html")).default,
        providers: [_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]],
        styles: [__importDefault(__webpack_require__(/*! ./users.component.css */ "./src/app/pages/users/users.component.css")).default]
    }),
    __metadata("design:paramtypes", [_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsersComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuardService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let AuthService = class AuthService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    // ...
    isAuthenticated() {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService.ctorParameters = () => [
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"] }
];
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ProductsService = class ProductsService {
    constructor(_http) {
        this._http = _http;
        this.url = 'https://panesandco.herokuapp.com';
        /* this.url = 'http://localhost:3000';  */
    }
    getFamilies() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/', { headers: headers });
    }
    getProducts() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/products', { headers: headers });
    }
    getProductsById(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/products/' + id, { headers: headers });
    }
    getProductById(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/product/' + id, { headers: headers });
    }
    familyName(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/familiName/' + id, { headers: headers });
    }
    lastOrder() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/lastOrder/', { headers: headers });
    }
    filter(f) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/filter/' + f, { headers: headers });
    }
    filterByName(f, id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
        });
        return this._http.get(this.url + '/filterByName/' + f + '/' + id, { headers: headers });
    }
    getSalesOrders(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/salesorders/' + id, { headers: headers });
    }
    //Admin
    getAllSales() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/sales/all', { headers: headers });
    }
    getChars(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/getchars/' + id, { headers: headers });
    }
    update(order) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': localStorage.getItem("token"),
            'Content-Type': 'application/json; charset=UTF-8'
        });
        return this._http.put(this.url + '/admin/updateOrder/' + order, '', { headers: headers });
    }
    getLimitSales() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/sales/', { headers: headers });
    }
    getFailSales() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/salesFail/', { headers: headers });
    }
    getTotalRevenue() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/totalRevenue/', { headers: headers });
    }
    getTotalUser() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/totalUser/', { headers: headers });
    }
    getTotalSales() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        console.log(headers);
        return this._http.get(this.url + '/admin/totalSales/', { headers: headers });
    }
    getUserOrder(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/returnUser/' + id, { headers: headers });
    }
    getAllOrders() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/getAllOrders/', { headers: headers });
    }
    updateProducts(p) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': localStorage.getItem("token")
        });
        let array = JSON.stringify(p);
        let products = {
            'products': array
        };
        console.log(products);
        return this._http.post(this.url + '/admin/updateProducts', { 'products': 'asd' }, { headers: headers });
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductsService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProductsService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.url = "https://panesandco.herokuapp.com";
        /* this.url = "http://localhost:3000";   */
    }
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    }
    ifGetIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity == null) {
            return true;
        }
        else {
            return false;
        }
    }
    login(user) {
        JSON.stringify(user);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this._http.post(this.url + '/admin/login', user, { headers: headers });
    }
    register(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this._http.post(this.url + '/register', user, { headers: headers });
    }
    getUsers() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("token")
        });
        return this._http.get(this.url + '/admin/getUsers/', { headers: headers });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UserService);



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Argon Dashboard Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Christian/Documents/argon-dashboard-angular-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map