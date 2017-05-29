import { Component } 				from '@angular/core';

import { Applicant } 			from '../../classes/applicant';
import { ApplicantService } 	from '../../applicant.service';

@Component({
	selector: 'app-about',
	providers: [ ApplicantService ],
	styleUrls: ['./about.component.css'],
	templateUrl: './about.component.html'
})
export class AboutComponent { 
	applicant: Applicant;
	skills: string[];

	constructor(private applicantService: ApplicantService) {
		this.applicant = this.applicantService.getApplicant();
		//initialize the materialcss modal
		let elements: NodeListOf<Element> = document.getElementsByClassName('aboutModal');
		//let classes: DOMTokenList = elements[0].classList;
	}	
}