//页面加载和窗口重置执行
$(window).bind("DOMContentLoaded resize",function(){
	var docEl = document.documentElement;
	var docWidth = $(window).width();//获取屏幕宽度
	var baseFont = 20 * (docWidth/320)//获取根字号大小
	if(docWidth<641){
		//把根字号大小给html
		$(docEl).css({"font-size":baseFont + "px"})
	};
})

