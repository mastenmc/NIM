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
var core_1 = require('@angular/core');
var row_1 = require('./row');
var nim_service_1 = require('../nim/nim.service');
var NimRowComponent = (function () {
    function NimRowComponent(nim) {
        this.nim = nim;
    }
    NimRowComponent.prototype.turnOff = function () {
        this.nim.turnOff(this.row);
    };
    NimRowComponent.prototype.isSwitchDisabled = function () {
        var onPiecesInRow = this.row.pieces.filter(function (p) { return !p.isOff; });
        return onPiecesInRow.length == 0 ||
            (this.nim.selectedRow != null && this.nim.selectedRow !== this.row);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', row_1.Row)
    ], NimRowComponent.prototype, "row", void 0);
    NimRowComponent = __decorate([
        core_1.Component({
            selector: 'nim-row',
            templateUrl: '/app/board/nim-row.component.html'
        }), 
        __metadata('design:paramtypes', [nim_service_1.NimService])
    ], NimRowComponent);
    return NimRowComponent;
}());
exports.NimRowComponent = NimRowComponent;
//# sourceMappingURL=nim-row.component.js.map