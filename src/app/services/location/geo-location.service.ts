import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  private apiUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDOKp9f0j7Z66Dk7fK4FG6wWU0DiKHrt6o';
  private geocodingApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor(private http: HttpClient) {}

  getGeoLocation(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }

  
}
