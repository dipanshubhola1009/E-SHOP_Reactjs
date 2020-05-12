<?php

$servername="localhost";
$dbusername="root";
$dbpassword="";
$dbname="login";

$conn= new mysqli($servername,$dbusername,$dbpassword,$dbname);


$Name = $_POST['Name'];
$Phone = $_POST['Phone'];
$Email = $_POST['Email'];
$Sex = $_POST['Sex'];
$Size = $_POST['Size'];
$password=$_POST['password'];
$sql="INSERT INTO signupdb (Name,Phone,Email,Sex,Size,password) VALUES('$Name','$Phone','$Email','$Sex','$Size','$password')";

$conn->query($sql);

$sqlcheck="SELECT password FROM signupdb WHERE Email = '$Email'";
$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="refresh" content="0.000,url = http://localhost:3000/ui/<?php echo $Email ?>">
</head>
<body>

</body>
</html>