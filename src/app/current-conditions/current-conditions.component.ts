import { AfterViewInit, ChangeDetectorRef, Component, Signal, TemplateRef, ViewChild, computed, inject } from '@angular/core';
import { Router } from "@angular/router";
import { ConditionsAndZip } from 'app/conditions-and-zip.type';
import { TabModel, TabsComponent } from 'app/tabs/tabs.component';
import { LocationService } from "../location.service";
import { WeatherService } from "../weather.service";

@Component({
	selector: 'app-current-conditions',
	templateUrl: './current-conditions.component.html',
	styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent implements AfterViewInit {

	@ViewChild("conditionTemplate") public conditionTemplate: TemplateRef<any>;
	@ViewChild("tabsComponent") public tabsComponent: TabsComponent;

	public weatherService = inject(WeatherService);
	private router = inject(Router);
	protected locationService = inject(LocationService);

	// We make a computed signal that turns the map into an array
	private currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();
	private tabsMap: { [key: string ]: TabModel } = {};
	public tabs: Signal<TabModel[]>;

	constructor(private cdref: ChangeDetectorRef) {	}

	public showForecast(zipcode: string){
		this.router.navigate(['/forecast', zipcode]);
	}

	public ngAfterViewInit() {
		this.tabs = computed(() => {
			const conditions = this.currentConditionsByZip();

			// First we check if we have to remove some values
			Object.keys(this.tabsMap).forEach(t => {
				if(!conditions.some(c => c.zip === t)) {
					delete this.tabsMap[t];
				}
			});

			// Then we add the values we don't already have
			conditions.filter(c => !this.tabsMap[c.zip]).forEach(c => {
				this.tabsMap[c.zip] = {
					content: this.conditionTemplate,
					data: c,
					title: c.data.name + " (" + c.zip + ")",
				};
			});

			return Object.values(this.tabsMap);
		});

		// Without this we will have ExpressionChangedAfterItHasBeenCheckedError error while developing
		this.cdref.detectChanges();
	}
}
