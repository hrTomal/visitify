import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GeoLocationService } from '../../../../services/location/geo-location.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-cs-cities-around',
  standalone: true,
  imports: [
    TranslateModule,
    GoogleMapsModule
  ],
  templateUrl: './cs-cities-around.component.html',
  styleUrl: './cs-cities-around.component.css'
})
export class CsCitiesAroundComponent {
  translate : TranslateService = inject(TranslateService); 

  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.0060 }; // Default to New York City
  zoom = 12; // Set default zoom level
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  isLocationAvailable = false; // Track if the actual location is available

  constructor(private geoLocattion : GeoLocationService){}

  ngOnInit(): void {
    this.getLocationFromGoogle();
  }

  

  getLocationFromGoogle() {
    this.geoLocattion.getGeoLocation().subscribe({
      next: value => {
        const { lat, lng } = value.location;
        this.center = {
          lat: lat,
          lng: lng,
        };
        this.isLocationAvailable = true;
      },
      error: err => console.error('Error fetching location from Google Geolocation API: ' + err),
    });
  }

}
