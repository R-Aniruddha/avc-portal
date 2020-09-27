import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { StylingService } from '../styling.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //@ViewChild("footer", {read: ElementRef}) tref: ElementRef;

  //constructor(private stylingservice: StylingService){ }

  ngOnInit() {
    //this.setFooterColor('green')
  }
  /*
    setFooterColor(color) {
      //this.tref.nativeElement.style.background = this.stylingservice.setColor(color);
      this.stylingservice.footerColor('color');
    }
    */
}
