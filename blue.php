<?php
	//1、接收用户的输入（客户端的数据）
	$tel = $_POST['userPhone'];
	$pass= $_POST['userPass'];
	//连接数据库，查询该用户名是否在数据库存在
	//1、连接数据库
	$conn = mysql_connect("localhost","root","root");
	
	if(!$conn){
		die("亲，connect fail");
	}else{
		//echo "connect success";
	}
	
	//2、选择数据库
	mysql_select_db("mydbshuju",$conn);
	
	
	
    
	
	//3、执行SQL语句	
	$sqlStr="select * from inforem where tel='".$tel."'";
    $result = mysql_query($sqlStr,$conn);
    $rowCount = mysql_num_rows($result);
     mysql_close($conn); 
	
	echo $rowCount;
	
	
?>