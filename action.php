<?php

$servername="Localhost";
$dbusername="root";
$dbpassword="";
$dbname="login";

$conn = new mysqli($servername,$dbusername,$dbpassword,$dbname);

function val($data){
	$data = htmlspecialchars($data);
    $data = trim($data);
    $data = stripcslashes($data);
    return $data;
}

$username=val($_POST['username']);
$password=val($_POST['password']);


$sqlinsert = "SELECT password FROM signupdb WHERE Email = '$username'";
$result=$conn->query($sqlinsert);

$followingdata = $result->fetch_assoc();

if(strcmp($password, $followingdata['password'])==0){
	$url="ui/".$username;
}
else{
	$url="usernotfound";
}



$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
    <meta http-equiv="refresh" content="0.000,url = http://localhost:3000/<?php echo $url ?>">
     
</head>
<body>
</body>
</html>