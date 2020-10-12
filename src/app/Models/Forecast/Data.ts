import { ForecastModel } from './ForecastModel';

export interface Data {
    location: string;
    forecastWeather: ForecastModel[];
}