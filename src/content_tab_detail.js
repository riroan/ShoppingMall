$(document).ready(function(){
	$(".select_box > div").click(function(){
		var tab_id = $(this).attr("data-tab");
		$(".select_box > div").removeClass("on");
		$(".select_box > div").addClass("off");
		$(".tab_content").removeClass("current");
					
		$(this).removeClass("off");
		$(this).addClass("on");
		$("#"+tab_id).addClass("current");
	});
});