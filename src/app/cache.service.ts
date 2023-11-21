import { Inject, Injectable } from "@angular/core";
import { APP_CONFIG } from "app/app.module";
import { AppConfig } from "app/data/config";
import { Observable, of, tap } from "rxjs";

/**
 * Service that keeps application data stored inside the browser's localStorage
 * and refreshes it if enough time passed (based on AppConfig.cacheRefresh value)
 * @see AppConfig
 * 
 * Personal Note: At first I thought about creating an interceptor but that would've been easy to "copy paste" from the internet so I decided on something more "personal"
 * There's still some advantages in using this approach, for example one can decide in each service which calls gets cached and which aren't.
 * I'm not 100% sure but I think it would also be more complicated to rebuild an HttpResponse with all the headers when saved on the localStorage
 */
@Injectable({
	providedIn: 'root'
})
export class CacheService {
	private static readonly APP_CACHE: string = "appCache";
	private cache: { [key: string]: { data: any; lastUpdate: number } } = {};

	/**
	 * How many milliseconds a value needs to be kept inside the cache (default value 2 hours)
	 */
	private cacheRefreshTime = 2 * 60 * 60 * 1000;

	/**
	 * sets the cacheRefreshTime value and gets items from localStorage
	 */
	constructor(@Inject(APP_CONFIG) config: AppConfig) {
		this.cacheRefreshTime = config.cacheRefreshTime;

		const value = localStorage.getItem(CacheService.APP_CACHE);
		if (value) {
			this.cache = JSON.parse(value);
		}
	}

	/**
	 * checks if a value associated with the given url is inside the cache, otherwise it returns
	 * the passed observable and saves the value in cache
	 */
	public get<T>(url: string, observable: Observable<T>): Observable<T> {
		// When the cache is considered expired
		const cacheExpire = new Date().getTime() - this.cacheRefreshTime;

		// If we find the value in cache
		if(this.cache[url] && this.cache[url].lastUpdate > cacheExpire) {
			return of(this.cache[url].data);
		}

		// If we don't find the value or is expired we return the observable but save data in cache
		return observable.pipe(tap(data => {
			this.cache[url] = { data, lastUpdate: new Date().getTime() };

			localStorage.setItem(CacheService.APP_CACHE, JSON.stringify(this.cache));
		}));
	}
}
