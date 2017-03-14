(function() {

	var app = angular.module('devBlog', [ ]);

	app.controller('ViewController', function() {
		this.contents = articles;
		this.item = articles[0];
	});

	var articles = [
		{
			name: "Front-End Developer Digest",
			body:  "This is a page where developers can express their thoughts or ideas about various topics ranging from current \
					web standards and best practices to anecdotes about landing a first gig.  Anyone even mildly interested in tech is \
					encouraged to follow and comment!  Many developer blogs feature useful posts that include tips, tricks, and techniques \
					for incorporating cool effects into websites using a bit of clever CSS and JavaScript in tandem.  One of my first goals \
					will be to point users towards these resources and create an archive.",
			date:  "",
			id: 1
		},
		{
			name: "Making components modular",
			body:  "Hello faithful followers!  We all know that in development of all sorts, modularity is often favored. \
			        The reasons for this are clear:  Once a project becomes very large, it becomes tedious to rehash the exact \
			        same format for certain components that have already been created.  It is preferred to have a method more \
			        sophisticated than copy-paste that allows us to effortlessly control all components that are in a similar \
			        category.  For that reason, in this edition we will focus on the various approaches developers take to making \
			        components (of web applications in particular) more modular.  Read on for a list of current techniques, and \
			        please feel free to comment or make any suggestions of any components that you think are missing. ",
			date:  "December 22, 2016",
			id: 2
		},
		{
			name: "Adding Article Snippets",
			body: "One feature that I've noticed is worth adding in many blogs is the separation of article content.  Visually, \
			the inclusion of snippets of larger pieces of work can be accomplished by separating the content into their own blocks.  \
			A url to an index including the full article can be included at the bottom of each snippet to enhance the readability of \
			the main page without compromising the accessibility of the details displayed.",
			date: "August 15, 2016",
			id: 3
		}
	];

	console.log('Initialization of app.js succeessful!');

})();