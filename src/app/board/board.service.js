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
var board_1 = require('./board');
var row_1 = require('./row');
var piece_1 = require('./piece');
var constants_1 = require('../constants');
var BoardService = (function () {
    function BoardService() {
    }
    BoardService.prototype.getNewBoard = function () {
        var board = new board_1.Board();
        // set up board
        for (var _i = 0, ROW_CONFIG_1 = constants_1.ROW_CONFIG; _i < ROW_CONFIG_1.length; _i++) {
            var row = ROW_CONFIG_1[_i];
            var currRow = new row_1.Row();
            for (var numPieces = 0; numPieces < row; ++numPieces) {
                currRow.pieces.push(new piece_1.Piece());
            }
            board.rows.push(currRow);
        }
        // count of pieces on board
        var count = 0;
        for (var i = 0; i < constants_1.ROW_CONFIG.length; ++i) {
            count += constants_1.ROW_CONFIG[i];
        }
        board.numPieces = count;
        return board;
    };
    BoardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BoardService);
    return BoardService;
}());
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map