import { Component, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, interval } from 'rxjs';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements OnInit {

  public weatherService = inject(WeatherService);
  private interval: Observable<number> = interval(30000).pipe(takeUntilDestroyed());

  ngOnInit() {
	this.interval.subscribe(() => this.weatherService.updateAllConditions());
  }
}
