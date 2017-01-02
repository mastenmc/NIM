import { Component, Input } from '@angular/core';

import { Row } from './row';
import { Piece } from './piece';

import { NimService } from '../nim/nim.service';

@Component ({
    selector: 'nim-row',
    templateUrl: './nim-row.component.html'
})
export class NimRowComponent {
    @Input() row: Row;

    constructor(private nim:NimService) { }

    turnOff() : void {
        this.nim.turnOff(this.row);
    }

    isSwitchDisabled() {
        let onPiecesInRow: Piece[] = this.row.pieces.filter(p => !p.isOff);
        return onPiecesInRow.length == 0 || 
            (this.nim.selectedRow != null && this.nim.selectedRow !== this.row);
    }
    
}
