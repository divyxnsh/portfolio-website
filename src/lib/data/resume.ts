import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import PiinpointImg from '$lib/imgs/piinpoint.jpeg';
import PostgridImg from '$lib/imgs/postgrid.jpeg';
import NetnowImg from '$lib/imgs/netnow.png';
import WaterLooImg from '$lib/imgs/waterloo.png';

// Your resume data
export const DATA = {
	name: 'Divyansh Bhandari',
	initials: 'DB',
	url: 'https://github.com/SikandarJODD',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Mumbai, India',
	locationLink: 'https://www.google.com/maps/place/mumbai',
	description:
		'Software Engineer with an entrepreneurial spirit. I love building things that make a difference.',
	summary:
		"Currently a third-year Software Engineering student at University of Waterloo. Technology and sports are two things I'm always ready to have a conversation about.",
	avatarUrl: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	skills: [
		'Python',
		'TypeScript',
		'JavaScript',
		'SQL',
		'C++',
		'C',
		'Golang',
		'React',
		'Redux',
		'LangChain',
		'Django',
		'Flask',
		'GraphQL',
		'Next',
		'Express',
		'MongoDB',
		'PostgreSQL',
		'MySQL',
		'Docker',
		'Redis',
		'AWS',
		'GCP',
		'Azure',
		'Firebase',
		'Postman',
		'Valgrind',
		'CircleCI',
		'Git',
		'Linux'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'd4bhanda@uwaterloo.ca',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/divyxnsh',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/divyanshb/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'NetNow Financial',
			href: 'https://netnow.io',
			badges: [],
			location: 'Remote',
			title: 'Software Engineer Intern',
			logoUrl: NetnowImg,
			start: 'May 2024',
			end: 'August 2024',
			description:
				'Engineered a user-facing RAG system using Langchain & OpenAI embeddings to query & summarize financial documents. Developed an internal analytics tool to track app usage metrics via dynamic React dashboards using PostgreSQL queries. Utilized a Django backend & Slack API for real-time credit status updates; saved ~9 hours/week in manual status checks. Deployed an automated testing service using Docker Compose and CircleCI, integrating Pytest and Cypress tests to streamline the CI/CD pipeline.'
		},
		{
			company: 'PiinPoint',
			badges: [],
			href: 'https://piinpoint.com',
			location: 'Remote',
			title: 'Data Scientist Intern',
			logoUrl: PiinpointImg,
			start: 'September 2023',
			end: 'December 2023',
			description:
				'Resolved performance bottlenecks in location analytics generation, ​​led codebase migration from Pandas to Polars based on internal benchmarking comparisons; reduced load times from 3 minutes to 2 seconds. Implemented KNN algorithm with Ball Trees for spatial indexing; achieved 20x speed-up in nearest landmark searches. Built a service to automate data processing scripts as scheduled jobs with Azure Blob storage; cut manual effort by 90%.'
		},
		{
			company: 'PiinPoint',
			href: 'https://piinpoint.com/',
			badges: [],
			location: 'Santa Clara, CA',
			title: 'Full Stack Developer Intern',
			logoUrl: PiinpointImg,
			start: 'January 2023',
			end: 'April 2023',
			description:
				'Engineered a geospatial analytics engine in Python for concurrent processing of multiple regions; led to ~10 new clients. Optimized data fetching in Python REST APIs by 75% via MongoDB indexing and aggregation pipelines. Designed full-stack components using React and Reflux to filter data and export analytics reports in Excel & PDF formats. Authored unit tests and integration tests using Jest and react-testing-library, achieving 90% code coverage.'
		},
		{
			company: 'PostGrid',
			href: 'https://postgrid.com',
			badges: [],
			location: 'San Jose, CA',
			title: 'Backend Engineer Intern',
			logoUrl: PostgridImg,
			start: 'May 2022',
			end: 'August 2022',
			description:
				'Achieved an 8% boost in foreign transaction profits by utilizing Stripe API to eliminate currency conversion fees. Built 20+ REST APIs and backend features using TypeScript and MERN, serving ~2M requests/month. Developed an order scheduling dashboard using a React + Typescript frontend, deployed to 1000+ users. Created scripts to purge 3 GB total of MongoDB and AWS S3 storage and retain 250+ failed orders per month.'
		}
	],
	education: [
		{
			school: 'University of Waterloo',
			href: 'https://uwaterloo.ca',
			degree: "Bachelor's Degree of Software Engineering Honours (BSE)",
			description:
				'Relevant Coursework: Data Structures, Algorithms, Concurrency, Networks, Software Engineering, Compilers, Databases, Operating Systems, User Interfaces',
			logoUrl: WaterLooImg,
			start: '2021',
			end: '2026'
		}
	],
	projects: [
		{
			title: 'Cricket Guru',
			href: 'https://cricketguru.live',
			dates: 'Jan 2024 - Feb 2024',
			active: true,
			description:
				'Developed a PvP fantasy cricket game bot for 35,000+ users across 15,000+ servers, ranked Top #20 Discord bots',
			technologies: ['Python', 'MongoDB', 'Discord.py', 'Docker', 'Pillow', 'DigitalOcean'],
			links: [
				{
					type: 'Website',
					href: 'https://cricketguru.live',
					icon: Globe
				}
			],
			image: 'src/lib/imgs/cg.png',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4'
		},
		{
			title: 'LocalPass',
			href: 'https://magicui.design',
			dates: 'June 2023 - Present',
			active: true,
			description:
				'Built a powerful password manager, utilizing PebbleDB for data storage and leveraging SSH keys for secure access',
			technologies: ['Golang', 'PebbleDB', 'Cobra'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/divyxnsh/localpass',
					icon: Github
				}
			],
			image: 'src/lib/imgs/localpass.png'
		},
		{
			title: 'ScoreCast',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				' Devised a machine learning model using XGBoost and sk-learn to forecast cricket scores with a R-square score of 96.3%',
			technologies: ['XGBoost', 'Pandas', 'Scikit-learn', 'NumPy'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/divyxnsh/scorecast',
					icon: Github
				}
			],
			image: 'src/lib/imgs/scorecast.png'
		},
		{
			title: 'GenNet',
			href: 'https://llm.report',
			dates: 'April 2023 - September 2023',
			active: true,
			description:
				'Deployed a Flask web app, facilitating family connections via interactive family trees. A way to connect with the generations before and after you in a meaningful way',
			technologies: ['Python', 'Flask', 'Firebase'],
			links: [
				{
					type: 'Devpost',
					href: 'https://devpost.com/software/gennet',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/AbdulBaseetShabi/GenNet',
					icon: Github
				}
			],
			image: 'src/lib/imgs/gennet.png'
		},
		{
			title: 'COVID-19 Simulator',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description: 'This project simulates the spreading of a virus given different scenarios.',
			technologies: ['Lua', 'Love2D'],
			links: [
				{
					type: 'Devpost',
					href: 'https://devpost.com/software/covid-19-simulator-0ha4vc',
					icon: Globe
				}
			],
			image: '$lib/imgs/covidsim.png',
			video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4'
		},
		{
			title: 'PolicyHub',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description:
				'Policy Hub is a Chrome extension that can succinctly summarize privacy policies. We aim to empower users with the knowledge to make informed decisions regarding their online interactions.',
			technologies: ['JavaScript', 'OpenAI', 'HTML/CSS'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/divyxnsh/PolicyHub',
					icon: Github
				}
			],
			image: 'src/lib/imgs/policyhub.png'
		},
		{
			title: 'Plottr',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description: 'Speech->Text->Drawing CNC Plotter.',
			technologies: ['Python', 'Raspberry Pi', 'Arduino'],
			links: [
				{
					type: 'Demo',
					href: 'https://drive.google.com/file/d/1boitd9ucJnst7DF7zHsaoGAR5GUqgljd/view',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/truered8/double-m',
					icon: Github
				}
			],
			image: 'src/lib/imgs/plottr.png'
		},
		{
			title: 'Biquadris',
			href: 'https://automatic.chat',
			dates: 'April 2023 - March 2024',
			active: true,
			description: '2-player Tetris variant with a GUI',
			technologies: ['C++', 'XQuartz', 'OOP', 'Makefile'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/divyxnsh/biquadris',
					icon: Github
				}
			],
			image: 'src/lib/imgs/biquadris.png'
		}
	]
};
