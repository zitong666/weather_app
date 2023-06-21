import { Component, OnInit } from '@angular/core';
import { Weather } from '../../Weather';
import { WeatherService } from 'src/app/services/weather.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  weathers: Weather[] = [];
  cityName: string = '';
  receivedWeather?: Weather;
  weatherIcon: string = '';
  constructor(private weatherService: WeatherService, private shareService: ShareService) {
    this.shareService.dataObservable.subscribe(data => {
      this.receivedWeather = data;
      console.log("REVEIVED DATA:", data);
      this.addWeather(data);
    })
  }

  ngOnInit(): void {
    this.weatherService.getCityWeather().subscribe(
      (weathers) => 
      { (this.weathers = weathers)
      // (weathers) => (this.weathers = weathers)
      console.log(this.weathers);
      console.log(this.weathers[0].weatherIcon)
    }
    );
    
  }
  deleteWeather(weather: Weather) {
    this.weatherService
      .deleteWeather(weather)
      .subscribe(
        () => (this.weathers = this.weathers.filter((w) => w.id !== weather.id))
      );
  }

  addWeather(weather: Weather) {
    console.log("HERE!!!!!", weather)
    this.weatherService
      .addWeather(weather)
      .subscribe(
        (weather) => (this.weathers.push(weather)));
  }

  // refreshWeather(weather: Weather) {

  //   console.log("UPDATE WEATHER", weather)
  //   this.weatherService.refreshWeather(weather).subscribe(
  //   //   (weather) => (this.weathers[]] = weather)
  //   // )
  // }
}
