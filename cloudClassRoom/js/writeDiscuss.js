$(function() {
	$("#content #c_description .cd_left .left_center2 .center2_center .class_replenish p a").click(function() {
		if($(this).find("i").is(".right")) {
			$(this).find("i").removeClass("right");
			$(this).find("i").addClass("down");
			$("#content #c_description .cd_left .left_center2 .center2_center .class_replenish .com_editor").fadeIn();
		}else{
			$(this).find("i").removeClass("down");
			$(this).find("i").addClass("right");
			$("#content #c_description .cd_left .left_center2 .center2_center .class_replenish .com_editor").fadeOut();
		}
	});
});