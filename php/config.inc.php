<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpw = '123456';
$dbname = 'ject';
$con=mysqli_connect($dbhost ,$dbuser , $dbpw);
mysqli_query($con, "SET NAMES 'UTF8'");
header("Cache-Control: no-cache, must-revalidate");

    if (empty($_COOKIE['ject'])){
        $user = "匿名";
    }else{
        $user = $_COOKIE['ject'];
    }
// echo $user;
    $ip = getenv("REMOTE_ADDR");
// 获取url参数值
// function is_set_param($param){
// 	$current_url = $_SERVER["QUERY_STRING"];
// 	$arr = explode('&',$current_url);
// 	$value = '';
// 	foreach ($arr as $k=>$v) {
// 	$left_c = explode('=',$v);
// 	if ($left_c[0] == $param) {
// 	$value = $left_c[1];
// 	break;
// 	}
// 	}
// 	return $value;
// 	}
// 中文字符编码
    function phpescape($str){
        $sublen=strlen($str);
        $reString="";
        for ($i=0;$i<$sublen;$i++){
            if(ord($str[$i])>=127){
                $tmpString=bin2hex(iconv("UTF-8","ucs-2",substr($str,$i,2)));
    
                if (!eregi("WIN",PHP_OS)){
                    $tmpString=substr($tmpString,2,2).substr($tmpString,0,2);
                 }
                $reString.="%u".$tmpString;
                $i++;
             } else {
                $reString.="%".dechex(ord($str[$i]));
             }
         }
        return $reString;
    }
?>
