import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StylingService } from '../styling.service';

@Component({
  selector: 'app-editfooter',
  templateUrl: './editfooter.component.html',
  styleUrls: ['./editfooter.component.scss']
})
export class EditfooterComponent implements OnInit {
  @ViewChild("tref", {read: ElementRef}) tref: ElementRef;
  @ViewChild("footer", {read: ElementRef}) tref2: ElementRef;


  constructor(    private stylingservice: StylingService    ) { }

  ngOnInit() {
  }

  setTestColor(c){
    return this.stylingservice.setColor(c);
    //this.stylingservice.displayTest();
  }

  display(temp) {
    //alert(this.tref.nativeElement.textContent);
    //alert(temp);
    this.tref.nativeElement.style.background = temp;
  }

  footerC(t) {
    //this.stylingservice.footerColor(t);
    //this.tref2.nativeElement.style.background = t;
  }

}
