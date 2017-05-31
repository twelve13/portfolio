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

aboutWrapper.hide();
aboutClose.hide();
aboutViewer.hide();
projectsWrapper.hide();
endangeredProject.hide();
simonProject.hide();
projectsViewer.hide();


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
	aboutMain.hide(3000)
	aboutClicked = false;	
};


aboutButton.click(function(){
	if (aboutClicked === false){
		aboutExpand();
	}
});

aboutClose.click(function(){
	aboutShrink();
});





var projectsExpand = function() {
	projectsViewer.show(2000);
	
	$("body").animate({
		scrollTop: -$(document).height()
	}, 1000)

	projectsOuter.animate({
		top: "-=130vh",
	}, 2000)

	projects.animate({
		height: "80vh",
		width: "900px",
		right: "450px"
	}, 2000,)
	
	projectsWrapper.show();
	studiiProject.show();
	studii.css("color", "white");
	projectListing.show();
	projectsNav.show();
	projectsClicked = true;
};


projectsButton.click(function() {
	if (projectsClicked === false){
		projectsExpand();
	}
});

projectsClose.click(function(){
		projects.animate({
		height: "180px",
		width: "32px",
		top: "40px"
	}, 2000)
	projectsWrapper.hide();
	

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
