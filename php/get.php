
<?php
require_once('config.inc.php');
// $tid = is_set_param('tid');
$tid = $_GET["tid"];
$sql = "SELECT name FROM `objects` WHERE `id` = '$tid'"; 
mysqli_select_db($con, $dbname);
$result=mysqli_query($con,$sql);
// echo $result;
// $row=mysqli_fetch_row($result);
$row=mysqli_fetch_object($result);
// echo $row;
$response = array('status'=>'0','msg'=>'failed','data'=>'');
$data = array();
if($result){
    $response['data'] = $row;
    $response['status'] = '2';
    $response['msg'] = 'success';
}
// echo json_encode($response);
echo json_encode($response,JSON_UNESCAPED_UNICODE);
?>