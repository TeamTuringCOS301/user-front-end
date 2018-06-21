import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTrackerProvider {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;

  constructor(public backgroundGeolocation: BackgroundGeolocation, public geolocation: Geolocation, public zone: NgZone) {

  }

  startTracking() {

  // Background Tracking
  alert("Starting tracking");
  let config = {
    desiredAccuracy: 0,
    stationaryRadius: 0,
    distanceFilter: 1,
    debug: true,
    interval: 2000
  };
  this.backgroundGeolocation.switchMode(1);
  this.backgroundGeolocation.start();
  this.backgroundGeolocation.configure(config).subscribe((location) => {

    alert('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

    // Run update inside of Angular's zone
    this.zone.run(() => {
      alert("Run is called!");
      this.lat = location.latitude;
      this.lng = location.longitude;
    },
    err =>
    {
      alert(err);
    });

  }, (err) => {

    alert("BG "+err);

  });

  // Turn ON the background-geolocation system.
  this.backgroundGeolocation.start();


  // Foreground Tracking

let options = {
  frequency: 3000,
  enableHighAccuracy: true
};

/*this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

  console.log(position);

  // Run update inside of Angular's zone
  this.zone.run(() => {
  alert("Run is called: Lat: "+position.coords.latitude);
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  },
  err=>
  {
    alert(err);
  });

},
(err)=>
{
  alert(err);
});*/

}

stopTracking() {

console.log('stopTracking');

this.backgroundGeolocation.finish();
this.watch.unsubscribe();

}

}
