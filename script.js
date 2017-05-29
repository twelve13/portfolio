//var nav = $(".nav");

var aboutButton = $(".about-button");
var about = $(".about");
var aboutWrapper = $(".about-wrapper");
var closeAbout = $(".close-about");

var projectsButton = $(".projects-button");
var projects = $(".projects");
var projectsWrapper = $(".projects-wrapper");
var projectsNav = $(".projects-nav");
var projectListing = $("project-listing");
var closeProjects = $(".close-projects");

var contactButton = $(".contact-button");

//var title = $(".title");

var aboutListing = $(".about-listing");
//var experience = $(".experience");
var blurb = $(".blurb");
var studii = $(".studii");
var studiiProject = $(".studii-project")
var endangered = $(".endangered");
var endangeredProject = $(".endangered-project");
var simon = $(".simon");
var simonProject = $(".simon-project");
var final= $(".final");

var nameLetter = $(".name-letter")

var aboutClicked = false;
var projectsClicked = false;

aboutWrapper.hide();
closeAbout.hide();
projectsWrapper.hide();
endangeredProject.hide();
simonProject.hide();


aboutButton.click(function(){
	if (aboutClicked === false){

		about.animate({
			height: "80vh",
			width: "80%",
			top: "-=310px",
		}, 2000)
	
		aboutWrapper.show();
		closeAbout.show();
		
		nameLetter.animate({
			"font-size": "0"
		}, 2000)

		projects.animate({
			height: "0",
			width: "0",
			top: "-=40px"
		}, 2000);

		aboutClicked = true;
	}
});

closeAbout.click(function(){
		about.animate({
		height: "83px",
		width: "54px",
		top: "82px"
	}, 2000)

	aboutWrapper.hide();
	closeAbout.hide();

	nameLetter.animate({
		"font-size": "1500%"
	}, 2000)

	projects.animate({
		height: "180px",
		width: "32px",
		top: "+=40px"
	}, 2000)

	aboutClicked = false;	
});


projectsButton.click(function() {
	if (projectsClicked === false){

		projects.animate({
			height: "80vh",
			width: "80%",
			top: "-=250px"
		}, 2000)

		projectsWrapper.show();
		studiiProject.show();
		studii.css("color", "white");
		projectListing.show();
		projectsNav.show();
	//closeProjects.show();

		nameLetter.animate({
			"font-size": "0"
		}, 2000)

		about.animate({
			height: "0",
			width: "0",
			top: "-=40px",
		}, 2000);
		projectsClicked = true;
	//aboutButton.hide();
	//contactButton.hide();

}
});

closeProjects.click(function(){
		projects.animate({
		height: "180px",
		width: "32px",
		top: "40px"
	}, 2000)
	projectsWrapper.hide();
	
	nameLetter.animate({
		"font-size": "1500%"
	}, 2000)

	about.animate({
		height: "83px",
		width: "54px",
		top: "+=40px"
	}, 2000)

	endangered.css("color", "gray");
	simon.css("color", "gray");
	endangeredProject.hide();
	simonProject.hide();
	projectsClicked = false;
	//aboutButton.show();
	//contactButton.show();
});

studii.on("click", function(){
	studii.css("color", "white");
	endangered.css("color", "gray");
	simon.css("color", "gray");
	endangeredProject.hide();
	simonProject.hide();
	studiiProject.show();
});

endangered.on("click", function(){
	endangered.css("color", "white");
	studii.css("color", "gray");
	simon.css("color", "gray");
	studiiProject.hide();
	simonProject.hide();
	endangeredProject.show();
})

simon.on("click", function(){
	simon.css("color", "white");
	studii.css("color", "gray");
	endangered.css("color", "gray");
	studiiProject.hide();
	endangeredProject.hide();
	simonProject.show();
})
