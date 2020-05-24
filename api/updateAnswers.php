<?php
require 'database.php'; 

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if((trim($request->title))=== '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $id = mysqli_real_escape_string($db, (int)$_GET['id']);
  $title = mysqli_real_escape_string($db, trim($request->title));

  $sql = "UPDATE answers SET `title`='$title'";

  for($i = 0; $i < count($request->answers); $i++){
	$index = $i + 1;
	$sql = $sql.", `answer_${index}`='{$request->answers[$i]}'"; 
  }

  $sql = $sql." WHERE `id` = '{$id}' LIMIT 1";

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