import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppConfig, NG_WEATHER_CONFIG } from 'app/data/config';
import { TabsComponent } from 'app/tabs/tabs.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { LocationService } from './location.service';
import { MainPageComponent } from './main-page/main-page.component';
import { WeatherService } from './weather.service';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
@NgModule({
	declarations: [AppComponent, ZipcodeEntryComponent, ForecastsListComponent, CurrentConditionsComponent, MainPageComponent, TabsComponent],
	imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule, routing, ServiceWorkerModule.register('/ng-weather/ngsw-worker.js', { enabled: environment.production })],
	providers: [
		LocationService,
		WeatherService,
		{ provide: APP_CONFIG, useValue: NG_WEATHER_CONFIG },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
