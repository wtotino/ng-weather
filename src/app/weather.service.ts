import { Injectable, Signal, computed, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CacheService } from 'app/cache.service';
import { LocationService } from 'app/location.service';
import { ConditionsAndZip } from './conditions-and-zip.type';
import { CurrentConditions } from './current-conditions/current-conditions.type';
import { Forecast } from './forecasts-list/forecast.type';

/**
 * example codes
 * 95742 Rancho Cordova
 * 10001 New York
 */
export interface ConditionsMap {
	[key: string]: ConditionsAndZip;
}

@Injectable()
export class WeatherService {

	private static URL = 'http://api.openweathermap.org/data/2.5';
	private static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
	private static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
	private currentConditionsMap = signal<ConditionsMap>({});

	// We create a computed signal that returns the array
	private currentConditions: Signal<ConditionsAndZip[]> = computed(() => Object.values(this.currentConditionsMap()));

	constructor(private http: HttpClient, private locationService: LocationService, private cacheService: CacheService) {
		// We use takeUntilDestroyed so that if this service is provided locally in a component it will be destoryed together with the component
		this.locationService.locations.pipe(takeUntilDestroyed()).subscribe((zipcodes: string[]) => {
			this.currentConditionsMap.mutate(conditions => {
				// We iterate through the existing conditions to remove the ones that have been removed
				Object.keys(conditions).forEach(c => {
					if(!zipcodes.includes(c)) {
						// We don't call removeCurrentConditions so we don't have multiple mutations
						// at the moment nobody calls removeCurrentConditions because it goes through locationService
						// Maybe add and remove CurrentConditions should be private?
						delete conditions[c];
					}
				});

			});

			// Get current conditions so we can use them to filter the zipcodes to avoid making needless calls to already fetched conditions
			const current = this.currentConditionsMap();
			// Then we add the new conditions
			zipcodes.filter(z => !current[z]).forEach(z => this.addCurrentConditions(z));
		});
	}

	public addCurrentConditions(zipcode: string): void {
		// Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
		const url = `${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`;
		this.cacheService.get(url, this.http.get<CurrentConditions>(url)).subscribe(data => this.currentConditionsMap.mutate(conditions => {
			conditions[zipcode] = {zip: zipcode, data};
		}));
	}

	public removeCurrentConditions(zipcode: string) {
		this.currentConditionsMap.mutate(conditions => {
			delete conditions[zipcode];
		});
	}

	public getCurrentConditions(): Signal<ConditionsAndZip[]> {
		// Computed signals are already readonly
		return this.currentConditions;
	}

	public getForecast(zipcode: string): Observable<Forecast> {
		// Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
		const url = `${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`;
		return this.cacheService.get(url, this.http.get<Forecast>(url));
	}

	public getWeatherIcon(id: number): string {
		if (id >= 200 && id <= 232) {
			return WeatherService.ICON_URL + "art_storm.png";
		} else if (id >= 501 && id <= 511) {
			return WeatherService.ICON_URL + "art_rain.png";
		} else if (id === 500 || (id >= 520 && id <= 531)) {
			return WeatherService.ICON_URL + "art_light_rain.png";
		} else if (id >= 600 && id <= 622) {
			return WeatherService.ICON_URL + "art_snow.png";
		} else if (id >= 801 && id <= 804) {
			return WeatherService.ICON_URL + "art_clouds.png";
		} else if (id === 741 || id === 761) {
			return WeatherService.ICON_URL + "art_fog.png";
		} else {
			return WeatherService.ICON_URL + "art_clear.png";
		}
	}

}
