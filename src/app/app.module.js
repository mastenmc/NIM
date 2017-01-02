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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var nim_board_component_1 = require('./board/nim-board.component');
var nim_row_component_1 = require('./board/nim-row.component');
var nim_piece_component_1 = require('./board/nim-piece.component');
var nim_switch_component_1 = require('./board/nim-switch.component');
var nim_result_component_1 = require('./board/nim-result.component');
var nim_player_component_1 = require('./board/nim-player.component');
var nim_service_1 = require('./nim/nim.service');
var board_service_1 = require('./board/board.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                nim_board_component_1.NimBoardComponent,
                nim_row_component_1.NimRowComponent,
                nim_piece_component_1.NimPieceComponent,
                nim_switch_component_1.NimSwitchComponent,
                nim_result_component_1.NimResultComponent,
                nim_player_component_1.NimPlayerComponent
            ],
            providers: [
                nim_service_1.NimService,
                board_service_1.BoardService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map