import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/crypto-info.service';


  @Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
  })
  
  export class AboutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
