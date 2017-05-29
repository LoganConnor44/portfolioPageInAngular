import { Component } 			from '@angular/core';

import { Applicant }			from '../../classes/applicant';
import { ApplicantService } 	from '../../applicant.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	providers: [ ApplicantService ]
})
export class HeaderComponent {
	applicant: Applicant;
	skills: string[];

	constructor(private applicantService: ApplicantService) {
		this.applicant = this.applicantService.getApplicant();
	}
 }