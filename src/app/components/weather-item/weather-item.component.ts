import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Weather } from '../../Weather';
import { faTimes, faSyncAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input() weather: Weather = {
    city: 'Stockholm',
    country: 'Sweden',
    temperature: 20,
    weatherIcon: "Summer is coming"
  };
  @Input() weatherIcon: string;

  @Output() onDeleteWeather: EventEmitter<Weather> = new EventEmitter();
  @Output() onRefreshWeather: EventEmitter<string> = new EventEmitter();
  faTimes = faTimes;
  faSyncAlt = faSyncAlt;
  randomColor: string = '';
  // weatherIcon: string = '';
  constructor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.randomColor = `rgb(${r}, ${g}, ${b})`;
    this.weatherIcon = this.weather.weatherIcon;
    console.log("Weather Icon: ", this.weatherIcon);
   }

  ngOnInit(): void {
  }

  getRamdomColor(): string {
    return this.randomColor;
  }

  getWeatherIcon(): string {
    return this.weatherIcon
  }

  onDelete(weather: Weather) {
    console.log("DELETE!!!!!!", weather)
    // this.onDeleteWeather.emit(weather)
    // weather.city = "456";
    this.onDeleteWeather.emit(weather)
  }

  onRefresh(city: string) {
    this.onRefreshWeather.emit(city)
    console.log("refresh the city: ", city)
  }


}
