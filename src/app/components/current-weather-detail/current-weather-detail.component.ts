import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/Models/Forecast/ForecastModel';

@Component({
  selector: 'app-current-weather-detail',
  templateUrl: './current-weather-detail.html',
  styleUrls: ['./current-weather-detail.css']
})
export class CurrentWeatherDetailComponent implements OnInit {
  
  @Input() weather: ForecastModel;
  @Input() isLoading: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
