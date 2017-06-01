var aboutButton = $(".about-button");
var projectsButton = $(".projects-button");
var contactButton = $(".contact-button");

var aboutOuter = $(".about-outer");
var about = $(".about");
var aboutClose = $(".about-close");
var aboutWrapper = $(".about-wrapper");
var aboutListing = $(".about-listing");
var aboutViewer = $(".about-viewer");

var projectsOuter = $(".projects-outer");
var projects = $(".projects");
var projectsClose = $(".projects-close");
var projectsWrapper = $(".projects-wrapper");
var projectsNav = $(".projects-nav");
var projectListing = $("project-listing");
var projectsViewer = $(".projects-viewer");

var contactLink = $(".contact-link");
var email = $(".email");
var resume = $(".resume");
var linkedin = $(".linkedin");
var github = $(".github");

var blurb = $(".blurb");
var studii = $(".studii");
var studiiProject = $(".studii-project")
var endangered = $(".endangered");
var endangeredProject = $(".endangered-project");
var simon = $(".simon");
var simonProject = $(".simon-project");
var final= $(".final");

var aboutClicked = false;
var projectsClicked = false;
var contactClicked = false;

aboutWrapper.hide();
aboutClose.hide();
aboutViewer.hide();
projectsWrapper.hide();
endangeredProject.hide();
simonProject.hide();
projectsViewer.hide();
contactLink.hide();


var aboutExpand = function() {
	aboutViewer.show();

	$("body").animate({
		scrollTop: $(document).height() - $(window).height()
	}, 1000)

	aboutOuter.animate({
		top: "+=60vh",
	}, 1000)

	about.animate({
		height: "80vh",
		width: "900px",
		right: "-450px"
	}, 1000,)
	
	aboutWrapper.show();
	aboutClose.show();
	aboutClicked = true;
};


var aboutShrink = function(){
	about.animate({
		height: "83px",
		width: "54px",
		right: "0px"
	}, 700)

	$("body").animate({
		scrollTop: -$(window).height()
	}, 1000)

	aboutOuter.animate({
		top: "-=60vh",
	}, 1000)

	aboutWrapper.hide();
	aboutClose.hide();
	aboutViewer.hide(2000)
	aboutClicked = false;	
};


var projectsExpand = function() {
	projectsViewer.show(1000);
	
	$("body").animate({
		scrollTop: -$(document).height()
	}, 1000)

	projects.animate({
		height: "80vh",
		width: "900px",
		right: "500px"
	}, 1000,)
	
	projectsOuter.animate({
		top: "-=130vh",
	}, 1000)

	projectsWrapper.show();
	studiiProject.show();
	studii.css("color", "white");
	projectListing.show();
	projectsNav.show();
	projectsClicked = true;
};

var projectsShrink = function(){

	projects.animate({
		height: "180px",
		width: "32px",
		right: "0px",
	
	}, 700)

	$("body").animate({
	scrollTop: $(document).height()
	}, 1500)

	projectsOuter.animate({
		top: "+=130vh",
	}, 1000)

	projectsWrapper.hide();
	projectsViewer.hide(2000)
	endangered.css("color", "gray");
	simon.css("color", "gray");
	endangeredProject.hide();
	simonProject.hide();
	projectsClicked = false;	
};

aboutButton.click(function(){
	if (aboutClicked === false){
		aboutExpand();
	}
});

aboutClose.click(function(){
	aboutShrink();
});

projectsButton.click(function() {
	if (projectsClicked === false){
		projectsExpand();
	}
});

projectsClose.click(function(){
	projectsShrink();
});

contactButton.click(function(){
	if (contactClicked === false){
		email.animate({
		top: "-=36vh",
		}, 1000)
		resume.animate({
		top: "-=27vh",
		}, 1000)
		contactClicked = true
		linkedin.animate({
		top: "-=18vh",
		}, 1000)
		github.animate({
		top: "-=9vh",
		}, 1000)
		contactLink.show(2000);

		contactClicked = true
	}
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
