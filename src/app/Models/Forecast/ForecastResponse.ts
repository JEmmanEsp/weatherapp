import { Data } from './Data';

export interface ForecastResponse {
    data: Data;
    statusCode: number;
    message: string;
}