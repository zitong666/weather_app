import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { WeatherService } from '../../services/weather.service'
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  // cityName: string = '';
  // @Input() text: string;
  // @Output() onAddWeather = new EventEmitter();

  ngOnInit() {
  }

  // onAddWeather() {
  //   this.btnClick.emit();
  //   console.log("add the weather of the city")
  // }
  
  
}
