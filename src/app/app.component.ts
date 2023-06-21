import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { Weather } from './Weather';
// import { toggleAddWeather} from './components/add-city/add-city.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: any;

  


  constructor() {

  }
  ngOnInit(): void {
    
  }
}
