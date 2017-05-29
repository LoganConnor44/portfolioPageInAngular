import { Injectable } from '@angular/core';

import { Applicant } 	from './classes/applicant';
import { LOGAN }		from './logan';

@Injectable()
export class ApplicantService {
	protected Logan: Applicant;

	getApplicant(): Applicant {
		this.Logan = new Applicant('Logan', 'Connor')
			.setEducation(
				'Florida State University',
				'International Affairs',
				2012,
				'Bachelor\'s of Art'
			)
			.setOccupation(
				'Florida\'s Department Of Environmental Protection',
				'Applicantion Systems Programmer',
				'10/01/2015'
			).setSkills(
				[
					'PHP',
					'PL/SQL',
					'JavaScript',
					'TypeScript'
				]
			)
			.setPortfolio(
				'https://github.com/LoganConnor44'
			)
			.setContactInfo(
				'loganconnor44@gmail.com',
				'https://github.com/LoganConnor44',
				'@theDisConnor'
			)
			.setBooks(
				[
					'Jane Jacobs'
				],
				[
					'The Death And Life Of Great American Cities',
					'Superintelligence: Paths, Dangers, Strategies',
					'On Intelligence: How a New Understanding of the Brain will Lead to the Creation of Truly Intelligent Machines',
					'Elon Musk: Tesla, SpaceX, And The Quest For A Fantastic Future',
					'This Changes Everything: Capitalism VS The Climate',
					'Meditations (Marcus Aurelius)',
					'How To Win Friends And Influence Them',
					'The Design Of Everyday Things',
					'Algorithms To Live By: The Computer Science Of Human Decisions',
					'Test Driven Development By Example'
				]
			)
			.setLanguages(
				[
					'EcmaScript (JavaScript)',
					'PHP',
					'PL/SQL',
					'TypeScript',
					'Visual FoxPro'
				]
			)
			.setProjects(
				[
					'Politics Made Simple',
					'Book Update Via Twitter',
					'Portfolio Website (CodeIgniter)',
					'Test Driven Development Training Repository (PHPUnit)'
				]
			);
		return this.Logan;
	}
}