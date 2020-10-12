import { Component, Input, OnInit } from '@angular/core';
import { ForecastModel } from 'src/app/Models/Forecast/ForecastModel';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit {
  
  @Input() forecast: ForecastModel;
  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getDay(date: string) {
    let year: number = Number(date.split("-")[0]);
    let month: number = Number(date.split("-")[1])-1;
    let day: number = Number(date.split("-")[2]);

    let newDate = new Date(year, month, day);

    switch(newDate.getDay()) {
      case 0:
        return "Sun"
      case 1:
        return "Mon"
      case 2:
        return "Tue"
      case 3:
        return "Wed"
      case 4:
        return "Thu"
      case 5:
        return "Fri"
      case 6:
        return "Sat"
    }
  }

}
