import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchCityComponent } from './components/search-city/search-city.component';
import { AddCityComponent } from './components/add-city/add-city.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchCityComponent,
    AddCityComponent,
    CityWeatherComponent,
    WeatherItemComponent,
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
