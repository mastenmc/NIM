import { Injectable } from '@angular/core';
import { Piece } from "../board/piece";
import { Row } from "../board/row";
import { Board } from '../board/board';
import { BoardService } from '../board/board.service';

import { PLAYERS } from '../constants';

@Injectable()
export class NimService {

    isOver: boolean = false;
    board: Board;
    offPieces: number = 0;

    selectedRow: Row;
    currentPlayer: string;

    constructor(private boardService: BoardService) {
        this.newGame();
    }

    newGame() {
        this.isOver = false;
        this.board = this.boardService.getNewBoard();
        this.currentPlayer = PLAYERS.player1;

        // these belong in board service?
        this.selectedRow = null;
        this.offPieces = 0;
    }

    turnOff(row: Row) {
        // if selectedRow is null, it's the first
        // move of the turn, so set the selected row
        // (as long as the clicked row is stil active)
        if (!this.selectedRow) {
            if (row.isOff) return;
            this.selectedRow = row;
        }

        // make sure player isn't trying to turn off pieces
        // in different rows
        if (this.selectedRow === row) {

            let onPiecesInRow: Piece[] = row.pieces.filter(p => !p.isOff);

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
        if(this.isGameOver()) {
            this.isOver = true;
        }
        
    }

    endTurn() {
        this.selectedRow = null;
        this.switchPlayers();
    }

    isGameOver(): boolean {
        return this.board.numPieces == this.offPieces;
    }

    switchPlayers() {
        this.currentPlayer = 
            this.currentPlayer === PLAYERS.player1 ?
            PLAYERS.player2 : PLAYERS.player1;
    }
}