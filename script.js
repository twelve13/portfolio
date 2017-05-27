console.log("hello");
var projects = $(".projects");
var projectsWrapper = $(".projects-wrapper");
var projectsNav = $(".projects-nav");
var about = $(".about");
var projectListing = $("project-listing");
var closeProjects = $(".close-projects");
var aboutWrapper = $(".about-wrapper");
var closeAbout = $(".close-about");
var aboutButton = $(".about-button");
var projectsButton = $(".projects-button");
var contactButton = $(".contact-button");
var nav = $(".nav");
var title = $(".title");


var studii = $(".studii");
var studiiBlurb = $(".studii-blurb")
var endangered = $(".endangered");
var endangeredBlurb = $(".endangered-blurb");
var simon = $(".simon");
var simonBlurb = $(".simon-blurb");
var blurb = $(".blurb");
var final= $(".final");
var aboutListing = $(".about-listing");
var experience = $(".experience");
var nameLetter = $(".name-letter")

var projectsClicked = false;
var aboutClicked = false;


projectsWrapper.hide();
blurb.hide();
aboutWrapper.hide();
closeAbout.hide();



studii.on("click", function(){
	studii.css("color", "white");
	endangered.css("color", "gray");
	simon.css("color", "gray");
	endangeredBlurb.hide();
	simonBlurb.hide();
	studiiBlurb.show();
});

endangered.on("click", function(){
	endangered.css("color", "white");
	studii.css("color", "gray");
	simon.css("color", "gray");
	studiiBlurb.hide();
	simonBlurb.hide();
	endangeredBlurb.show();
})

simon.on("click", function(){
	simon.css("color", "white");
	studii.css("color", "gray");
	endangered.css("color", "gray");
	studiiBlurb.hide();
	endangeredBlurb.hide();
	simonBlurb.show();
})


projectsButton.click(
function() {
	if (projectsClicked === false){

	projects.animate({
		height: "90vh",
		width: "540px",
		top: "-=310px"
	}, 2000)
	projectsWrapper.show();

	// studiiBlurb.show();
	projectListing.show();
	projectsNav.show();
	
	projectsClicked = true;
	aboutButton.hide();
	contactButton.hide();

}
})

	closeProjects.click(function(){
		projects.animate({
		height: "180px",
		width: "32px",
		top: "40px"
	}, 2000)
	projectsWrapper.hide();
	
	projectsClicked = false;
	aboutButton.show();
	contactButton.show();
	});


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
	})