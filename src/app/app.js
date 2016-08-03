"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_materialize_1 = require("angular2-materialize");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-component",
            directives: [angular2_materialize_1.MaterializeDirective],
            template: "\n    <!-- Modal Trigger -->\n    <div class=\"waves-effect btn modal-trigger\">Modal</div>\n    <!-- Modal Structure -->\n    <!--<div id=\"modal1\" class=\"modal\">\n      <div class=\"modal-content\">\n        <h4>Modal Header</h4>\n        <p>A bunch of text</p>\n      </div>\n      <div class=\"modal-footer\">\n        <a href=\"#!\" class=\" modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>\n      </div>\n    </div-->\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
