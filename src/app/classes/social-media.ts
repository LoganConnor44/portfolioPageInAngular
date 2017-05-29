export class SocialMedia {
	git: string;
	twitter: string;
	facebook: string;
	linkedIn: string;

	constructor(git?: string, twitter?: string, facebook?: string, linkedIn?: string) {
		if(git !== null) {
			this.git = git;
		}
		if(twitter !== null) {
			this.twitter = twitter;
		}
		if(facebook !== null) {
			this.facebook = facebook;
		}
		if(linkedIn !== null) {
			this.linkedIn = linkedIn;
		}
	}
}