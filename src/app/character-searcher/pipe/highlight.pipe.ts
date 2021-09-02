import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
	name: 'highlight'
})
export class HighlightSearchPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) { }

	transform(value: any, args: string): any {
		if (!args) {
			return value;
		}

		const regex = new RegExp(args, 'gi');
		const matchResult = value.match(regex);

		if (!matchResult) {
			return value;
		}

		return value.replace(regex, `<span class='g-highlight'>${matchResult[0]}</span>`);
	}
}