<?php
require 'database.php';

// Get inputted form data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  
  // Validate.
  if(trim($request->title)=== '' || trim($request->name)=== '')
  {
    return http_response_code(400);
  }

  $title = mysqli_real_escape_string($db, trim($request->title));
  $name = mysqli_real_escape_string($db, trim($request->name)); 

  $sql = "ALTER TABLE answers";
  $answer = [];

  mysqli_query($db, "SELECT * FROM answers");
  $numofcols = ( mysqli_field_count($db) ) - 3;


  for($i = $numofcols; $i < count($request->answers); $i += 1){

	$index = $i + 1;
	$sql = $sql." ADD COLUMN `answer_{$index}` VARCHAR(200) NOT NULL";

	if($i < count($request->answers) -1){
	  $sql = $sql.',';
	}
        else {
	  $sql = $sql.';'; 
	} 

  }

  for($i = 0; $i < count($request->answers); $i += 1){
	array_push($answer, mysqli_real_escape_string($db, trim($request->answers[$i])));
  }
  
  echo json_encode($sql);


  $db -> query($sql);
  $sql = '';
  $sql = "INSERT INTO answers (`id`, `name`, `title`";

  for($i = 0; $i < count($answer); $i += 1){
	$index = $i + 1;
	$sql = $sql.", `answer_{$index}`";
  }

  $sql = $sql.") VALUES (null, '$name', '$title'";

  for($i = 0; $i < count($answer); $i++){
	$sql = $sql.", '{$answer[$i]}'";
  }

  $sql = $sql.")";

  if($db->query($sql))
  {
    http_response_code(201);
    $answer = [
        'name' => $name,
        'title' => $title,
    ]; 

    for($i = 0; $i < count($answer); $i += 1){
	$index = $i + 1;
    	$a = "answer_{$index}";
    	$answer[$a] = "{$answer[$i]}";
    }

    $answer['id'] = mysqli_insert_id($db);

    echo($sql);
    echo json_encode($answer);
  }
  else 
  {
    http_response_code(422);
  }

}

?>
 
