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
var board_service_1 = require('../board/board.service');
var constants_1 = require('../constants');
var NimService = (function () {
    function NimService(boardService) {
        this.boardService = boardService;
        this.isOver = false;
        this.offPieces = 0;
        this.newGame();
    }
    NimService.prototype.newGame = function () {
        this.isOver = false;
        this.board = this.boardService.getNewBoard();
        this.currentPlayer = constants_1.PLAYERS.player1;
        // these belong in board service?
        this.selectedRow = null;
        this.offPieces = 0;
    };
    NimService.prototype.turnOff = function (row) {
        // if selectedRow is null, it's the first
        // move of the turn, so set the selected row
        // (as long as the clicked row is stil active)
        if (!this.selectedRow) {
            if (row.isOff)
                return;
            this.selectedRow = row;
        }
        // make sure player isn't trying to turn off pieces
        // in different rows
        if (this.selectedRow === row) {
            var onPiecesInRow = row.pieces.filter(function (p) { return !p.isOff; });
            // check if selected row contains "on" pieces and
            // if yes, turn the last one off
            if (onPiecesInRow.length > 0) {
                onPiecesInRow[onPiecesInRow.length - 1].isOff = true;
                // mark row as turned off if all pieces are off and 
                // automatically switch turn
                if (onPiecesInRow.length == 1) {
                    row.isOff = true;
                    this.endTurn();
                }
                this.offPieces++;
            }
        }
        // if invalid move, do nothing
        // check if game is over
        if (this.isGameOver()) {
            this.isOver = true;
        }
    };
    NimService.prototype.endTurn = function () {
        this.selectedRow = null;
        this.switchPlayers();
    };
    NimService.prototype.isGameOver = function () {
        return this.board.numPieces == this.offPieces;
    };
    NimService.prototype.switchPlayers = function () {
        this.currentPlayer =
            this.currentPlayer === constants_1.PLAYERS.player1 ?
                constants_1.PLAYERS.player2 : constants_1.PLAYERS.player1;
    };
    NimService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [board_service_1.BoardService])
    ], NimService);
    return NimService;
}());
exports.NimService = NimService;
//# sourceMappingURL=nim.service.js.map