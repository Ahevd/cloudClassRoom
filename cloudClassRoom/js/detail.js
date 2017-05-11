$(function() {
	//评论面板点击事件
	$("#content #c_description .cd_left .left_center2 .center2_center .discuss_demo .dis_content .dis_menu .r_menu .cmt").click(function() {
		var div_status = $(this).parent().parent().next(".comment_input").css("display");
		if(div_status == 'none') {
			$(this).parent().parent().next(".comment_input").show();
		}else{
			$(this).parent().parent().next(".comment_input").hide();
		}
	});
	//取消点击
	$("#content #c_description .cd_left .left_center2 .center2_center .discuss_demo .dis_content .comment_input .cancel").click(function(){
		$(this).parent().parent().hide();
	});
	//确定点击
	$("#content #c_description .cd_left .left_center2 .center2_center .discuss_demo .dis_content .comment_input .save").click(function(){
		$(this).parent().parent().hide();
	});
	
	//文本编辑菜单点击事件
	$("#content #c_description .cd_left .left_center2 .center2_center .com_editor .editor_info .content .tit_menu a").click(function(){
		var cls = $(this).attr('class');
		switch (cls){
			case 'bold':
			document.execCommand("bold");
				break;
			case 'italic':
			document.execCommand("italic");
				break;
			case 'image':
				break;
		}
	});
})