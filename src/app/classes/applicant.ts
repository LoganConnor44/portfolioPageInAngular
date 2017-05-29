import { Education } from './education';
import { Occupation } from './occupation';
import { ContactInfo } from './contact-info';
import { SocialMedia } from './social-media';
import { Book } from './book';

export class Applicant {
	protected firstName: string;
	protected lastName: string;
	protected education: Education;
	protected occupation: Occupation;
	protected skills: string[];
	protected portfolio: string;
	protected contactInfo: ContactInfo;
	protected books: Book;
	protected programmingLanguages: string[];
	protected projects: string[];

	constructor(firstNameOfApplicant: string, lastNameOfApplicant: string) {
		this.firstName = firstNameOfApplicant;
		this.lastName = lastNameOfApplicant;
	}

	setEducation(educationName: string, fieldOfStudy: string, gradYear: number, degreeType: string): Applicant {
		this.education = new Education(
			educationName,
			fieldOfStudy,
			gradYear,
			degreeType
		);
		return this;
	}

	setOccupation(name: string, position: string, startDate: string, endDate?: string): Applicant {
		this.occupation = new Occupation (
			name,
			position,
			startDate
		);
		if(endDate !== null) {
			this.occupation.endDate = endDate;
		}
		this.occupation.position = position;
		this.occupation.startDate = startDate;
		this.occupation.endDate = endDate;
		return this;
	}

	setSkills(listOfSkills: string[]): Applicant {
		this.skills = listOfSkills;
		return this;
	}

	setPortfolio(portfolioLinkAdress: string): Applicant {
		this.portfolio = portfolioLinkAdress;
		return this;
	}

	setContactInfo(email: string, git?: string, twitter?: string, facebook?: string, linkedIn?: string, cell?: string): Applicant {
		this.contactInfo = new ContactInfo (
			email,
			git,
			twitter,
			facebook,
			linkedIn,
			cell
		);
		return this;
	}

	setBooks(author: string[], title: string[]): Applicant {
		this.books = new Book(author, title);
		return this;
	}

	generateArray():string[] {
		return this.skills;
	}

	setLanguages(progLanguages: string[]): Applicant {
		this.programmingLanguages = progLanguages;
		return this;
	}

	setProjects(projects: string[]): Applicant {
		this.projects = projects;
		return this;
	}
}