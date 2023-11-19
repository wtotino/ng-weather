import { Pipe, PipeTransform } from '@angular/core';

/**
 * Replaces newlines with <br> tags. can be used only in HTML
 * context (such as [innerHTML]) won't work with normal interpolation
 */
@Pipe({ name: 'objectValues', pure: false })
export class ValuesPipe implements PipeTransform {
	public transform<T>(value: {[key: string]: T}): T[] {
		console.log("object", value);
		return Object.values(value);
	}
}
