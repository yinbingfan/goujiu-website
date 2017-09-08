$(function(){
	//手机号
	$("#phone").blur(function(){
		//后台验证
		$.ajax({ 
			type:"POST",
			url:"regista.php",
			data:{
					"userPhone":$("#phone").val()
				},
			success:function(str){
				if(str=="1"){
				alert(str);
				$(".pno").html("用户已存在请重新选择");
				}else{
				$(".pno").html("√");
				
				}
			}
		});
		
		
		
		
		
		
		//正则验证
		if(checkAll("userCallNum",$("#phone")[0].value)==true){
			$(".tiltephone")[0].innerHTML="手机号输入正确";	
			$(".tiltephone").css("color","red");
		}else{
			$(".tiltephone")[0].innerHTML="请输入正确的手机号";
			$(".tiltephone").css("color","green");
		}if($("#phone")[0].value==""){
			$(".tiltephone")[0].innerHTML="请输入手机号";	
			$(".tiltephone").css("color","blue");
		}	
	});
		
	$("#phone").focus(function(){
		if($("#phone")[0].value==""){
			$(".tiltephone")[0].innerHTML="请输入手机号";	
			$(".tiltephone").css("color","blue");
		}	
	});
	
//	密码
	$("#password").blur(function(){

		//正则验证
		if(checkAll("userPass",$("#password")[0].value)==true){
			$(".pass")[0].innerHTML="密码设置正确";	
			$(".pass").css("color","red");
		}else{
			$(".pass")[0].innerHTML="输入的密码格式不正确";
			$(".pass").css("color","green");
		}if($("#password")[0].value==""){
			$(".pass")[0].innerHTML="请输入密码";	
			$(".pass").css("color","blue");
		}	
	});
		
	$("#password").focus(function(){
		if($("#password")[0].value==""){
			$(".pass")[0].innerHTML="请输入密码";	
			$(".pass").css("color","blue");
		}	
	});
//	确认密码
	
	$("#passw").blur(function(){
		if($("#passw")[0].value==$("#password")[0].value||$("#password")[0].value!=""||$("#password")[0].value!=null){
			$(".pawor")[0].innerHTML="两次输入密码一致";	
			$(".pawor").css("color","red");
		}else{
			$(".pawor")[0].innerHTML="两次输入的密码不一致";
			$(".pawor").css("color","green");
		}if($("#passw")[0].value==""){
			$(".pawor")[0].innerHTML="请再输入密码";	
			$(".pawor").css("color","blue");
		}	
	});
		
	$("#passw").focus(function(){
		if($("#passw")[0].value==""){
			$(".pawor")[0].innerHTML="请再次输入密码";	
			$(".pawor").css("color","blue");
		}	
	});
	
//	验证码
$(".huanzhang").click(function(){
	var arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","j","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var arr3 = [];
	var count =0 ;
	for(var i=0;i<arr.length;i++){
		var index = parseInt(Math.random()*arr.length);
		  arr3.push(arr[index]);
		  count++;
		  if(count==4){
		  break;
	}
	}
	var str = "";
	for(var i in arr3){
		str = str+arr3[i];
	}
	$(".huangyiz")[0].innerHTML=str;
	$(".huangyiz").css({
		fontSize:"20px",
		color:"red",
		fontWeight:800,
		display:" inline-block",
		width: "60px",
		height: "40px",
		lineHeight: "40px",
		border:"1px solid #ddd",
		backgroundColor:"pink"
	});
	
	
});
//校验码	
$(".mobli").click(function(){
	var arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","j","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var arr3 = [];
	var count =0 ;
	for(var i=0;i<arr.length;i++){
		var index = parseInt(Math.random()*arr.length);
		  arr3.push(arr[index]);
		  count++;
		  if(count==4){
		  break;
	}
	}
	var str = "";
	for(var i in arr3){
		str = str+arr3[i];
	}
	$("#xiaoyan")[0].value=str;
	$("#xiaoyan").css({
		fontSize:"18px",
		color:"red",
		backgroundColor:"pink"
	});
	
});
	
	
	//提交按钮
	$("#subm").click(function(){					 
		$.ajax({ 
			type:"GET",
			url:"red.php",
//			asyn:true,
			data:{
					"userPhone":$("#phone").val(),
					"userPass":$("#password").val()
				},
			success:function(){
						//保存cookie
					
						//保存cookie
						setCookie("userPhone",$("#phone").val(),14)
						setCookie("userPass",$("#password").val(),14)
						location.href="Login.html";
						
						
							
			}
		});
		
	});
		
		
});
	
function setCookie(key,sValue,iDay){
    var date=new Date();
    date.setDate(date.getDate()+iDay);
    document.cookie=key+'='+escape(sValue)+'; expires='+date.toGMTString();
    
}


	/*$("#subm").click(function(){					 
		$.ajax({ 
			type:"POST",
			url:"regista.php",
			data:{
					"userPhone":$("#phone").val()
//					"userPass":$("#password").val()
				},
			success:function(str){
				if(str=="1"){
						//保存cookie
						setCookie("userPhone",$("#phone").val(),14)
						setCookie("userPass",$("#password").val(),14)
						location.href="Login.html";
					}else{
						alert("用户名或者密码错误，登录失败！");
					}
			}
		});
		
	});	*/			 












