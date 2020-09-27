import { Component, OnInit, Input } from '@angular/core';
import {Unit} from '../model/units';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  unit:Unit;

  constructor() { }

  ngOnInit() {
  }

  isfbUrl(){
    return (
      this.unit.fbUrl
    );
  }
  isliUrl(){
    return (
      this.unit.liUrl);
  }
  isigUrl(){
    return ( this.unit.igUrl );
  }
  isytUrl(){
    return this.unit.ytUrl;
  }
  istwUrl(){
    return this.unit.twUrl;
  }

  footerStyle(){
    return this.unit.footerColor;
  }

  testing() {
    this.unit.footerColor = prompt("Enter Color Class");
  }
}
