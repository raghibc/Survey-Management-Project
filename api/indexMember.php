<?php

include 'database.php';

$members = [];

$sql = "SELECT * FROM members";

if($result = $db->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $members[$i]['id']		= $row['id'];
    $members[$i]['firstName']	= $row['firstName'];
    $members[$i]['lastName']	= $row['lastName'];
    $members[$i]['dob']		= $row['dob'];
    $members[$i]['position']	= $row['position'];
    $members[$i]['email']	= $row['email'];
    $members[$i]['phone']	= $row['phone'];
    $i++;
  }

  echo json_encode($members);
}
else
{
  http_response_code(404);
}

?>