import { Component, OnInit, ViewChild,EventEmitter, Output, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { MatMenuTrigger } from '@angular/material/menu';

import { Weather } from '../../Weather';
import { WeatherService } from '../../services/weather.service';
import { ShareService } from 'src/app/services/share.service';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css'],
})
export class SearchCityComponent implements OnInit {
  matMenuTrigger?: MatMenuTrigger;
  @Input() weather: Weather = {
    city: 'Stockholm',
    country: 'Sweden',
    temperature: 20,
    weatherIcon: "Summer is coming"
  };
  @ViewChild('autocompleteInput', { read: MatAutocompleteTrigger }) autocompleteInput!: MatAutocompleteTrigger;
  cityName = new FormControl('');
  cities: string[] = ['Stockholm', 'Lisbon', 'London', 'Paris', 'New York City', 'Tokyo', 'Beijing', 'Moscow', 'Rio de Janeiro', 'Cairo', 'Istanbul', 'Sydney', 'Rome', 'Mumbai', 'Buenos Aires', 'Mexico City', 'Toronto', 'Johannesburg', 'Dubai'];
  inputCity: string = '';
  filteredCities!: Observable<string[]>;
  newCity: string = '';
  weatherDate?: WeatherData;
  city: string = '';
  country: string = '';
  temperature: number = 0;
  weatherIcon: string = '';
  locationDotIcon = faMapMarkerAlt;

  // @Output() onAddWeather: EventEmitter<Weather> = new EventEmitter();

  constructor(private weatherService: WeatherService, private sharedService: ShareService) { }

  ngOnInit() {
    this.filteredCities = this.cityName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(cityName => cityName.toLowerCase().includes(filterValue));
  }
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    
    const selectedCity = event.option.value;

    // const newCity = {
    //   selectedCity: this.selectedCity
    // }

    // this.onSelectCity.emit(newCity);

    console.log('The weather of city: ' + selectedCity + ' will be checked!')

    this.newCity = selectedCity;
  }

  // onInput(value: string) {
  //   this.inputCity = value;
  //   console.log('strange city: ' + value + ' will be checked!')
  // }
  
  requestWeather(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherDate = response;
        this.normalizeWeather(this.weatherDate)
        // return response;
      }
    })
  }

  normalizeWeather(originWeatherDate: WeatherData) {
    const normalizedWeather = JSON.parse(JSON.stringify(originWeatherDate))
    const cityInfo = normalizedWeather.location;
    const currentWeatherInfo = normalizedWeather.current;
    this.city = cityInfo.name;
    this.country = cityInfo.country;
    this.temperature = currentWeatherInfo.temperature;
    this.weatherIcon = currentWeatherInfo.weather_icons[0]

    const newWeather: Weather = {
      city: this.city,
      country: this.country,
      temperature: this.temperature,
      weatherIcon: this.weatherIcon,
    }

    this.sharedService.emitData(newWeather);
  }

  onAdd() {
    const searchCity = this.newCity;
    this.requestWeather(searchCity); 
    this.newCity = '';
    this.autocompleteInput.writeValue('');
    // const newWeather = {
    //   city: "test",
    //   country: "test",
    //   temperature: 666,
    //   weatherIcon: "this.weatherIcon",
    // }
    // console.log("The value is:", newWeather)
    
    // this.emitData()
    // this.city = '';
    // this.country = '';
    // this.temperature = 0;
    // this.weatherIcon = '';

    // return weather;
  }

}
