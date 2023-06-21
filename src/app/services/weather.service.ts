import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { Weather } from '../Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private dbApiUrl = 'http://localhost:5000/weathers'
  constructor(private http: HttpClient) { }

  getCityWeather():  Observable<Weather[]> {
    return this.http.get<Weather[]>(this.dbApiUrl)
  }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('http://api.weatherstack.com/current?access_key=********&query=' + cityName)
  }

  
  deleteWeather(weather: Weather): Observable<Weather> {
    const deleteUrl = `${this.dbApiUrl}/${weather.id}`;
    console.log('This is the delete URL: ' + deleteUrl)
    return this.http.delete<Weather>(deleteUrl);

  }
  addWeather(weather: Weather): Observable<Weather> {
    return this.http.post<Weather>(this.dbApiUrl, weather);
  }

  // refreshWeather(weather: Weather): Observable<Weather> {
  //   const refreshCity = weather.city;
  //   const latestWeather = this.getWeatherData(refreshCity)
  //   this.
  //   return this.http.put<Weather>(this.dbApiUrl, weather);
  // }

}
