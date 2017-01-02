import { Component, Input } from '@angular/core';

import { PLAYERS } from '../constants';

@Component({
    selector: 'nim-player',
    templateUrl: './nim-player.component.html'
})
export class NimPlayerComponent {
    @Input() player: string;
    players = PLAYERS;
    
    isCurrentPlayer(aPlayer:string) {
        return aPlayer == this.player;
    }
}