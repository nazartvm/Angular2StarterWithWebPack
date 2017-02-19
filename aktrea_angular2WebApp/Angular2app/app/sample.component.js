var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var sampleComponent = (function () {
    function sampleComponent() {
        this.myname = "nazar";
    }
    sampleComponent = __decorate([
        Component({
            selector: 'sampleapp',
            template: "\n<style>\nh1\n{\ncolor:green;\n}\n</style>\n<h1>{{myname}}</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], sampleComponent);
    return sampleComponent;
}());
//# sourceMappingURL=sample.component.js.map