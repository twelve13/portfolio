console.log("hello");

var nameLetter = $(".name-letter");
var letterO = $(".o");
var letterL = $(".l");
var about = $(".about");
var projects = $(".projects");
var studii = $(".studii");
var studiiBlurb = $(".studii-blurb")
var endangered = $(".endangered");
var endangeredBlurb = $(".endangered-blurb");
var simon = $(".simon");
var simonBlurb = $(".simon-blurb");

about.hide();
projects.hide();

endangeredBlurb.hide();
simonBlurb.hide();

studii.css("color", "white")

letterO.on("click", function(){
	letterO.hide();
	about.show(2000);
	about.css("font-size", "300%");
	about.css("width", "800px");

});

letterL.on("click", function(){
	letterL.hide();
	projects.show(2000);
});

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