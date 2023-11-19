import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";
import { WeatherService } from "../weather.service";
import { Forecast } from "./forecast.type";

@Component({
	selector: "app-forecasts-list",
	templateUrl: "./forecasts-list.component.html",
	styleUrls: ["./forecasts-list.component.css"],
})
export class ForecastsListComponent {
	private zipcode: string;
	public forecast: Forecast;

	constructor(protected weatherService: WeatherService, route: ActivatedRoute) {
		route.params.subscribe((params) => {
			this.zipcode = params["zipcode"];
			weatherService.getForecast(this.zipcode).pipe(take(1)).subscribe((data) => (this.forecast = data));
		});
	}
}
