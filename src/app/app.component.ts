import { Component, OnInit, Directive } 	from '@angular/core';

import { Applicant } 			from './classes/applicant';
import { ApplicantService } 	from './applicant.service';

@Component({
	selector: 'app-root',
	providers: [ 
		ApplicantService
	],
	templateUrl: './app.component.html'
})
export class AppComponent { 
	applicant: Applicant;
	skills: string[];

	constructor(private applicantService: ApplicantService) {
		this.applicant = this.applicantService.getApplicant();
	}

	/*getApplicantFromService(): void {
		this.applicantService.getApplicant().then(logan => { 
			this.applicant = logan;
		});
	}

	setSkillsArrayFromObject(fromObject: Applicant) {
		this.skills =  fromObject.generateArray();
	}

	ngOnInit(): void {
		this.getApplicantFromService();
		this.setSkillsArrayFromObject(this.applicant);
		//console.log(this.applicant.skills[0])
	}	*/
}