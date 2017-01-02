import { Component } from '@angular/core';
import { NimService } from "../nim/nim.service";

@Component ({
    selector: 'nim-board',
    templateUrl: './nim-board.component.html'
})
export class NimBoardComponent {
    constructor(private nim: NimService) { }
}