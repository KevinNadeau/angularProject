import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-kevin',
  templateUrl: './kevin.component.html',
  styleUrls: ['./kevin.component.scss']
})
export class KevinComponent implements OnInit {
  addition : number = 15;
  y: number;
  x: number;
  isLogedIn : boolean = false;
  monNom : string;
  constructor() {
    this.x = 7;
    this.y = 3;
  }

  ngOnInit() {
}
    multi(){
      return this.x * this.y;
    }
    login(){
      setTimeout(() => {
        this.isLogedIn = true
      alert('Vous etes maintenant connecté en tant que' + this.monNom );
    }, 4000);

  }
}

