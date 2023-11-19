import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LOCATIONS: string = "locations";

@Injectable()
export class LocationService {

	private locationsArr: string[] = [];

	/**
	 * Subject used to notify when locations are changed
	 * We use a BehaviorSubject so whoever subscribes will get the current statte of the locations
	 */
	private locationsSub: BehaviorSubject<string[]> = new BehaviorSubject([]);

	/**
	 * get locations updates as Observable
	 */
	public get locations() {
		return this.locationsSub.asObservable();
	}

	constructor() {
		const locString = localStorage.getItem(LOCATIONS);
		if (locString) {
			this.locationsArr = JSON.parse(locString);

			// We notify the whole array 
			this.locationsSub.next(this.locationsArr);
		}
	}

	/**
	 * Updates locations and localStorage
	 */
	public addLocation(zipcode: string) {
		// Don't add empty zipcodes and already existing zipcodes
		if(zipcode?.length > 0 && !this.locationsArr.includes(zipcode)) {
			this.locationsArr.push(zipcode);
			localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsArr));
			this.locationsSub.next(this.locationsArr);
		}
	}

	public removeLocation(zipcode: string) {
		const index = this.locationsArr.indexOf(zipcode);
		if (index !== -1) {
			this.locationsArr.splice(index, 1);
			localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsArr));
			this.locationsSub.next(this.locationsArr);
		}
	}
}
