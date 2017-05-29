export class Education {
	protected name: string;
	protected field: string;
	protected yearOfGraduation: number;
	protected typeOfDegree: string;

	constructor(name: string, field: string, yearOfGraduation: number, typeOfDegree: string) {
		this.name = name;
		this.field = field;
		this.yearOfGraduation = yearOfGraduation;
		this.typeOfDegree = typeOfDegree;
	}
}