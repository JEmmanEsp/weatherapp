import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/Models/Forecast/ForecastModel';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  
  @Input() weather: ForecastModel;
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
