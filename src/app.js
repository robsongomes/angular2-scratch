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
var logger_1 = require("./logger");
var Greeter = (function () {
    function Greeter(l) {
        this.foo = "bar";
        this.l.log(this.foo);
    }
    Greeter = __decorate([
        core_1.Component({
            selector: 'greeter',
            template: "\n  <div #greeter></div>\n  "
        }), 
        __metadata('design:paramtypes', [logger_1.Logger])
    ], Greeter);
    return Greeter;
}());
var g = new Greeter(new logger_1.Logger());
console.log(g.foo);
//# sourceMappingURL=app.js.map