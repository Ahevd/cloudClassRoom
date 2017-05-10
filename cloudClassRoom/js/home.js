/**
 * Created by ZYY on 2016/12/21.
 */
$(function() {
	//登录点击事件
	$("#header .nav .nav_right ul li a .login" +
		",.login_box .regist_content form .login_sbt p a" +
		",.login_box .login_title .title_tab ul .login_info a").click(function() {
		doLogin();
	});
	//注册点击事件
	$("#header .nav .nav_right ul li a .register" +
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
	//左侧菜单栏悬停事件
	$("#content .cen_up .menus .menus_left ul li").hover(function(){
		$(this).addClass("li_");
		$(this).find(".fade_plane").show();
	},function(){
		$(this).removeClass("li_");
		$(this).find(".fade_plane").hide();
	});
	
});