import { Applicant } from './classes/applicant';
;

export const LOGAN = new Applicant('Logan', 'Connor')
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
			'The Death And Life Of Great American Cities - Jane Jacobs',
			'Superintelligence: Paths, Dangers, Strategies - Nick Bostrom',
			'On Intelligence: How a New Understanding of the Brain will Lead to the Creation of Truly Intelligent Machines - Jeff Hawkins',
			'Elon Musk: Tesla, SpaceX, And The Quest For A Fantastic Future - Ashlee Vance',
			'This Changes Everything: Capitalism VS The Climate - Naomi Klein',
			'Meditations - Marcus Aurelius',
			'How To Win Friends And Influence Them - Dale Carnegie',
			'The Design Of Everyday Things - Donald Norman',
			'Algorithms To Live By: The Computer Science Of Human Decisions - Brian Christian'
		]
	);