import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from '../Weather';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private dataSubject = new Subject<Weather>();
  dataObservable = this.dataSubject.asObservable();
  constructor() { }

  emitData(newWeather: Weather) {
    this.dataSubject.next(newWeather);
  }
}
