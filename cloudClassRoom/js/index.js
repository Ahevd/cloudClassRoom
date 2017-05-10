/**
 * Created by ZYY on 2016/12/21.
 */
$(function() {
	//登录点击事件
	$("#header #head #head_right #h_unlogin .l_txt" +
		",.login_box .regist_content form .login_sbt p a" +
		",.login_box .login_title .title_tab ul .login_info a").click(function() {
		doLogin();
	});
	//注册点击事件
	$("#header #head #head_right #h_unlogin .r_txt" +
		",.login_box .login_content form .login_sbt p a" +
		",.login_box .login_title .title_tab ul .regist_info a").click(function() {
		doRegist();
	});
	//弹出面板关闭
	$(".login_box .login_close").click(function() {
		$(".login_shadow").fadeOut(500);
		$(".login_box").fadeOut(300);
	});

	function doLogin() {
		$(".login_shadow").fadeIn(200);
		$(".login_box .regist_content").hide();
		$(".login_box .login_title .title_tab ul .regist_info a ").removeClass("index_a");
		$(".login_box .login_title .title_tab ul .login_info a ").addClass("index_a");
		$(".login_content").show();
		$(".login_box").fadeIn(500);
	}

	function doRegist() {
		$(".login_shadow").fadeIn(200);
		$(".login_box .login_content").hide();
		$(".login_box .login_title .title_tab ul .login_info a ").removeClass("index_a");
		$(".login_box .login_title .title_tab ul .regist_info a ").addClass("index_a");
		$(".regist_content").show();
		$(".login_box").fadeIn(500);
	}
	
	//右侧关注、下载事件，有缺陷……
	var timer = null;
	$("#header #head #head_nav .assort").hover(function() {
		timer = setTimeout(function() {
			$("#header #head #head_nav .assort #a_pop").show();
		}, 500);
	}, function() {
		clearTimeout(timer);
		$("#header #head #head_nav .assort #a_pop").hide();
	});
	
	$("#header #head #head_right #h_care").hover(function() {
		timer = setTimeout(function() {
			$("#header #head #head_right #h_care #c_drop").show();
		}, 500);
	}, function() {
		clearTimeout(timer);
		$("#header #head #head_right #h_care #c_drop").hide();
	});
	
	$("#header #head #head_right #h_download").hover(function() {
		timer = setTimeout(function() {
			$("#header #head #head_right #h_download #down_content").show();
		}, 500);
	}, function() {
		clearTimeout(timer);
		$("#header #head #head_right #h_download #down_content").hide();
	});
	
	$("#header #head #head_right #h_login .login_a").hover(function() {
		timer = setTimeout(function() {
			$("#header #head #head_right #l_menu").show();
		}, 500)
	}, function() {
		clearTimeout(timer);
		$("#header #head #head_right #l_menu").hide();
	});
	
});