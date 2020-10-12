import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GeocodeModel } from '../Models/GeocodeModels/GeocodeModel';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private http: HttpClient) { }

  public getReverseLocation(Longitude: number, Latitude: number) {
    let reverseUrl = this.getGeocodeUrl(Longitude, Latitude);
    return this.http.get<GeocodeModel>(reverseUrl);
  }

  private getGeocodeUrl(Longitude: number, Latitude: number) {
    let geocodeUrl: string = environment.geocodingUrl.replace("{lon}", String(Longitude));
    return geocodeUrl.replace("{lat}", String(Latitude));
  }
}
