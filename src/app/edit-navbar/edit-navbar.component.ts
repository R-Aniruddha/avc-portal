import { Component, OnInit, Input } from '@angular/core';
//import {Styling } from '../model/styling';
import { StylingService } from '../styling.service';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-edit-navbar',
  templateUrl: './edit-navbar.component.html',
  styleUrls: ['./edit-navbar.component.scss']
})
export class EditNavbarComponent implements OnInit {

  //@Input()
  //styling:Styling;


  constructor(
    private stylingservice: StylingService,
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnInit() {
    //var str = this.stylingservice.displayTest();
    //prompt("Testing" +str);
    //
    //this.renderer.createText(buttonElement, “Click me!”);
  }

  changeNavColor(){
    //this.renderer.setStyle(this.el.nativeElement, "color", "red");
  }
  changeParaColor(){

    }


}
