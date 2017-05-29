export class Book {
	protected author: string[];
	protected title: string[];

	constructor(author: string[], bookName: string[]) {
		this.author = author;
		this.title = bookName;
	}
}