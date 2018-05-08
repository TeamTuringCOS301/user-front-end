import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
@Component({
  selector: 'page-conservation',
  templateUrl: 'conservation.html'
})
export class ConservationPage {
  constructor(public navCtrl: NavController) {
  }

  picked()
  {
    this.navCtrl.push(MapPage);
  }

  navPop()
  {
    this.navCtrl.pop();
  }

}
