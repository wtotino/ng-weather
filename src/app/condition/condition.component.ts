import { Component, inject, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ConditionsAndZip } from 'app/model/conditions-and-zip.type';
import { LocationService } from "../location.service";
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent {

  public weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  @Input() location: ConditionsAndZip;

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
