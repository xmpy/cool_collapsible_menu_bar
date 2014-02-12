var show_collapse_number = 0;

//init function
$(function(){
	//左边栏收缩
	
	$("#main-nav-left").bind('mouseover',expandLeftSideBar);
	
	$("#main-nav-left").bind('mouseout',collapseLeftSideBar);
	
	$('.panel-collapse').on('show.bs.collapse', function () {
	  	$(this).parent().css('height','auto');
	  	console.log("collapseOne opened");
	  	show_collapse_number += 1;
	  	console.log(show_collapse_number);
	  	
	  	//当一个菜单项展开后，去除整个菜单栏的收缩效果
		if(show_collapse_number > 0){
			$("#main-nav-left").unbind('mouseout',collapseLeftSideBar);
		}
	});
	
	$('.panel-collapse').on('hide.bs.collapse', function () {
	  	//恢复按钮宽度
	  	$(this).parent().css('height','40px');
	  	console.log("collapseOne closed");
	  	show_collapse_number -= 1;
		console.log(show_collapse_number);
	  	
	  	//所有菜单项收缩后，重新绑定菜单栏的收缩效果
	  	if(show_collapse_number <= 0){
			$("#main-nav-left").bind('mouseout',collapseLeftSideBar);
		}
	});
});

function expandLeftSideBar(){
	$(this).addClass("side-nav-expanded").removeClass("side-nav-collapsed");
}

function collapseLeftSideBar() {
	$(this).addClass("side-nav-collapsed").removeClass("side-nav-expanded");
}