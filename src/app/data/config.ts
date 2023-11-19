export interface AppConfig {
	cacheRefreshTime: number;
}

/**
 * Application configuration variables
 * NB: I could've used the environment files, adding a environment.spec.ts file for tests, but since Angular 15 won't generate environment 
 * files when creating a project with ng new I decided to go with the providers approach
 */
export const NG_WEATHER_CONFIG: AppConfig = {
	/**
	 *  How many milliseconds a value needs to be kept inside the cache
	 */
	cacheRefreshTime: 15 * 1000
	// cacheRefreshTime: 2 * 60 * 60 * 1000
};
