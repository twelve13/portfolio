console.log("hello");
var projects = $(".projects");


var about = $(".about");
var projectListing = $("project-listing");


var studii = $(".studii");
var studiiBlurb = $(".studii-blurb")
var endangered = $(".endangered");
var endangeredBlurb = $(".endangered-blurb");
var simon = $(".simon");
var simonBlurb = $(".simon-blurb");
var blurb = $(".blurb");
var final= $(".final");
var aboutListing = $(".about-listing");


studii.hide();
endangered.hide();
simon.hide();
final.hide();

blurb.hide();
aboutListing.hide();

endangeredBlurb.hide();
simonBlurb.hide();




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

projects.click(function() {


	projects.animate({
		height: "90vh",
		width: "540px",
		top: "-=310px"
	}, 2000)
	studiiBlurb.show();
	projectListing.show();
	studii.show();
	endangered.show();
	simon.show();
	final.show();
})

about.click(function(){


	about.animate({
		height: "90vh",
		width: "540px",
		top: "-=310px"
	}, 2000)
	aboutListing.show();
})