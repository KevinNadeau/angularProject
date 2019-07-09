import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({

  selector: 'app-kevin',
  templateUrl: './kevin.component.html',
  styleUrls: ['./kevin.component.scss']
})
export class KevinComponent implements OnInit {
  addition: Number = 25;
  y: number;
  x: number;
  isLogedIn: Boolean = false;
  monNom: string;
  myList: any[];
  connexionDate: Date;

  constructor() {
    console.log('test');
    this.myList = [
      {
        nom: 'Flash',
        disponible: 'oui'
      },
      {
       nom: 'Superman',
       disponible: 'non'
      },
      {
        nom: 'Shazam',
        disponible: 'oui'
      },
      {
      nom: 'Spiderman',
      disponible: 'peut-etre'
      },
      {
        nom: 'Diablo',
        disponible: 'ouais ouais'
      },
      {
        nom: 'William',
        disponible: 'mon cul'
      }
       ];
  }

  ngOnInit() {
    this.x = 7;
    this.y = 3;
  }

  multi() {
      return this.x * this.y;
  }

  login() {
    setTimeout(() => {
      this.connexionDate = new Date();
      this.isLogedIn = true;
      alert('Vous etes maintenant connecté en tant que ' + this.monNom + ' !');
    }, 1000);

  }

}
