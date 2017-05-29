export class Occupation {
	name: string;
	position: string;
	startDate: string;
	endDate: string;

	constructor(name: string, position: string, startDate: string, endDate?: string) {
		this.name = name;
		this.position = position;
		this.startDate = startDate;
		if(endDate !== null) {
			this.endDate = endDate;
		}
	}
}