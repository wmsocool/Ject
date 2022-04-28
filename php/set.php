<?php
require_once('config.inc.php');
$str = is_set_param('str');
	$sql = "UPDATE `objects` SET `name` = $str WHERE `objects`.`id` =$tid LIMIT 1 ;"; 
	mysqli_select_db($con, $dbname );
	$result=mysqli_query($con,$sql);
	$id = mysqli_insert_id($con);
	$response = array('status'=>'0','msg'=>'failed','data'=>'');
	$data = array();
	if($result){
		$response['data'] = $id;
		$response['status'] = '2';
		$response['msg'] = 'success';
	}
	echo json_encode($response);
?>