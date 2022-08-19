function init(){
	var num = document.getElementById("num");
	num.value=0;
	num.disabled="disabled"; //禁用文本框输入
/*  var n1 = document.getElementById("n1"); 
	n1.onclick=function(){
		alert("123"); } */
	//获取所有的input
	var objButton = document.getElementsByTagName("input");
	var btn_num1;
	var fh;	//符号
	for(var i=0;i<objButton.length;i++){
		objButton[i].onclick=function(){
		if(isNumber(this.value)){
//文本框以前的值+单击的数字 此时前面的num.value是上面的document
			// num.value=(num.value+this.value)*1;
			if(isNull(num.value)){
				num.value=this.value;
			}else{
				num.value=num.value+this.value;
			}
		}else{
			// alert("fei");
			var btn_num=this.value;
			switch (btn_num){
				case "+": //↓ psrseInt(整数)转换为Number(整数+小数)
					btn_num1=Number(num.value);
					num.value=null;
					fh="+";
				break;
				case "-":
					btn_num1=Number(num.value);
					num.value=null;
					fh="-";
					break;
				case "*":
					btn_num1=Number(num.value);
					num.value=null;
					fh="*";
					break;
				case "/":
					btn_num1=Number(num.value);
					num.value=null;
					fh="/";
					break;
				case ".":
					num.value=dec_number(num.value);
					break;
				case "←":
					num.value=back(num.value);
					break;
				case "c":
					num.value="0";
					break;
				case "+/-":
					num.value=sign(num.value);
					break;
				case "=":
					switch(fh){
						case "+":
						  num.value=btn_num1+num.value*1;
						break;
						case "-":
						  num.value=btn_num1-num.value*1;
						break;
						case "*":
						  num.value=btn_num1*num.value*1;
						break;
						case "/":
						//文本框内容默认为字符类型
							if(Number(num.value)==0){
								alert("除数不能为0");
								num.value=0;
							}else{
								num.value=btn_num1/num.value*1;
							}
						break;
					}
					break;
			}
		}
	//this单击是谁就是谁 objButton[i]]
		}
	}
}
//正负号
function sign(n){
	if(n.indexOf("-")==-1){
		n="-"+n;
	}else{//从非第一个字符开始
		n=n.substr(1,n.length);
	}
	// n=Number(n)*-1;
	return n;
}
//退位键
function back(n){
	/*if(!isNull(n)){//如果不等于空
		n=n.substr(0,n.length-1);//字符串截取到总长度减一
	}else{
		n=0;
	}*/
	n=n.substr(0,n.length-1);
	if(isNull(n)){
		n=0;
	}
	return n;
}
//小数点
function dec_number(n){
	if(n.indexOf(".")==-1){ //若不是小数则追加
		n=n+".";
	}
	return n;
}
//验证文本框是否为空或者0
function isNull(n){
	if(n=="0" || n.length==0){
		return true;
	}else{
		return false;
	}
}
function isNumber(n){
//isNaN不能转换为数字:true；可以转换成数字是false
	if(isNaN(n)==false){
		return true;//参数n是数字
	}else{
		return false;//参数n不是数字
	}
//或者return !isNaN(n); 
//如果n是数字 isNaN为false
}
/*
	function num_1_click(){
	var num = document.getElementById("num");
	var n = num.value;
	// if(n=="0"){n="1";}
	//else{n=n+"1"};//字符串拼接
	n=n+"1";//↓↓ *1 影式转换成数值 然后前导零省略
	document.getElementById("num").value=n*1;
*/