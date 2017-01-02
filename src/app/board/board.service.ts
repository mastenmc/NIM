import { Injectable } from '@angular/core';
import { Board } from './board';
import { Row } from './row';
import { Piece } from './piece';
import { ROW_CONFIG } from '../constants';

@Injectable()
export class BoardService {

    getNewBoard(): Board {
        let board: Board = new Board();

        // set up board
        for (let row of ROW_CONFIG) {
            let currRow: Row = new Row();
            for (let numPieces = 0; numPieces < row; ++numPieces) {
                currRow.pieces.push(new Piece());
            }
            board.rows.push(currRow);
        }
        
        // count of pieces on board
        let count: number = 0;
        for (let i = 0; i < ROW_CONFIG.length; ++i) {
            count += ROW_CONFIG[i];
        }
        board.numPieces = count;
        
        return board;
    }

}