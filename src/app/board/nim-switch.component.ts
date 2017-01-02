import { Component } from '@angular/core';

import { Row } from '../board/row';

import { NimService } from '../nim/nim.service';

@Component({
    selector: 'nim-switch',
    templateUrl: './nim-switch.component.html'
})
export class NimSwitchComponent {
    constructor(private nim: NimService) { }
}