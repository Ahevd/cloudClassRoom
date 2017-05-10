$(function() {
	//左侧菜单点击事件
	$("#content .con_center .center_cen .left_menu ul li").click(function() {
		$(this).siblings().removeClass("index_li");
		$(this).addClass("index_li");
		var num = $("#content .con_center .center_cen .left_menu ul li").index($(this)[0]);
		switch(num) {
			case 0:
				$("#content .con_center .center_cen .right_content .my_class").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_class").show();
				break;
			case 1:
				$("#content .con_center .center_cen .right_content .my_stu").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_stu").show();
				break;
			case 2:
				$("#content .con_center .center_cen .right_content .my_plan").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_plan").show();
				break;
			case 3:
				$("#content .con_center .center_cen .right_content .my_ans").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_ans").show();
				break;
			case 4:
				$("#content .con_center .center_cen .right_content .my_order").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_order").show();
				break;
			case 5:
				$("#content .con_center .center_cen .right_content .my_money_card").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_money_card").show();
				break;
			case 6:
				$("#content .con_center .center_cen .right_content .my_care").siblings().hide();
				$("#content .con_center .center_cen .right_content .my_care").show();
				break;
		}
	});
	//管理按钮点击事件
	$("#content .con_center .center_cen .right_content .my_class .p_title p .bt_manage").click(function(){
		var bt_text = $(this).text();
		if(bt_text == "管理"){
			$(this).text("完成");
			$("#content .con_center .center_cen .right_content .my_class .class_show_infos ul li .delete_bt").show();
		}else{
			$(this).text("管理");
			$("#content .con_center .center_cen .right_content .my_class .class_show_infos ul li .delete_bt").hide();
		}
	});
	//删除课程点击事件
	$("#content .con_center .center_cen .right_content .my_class .class_show_infos ul li .delete_bt").click(function(){
		$('#det_content').text("你确定要放弃学习该门课程吗？放弃后将删除学习进度！");
		$('.ui.small.modal').modal('show');
		$('.ui .actions .positive').click(function(){
		});
	});
	
	//删除订单点击事件
	$("#content .con_center .center_cen .right_content .my_order .class_show_infos .form_demo .delete_order").click(function(){
		$('#det_content').text("确定删除该订单记录？");
		$('.ui.small.modal').modal('show');
		$('.ui .actions .positive').click(function(){
		});
	});
})