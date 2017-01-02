import { Component, Input } from '@angular/core';
import { Piece } from './piece';

@Component({
    selector: 'nim-piece',
    templateUrl: './nim-piece.component.html'
})
export class NimPieceComponent {
    @Input() piece: Piece;
}