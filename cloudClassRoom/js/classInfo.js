$(function() {
	/*五星评价点击事件*/
	$("#content #c_description .cd_right .evaluate .evaluate_content .grade .stars .five_stars i").click(function(){
		$(this).siblings().removeClass("empty");
		$(this).nextAll().addClass("empty");
		$(this).removeClass("empty");
	});
});