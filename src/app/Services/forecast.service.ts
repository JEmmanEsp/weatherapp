import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ForecastResponse } from '../Models/Forecast/ForecastResponse';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public getForecast(location: string, units: string) {
    let forecastUrl = this.getForecastUrl(location, units);
    return this.http.get<ForecastResponse>(forecastUrl);
  }

  private getForecastUrl(location: string, units: string) {
    let url = environment.forecastUrl.replace("{location}", location);
    return url.replace("{units}", units);
  }
}
