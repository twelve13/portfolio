console.log("hello")

var letterO = $(".o");
var about = $(".about")

about.hide();

letterO.on("click", function(){
	letterO.hide();
	about.css("font-size", "300%");
	about.show(2000);
});