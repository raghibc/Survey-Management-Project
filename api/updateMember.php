<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if((trim($request->firstName))=== '' || (trim($request->lastName))=== '' ||
	  (trim($request->dob))=== '' || (trim($request->position))=== '' ||
	  (trim($request->email))=== '' || (trim($request->phone))=== '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $id = mysqli_real_escape_string($db, (int)$_GET['id']);
  $firstName = mysqli_real_escape_string($db, trim($request->firstName));
  $lastName = mysqli_real_escape_string($db, trim($request->lastName));
  $dob = mysqli_real_escape_string($db, trim($request->dob));
  $position = mysqli_real_escape_string($db, trim($request->position));
  $email = mysqli_real_escape_string($db, trim($request->email));
  $phone = mysqli_real_escape_string($db, trim($request->phone));

  // Update.
  $sql = "UPDATE members SET `firstName`='$firstName',`lastName`='$lastName', `dob`='$dob', `position`='$position',
	`email`='$email', `phone`='$phone' WHERE `id` = '{$id}' LIMIT 1";

  if($db->query($sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

?>