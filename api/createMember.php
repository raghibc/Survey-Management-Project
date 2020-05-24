<?php
require 'database.php';

// Get inputted form data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  
  // Validate.
  if(trim($request->firstName)=== '' || (trim($request->lastName))=== '' ||
	  (trim($request->dob))=== '' || (trim($request->position))=== '' ||
	  (trim($request->email))=== '' || (trim($request->phone))=== '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $firstName = mysqli_real_escape_string($db, trim($request->firstName));
  $lastName = mysqli_real_escape_string($db, trim($request->lastName));
  $dob = mysqli_real_escape_string($db, trim($request->dob));
  $position = mysqli_real_escape_string($db, trim($request->position));
  $email = mysqli_real_escape_string($db, trim($request->email));
  $phone = mysqli_real_escape_string($db, trim($request->phone));

  // Create.
  $sql = "INSERT INTO members (`id`,`firstName`,`lastName`,`dob`, `position`, `email`, `phone`) 
	VALUES (null, '$firstName','$lastName', '$dob', '$position', '$email', '$phone')";

  if($db->query($sql))
  {	
    http_response_code(201);
    $member = [
        'firstName' => $firstName,
        'lastName' => $lastName,
	'dob' => $dob,
	'position' => $position,
	'email' => $email,
	'phone' => $phone,
	'id' => mysqli_insert_id($db)
    ]; 

    echo $sql;
    echo json_encode($member);
 }
  else {
    http_response_code(422);
  }

}

?>