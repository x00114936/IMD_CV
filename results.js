var results = angular.module("results", []);

	results.controller("resultsController",
		function resultsController($scope){
			$scope.results = {
					fourthYear: [
					{
						id: 1,
						subject: "Interactive Media & Design",
						grade: "Due Jan 2017"
					},
					{
						id: 2,
						subject: "Enterprise Application Architecture",
						grade: "Due Jan 2017"
					},
					{
						id: 3,
						subject: "Cloud Architecture",
						grade: "Due Jan 2017"
					},
					{
						id: 4,
						subject: "Information Management",
						grade: "Due Jan 2017"
					},
					{
						id: 5,
						subject: "Social Media Analysis and Information Integration",
						grade: "Due Jan 2017"
					}
			],
				thirdYear: [
				{
						id: 1,
						subject: "Web Design & Development 2",
						grade: "B+"
				},
				{
						id: 2,
						subject: "Advanced Databases",
						grade: "A"
				},
				{
						id: 3,
						subject: "Networking 3",
						grade: "A"
				},
				{
						id: 4,
						subject: "Operating Systems",
						grade: "B+"
				},
				{
						id: 5,
						subject: "Innovation & Entreprise",
						grade: "B"
				},
				{
						id: 1,
						subject: "Cloud Services & Distributed Computing",
						grade: "B+"
					}
				],
				secondYear: [
				{
						id: 1,
						subject: "Web Design & Development",
						grade: "A"
					},
					{
						id: 2,
						subject: "Discrete Mathemathics",
						grade: "A"
					},
					{
						id: 3,
						subject: "Computer Services Management",
						grade: "B+"
					},
					{
						id: 4,
						subject: "Database Design & Programming",
						grade: "A"
					},
					{
						id: 5,
						subject: "Software Quality & Testing",
						grade: "A"
					},
					{
						id: 6,
						subject: "Management Science",
						grade: "A"
					},
					{
						id: 7,
						subject: "Database Administartion",
						grade: "A"
					},
					{
						id: 8,
						subject: "Object Orientated Analysis & Design",
						grade: "B+"
					},
					{
						id: 9,
						subject: "Information Security",
						grade: "B+"
					},
					{
						id: 10,
						subject: "Financial Management",
						grade: "B+"
					},
					{
						id: 11,
						subject: "Networking 1 & 2",
						grade: "A"
					}
				],
				thirdYear: [
				{
						id: 1,
						subject: "Web Design & Development 2",
						grade: "B+"
				},
				{
						id: 2,
						subject: "Advanced Databases",
						grade: "A"
				},
				{
						id: 3,
						subject: "Networking 3",
						grade: "A"
				},
				{
						id: 4,
						subject: "Operating Systems",
						grade: "B+"
				},
				{
						id: 5,
						subject: "Innovation & Entreprise",
						grade: "B"
				},
				{
						id: 1,
						subject: "Cloud Services & Distributed Computing",
						grade: "B+"
					}
				],
				firstYear: [
				{
						id: 1,
						subject: "Datbase Fundamentals",
						grade: "A"
					},
					{
						id: 2,
						subject: "Operating Systems Fundamentals",
						grade: "B+"
					},
					{
						id: 3,
						subject: "Statistics",
						grade: "A"
					},
					{
						id: 4,
						subject: "Social Media Communications",
						grade: "A"
					},
					{
						id: 5,
						subject: "Object Orientated Analysis",
						grade: "B+"
					},
					{
						id: 6,
						subject: "Computer Architecture",
						grade: "A"
					},
					{
						id: 7,
						subject: "Software Developement",
						grade: "A"
					},
					{
						id: 8,
						subject: "Discrete Maths",
						grade: "A"
					},
					{
						id: 9,
						subject: "Business Information Systems",
						grade: "A"
					},
					{
						id: 10,
						subject: "Web & User Interfaces",
						grade: "A"
					}
				],
				thirdYear: [
				{
						id: 1,
						subject: "Web Design & Development 2",
						grade: "B+"
				},
				{
						id: 2,
						subject: "Advanced Databases",
						grade: "A"
				},
				{
						id: 3,
						subject: "Networking 3",
						grade: "A"
				},
				{
						id: 4,
						subject: "Operating Systems",
						grade: "B+"
				},
				{
						id: 5,
						subject: "Innovation & Entreprise",
						grade: "B"
				},
				{
						id: 1,
						subject: "Cloud Services & Distributed Computing",
						grade: "B+"
					}
				],
				thirdYearGreen: [
				{
						id: 1,
						subject: "Windows Programming",
						grade: "Distinction"
					},
					{
						id: 2,
						subject: "Computer Networks",
						grade: "Distinction"
					},
					{
						id: 3,
						subject: "Web Design",
						grade: "Merit"
					},
					{
						id: 4,
						subject: "Computer Architecture",
						grade: "Distinction"
					}
				],
				secondYearGreen: [
				{
						id: 1,
						subject: "CompTIA A+ Certification",
						grade: "Passed with 93% in Final Exam"
					}
					
				],
				firstYearGreen: [
				{
						id: 1,
						subject: "PC Hardware",
						grade: "Distinction"
					},
					{
						id: 2,
						subject: "Operating Systems",
						grade: "Distinction"
					},
					{
						id: 3,
						subject: "PC Software",
						grade: "Merit"
					},
					{
						id: 4,
						subject: "User Design",
						grade: "Distinction"
					}
				]
			};
		});