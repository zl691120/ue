//倒计时
lastTime();
lastT.timer = setInterval(lastTime,1000)
function lastTime() {
	var nowTime = new Date();
	var targetTime = new Date(2017,1,1,0,0,0);	 //设定未来固定时间
	var t = Math.floor((targetTime-nowTime)/1000);	//毫秒转换为秒	
	var day = Math.floor(t/86400)	
	var hour =   Math.floor(t%86400/3600)         
	var minute = Math.floor(t%86400%3600/60)
	var second = t%60;	
	function addZero(a) {
		if(a<=9){
			a = '0'+ a;
		}else{
			a = '' + a ; 
		}
		return a;
	}
	lastT.innerHTML =  addZero(day) + '<span>天</span>' +  addZero(hour) + '<span>时</span>' +  addZero(minute) + '<span>分</span>' +  addZero(second) +'<span>秒</span>';
	if(t <= 0){
		clearInterval(div.timer);
		div.innerHTML =  '00天00时00分00秒';
	}
}


//轮播图
var box = $('#switch')
var aUl = $('ul',box)[0]
var iWidth = parseInt(getStyle(box,'width'))
var allLi = $('li',box)
var len = allLi.length
var n = 0 ; 
var timer = null ;
//开定时器
timer = setInterval(function(){
	n++;
	n = n == len ? 0 : n ;
	aUl.style.left = -iWidth*n +'px';
},2000)
//鼠标移入  清定时器
box.onmouseover = function (){
	clearInterval(timer);
}
//鼠标移开  开定时器
box.onmouseout = function (){
	timer = setInterval(function(){
		n++;
		n = n == len ? 0 : n ;
		aUl.style.left = -iWidth*n +'px';
	},2000)
}


