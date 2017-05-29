import { SocialMedia } from './social-media';

export class ContactInfo extends SocialMedia {
	email: string;
	cell: string;

	constructor(email: string, git?: string, twitter?: string, facebook?: string, linkedIn?: string, cell?: string){
		super(git, twitter, facebook, linkedIn);
		this.email = email;
		if(cell !== null) {
			this.cell = cell;
		}
	}
}