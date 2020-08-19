$(document).ready(function(){
	var x = setInterval(slide_image, 4000);
	var i = 1;
	function slide_image() {
		i = i + 1 > $(".control li").length ? 1 : i + 1;
		var path = "url('images/slide" + i + ".jpg')";
		$("#slide").css({"background":path, "background-size" : '100% 100%'});
		$(".on").attr("class","off");
		$(".off").eq(i-1).attr("class","on");
	};
});