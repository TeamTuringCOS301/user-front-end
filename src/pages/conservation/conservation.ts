import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-conservation',
  templateUrl: 'conservation.html'
})
export class ConservationPage {
  constructor(public navCtrl: NavController) {   
  }

  navPop()
  {
    this.navCtrl.pop();
  }

}

