import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NimBoardComponent } from './board/nim-board.component';
import { NimRowComponent } from './board/nim-row.component';
import { NimPieceComponent } from './board/nim-piece.component';
import { NimSwitchComponent } from './board/nim-switch.component';
import { NimResultComponent} from './board/nim-result.component';
import { NimPlayerComponent } from './board/nim-player.component';

import { NimService } from './nim/nim.service';
import { BoardService } from './board/board.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]) 
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NimBoardComponent,
    NimRowComponent,
    NimPieceComponent,
    NimSwitchComponent,
    NimResultComponent,
    NimPlayerComponent
  ],
  providers: [
    NimService,
    BoardService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
