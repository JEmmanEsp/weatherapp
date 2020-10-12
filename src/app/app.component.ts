import { Component, OnInit } from '@angular/core';
import { GeocodingService } from './Services/geocoding.service';

import { GeocodeModel } from './Models/GeocodeModels/GeocodeModel';
import { ForecastService } from './Services/forecast.service';
import { ForecastModel } from './Models/Forecast/ForecastModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  units: string;
  loadingWeather: boolean = true;
  weatherServicesError: boolean = false;
  locationSearch: string;
  location: string;
  currentWeather: ForecastModel;
  forecastWeather: ForecastModel[];

  constructor(
    private geoService: GeocodingService,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
    let savedUnits = localStorage.getItem('units');
    this.units = (savedUnits == null) ? 'm' : savedUnits;
    this.getLocation();
  }
  
  saveUnits() {
    localStorage.setItem('units', this.units);

    if(this.locationSearch == undefined || this.locationSearch == '')
      this.getLocation();
    else
      this.getWeatherForecast(this.locationSearch, this.units);
  }
  
  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.geoLocation(longitude, latitude);
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  geoLocation(lon: number, lat: number) {
    this.geoService.getReverseLocation(lon, lat).subscribe((result: GeocodeModel) => {
      for(let val of result.features)
        if(val.id.indexOf("place") !== -1)
          this.getWeatherForecast(val.place_name, this.units)
    });
  }

  getWeatherForecast(location: string, units: string) {
    
    this.loadingWeather = true;
    this.weatherServicesError = false;

    this.forecastService.getForecast(location, units).subscribe(
      (result) => {

        this.location = result.data.location;
        this.currentWeather = result.data.forecastWeather[0];
        result.data.forecastWeather.shift();

        this.forecastWeather = result.data.forecastWeather;
        this.loadingWeather = false;
      },
      (_) => this.weatherServicesError = true
    );
  }

  onKeyup(ev: any) {
    if(ev.key === "Enter")
      this.searchWeather();
  }
  
  searchWeather() {
    this.getWeatherForecast(this.locationSearch, this.units);
  }

}
