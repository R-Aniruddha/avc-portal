import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
//import {Styling} from './model/styling';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  @ViewChild("footer", {read: ElementRef}) tref: ElementRef;

  constructor() { }

  displayTest(){
    //prompt("This is a test");
    return 'Successful';
  }
  setColor(color: any){
    switch(color) {
      case 'red':
        return 'var(--bg-avc)';
      case 'green':
        return 'var(--bg-agp)';
      case 'blue':
        return 'var(--bg-avr)';
      case 'grey':
        return 'var(--gray-dark)';
    }
  }

  footerColor(c: any){
    alert("Footer Service Function");
    this.tref.nativeElement.style.background = this.setColor(c);
  }
}


