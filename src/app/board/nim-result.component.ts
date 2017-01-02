import { Component } from '@angular/core';
import { NimService } from '../nim/nim.service';

@Component({
    selector: 'nim-result',
    templateUrl: './nim-result.component.html'
})
export class NimResultComponent {
    constructor(private nim: NimService) { }
}