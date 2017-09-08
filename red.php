<?php
	header("content-type","text/html;charset=utf-8");
	//1、接收用户的输入（客户端的数据）
	$tel = $_GET['userPhone'];
	$pass= $_GET['userPass']
	//连接数据库，查询该用户名是否在数据库存在
	//1、连接数据库
	$conn = mysql_connect("localhost","root","root");
	
	if(!$conn){
		die("亲，connect fail");
	}
	mysql_select_db("mydbshuju",$conn);
	
	
	
	$sqlStr = "insert into inforem(tel,passwor)
              values('".$tel."','".$pass."')";

	mysql_query($sqlStr,$con);
	
	
  
    mysql_close($conn); 
	

?>