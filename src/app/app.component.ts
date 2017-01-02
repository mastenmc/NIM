import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NimService } from './nim/nim.service';

@Component({
  selector: 'app-root',
  templateUrl: `../app/app.component.html`,
})
export class AppComponent  { 
  name = 'NIM';

  constructor(private nim: NimService, private router: Router) { }

  newGame() {
    this.router.navigate(['']);
    this.nim.newGame();
  } 

}