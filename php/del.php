<?php
	require_once('config.inc.php');
	$tid = is_set_param('tid');
	$sql = "DELETE FROM `objects` WHERE `objects`.`id` =$tid LIMIT 1 ;"; 
	mysqli_select_db($con, $dbname );
	$result=mysqli_query($con,$sql);
	mysqli_close($conn);
	$response = array('status'=>'0','msg'=>'failed','data'=>'');
	$data = array();
	if($result){
		$response['data'] = $id;
		$response['status'] = '2';
		$response['msg'] = 'success';
	}
	echo json_encode($response);
?>