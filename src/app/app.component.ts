import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
  isAuth = false;

  

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  onAllumer() {
    console.log("on allume tout");
  }

}
