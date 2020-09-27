import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  units = [];

  constructor(private apiService: ApiService) {

   }

  ngOnInit() { 
    this.apiService.
    getAllUnits()
    .subscribe((unit) => {
      this.units = unit;
    }
    );    
   }

}
