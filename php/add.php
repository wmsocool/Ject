<?php
require_once('config.inc.php');
// echo file_get_contents("php://input");
$str = $_POST['str'];
// $str = is_set_param('str');
// echo $str;
if($str){
$sql = "INSERT INTO `objects` (`id` ,`name` ,`v_time` ,`tag` ,`status` ,`user` ,`count` ,`type` )VALUES (NULL , '$str', now(), '', '0', 'wmsocool', '0', '')";
mysqli_select_db($con, $dbname);
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
// echo json_encode($response,JSON_UNESCAPED_UNICODE);
}
?>