<?php
require 'database.php';

// Get inputted form data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  
  // Validate.
  if(trim($request->title)=== '')
  {
    return http_response_code(400);
  }

  $title = mysqli_real_escape_string($db, trim($request->title)); 

  $sql = "ALTER TABLE surveys";
  $question = [];

  mysqli_query($db, "SELECT * FROM surveys");
  $numofcols = ( mysqli_field_count($db) ) -2;


  for($i = $numofcols; $i < count($request->questions); $i += 1){

	$index = $i + 1;
	$sql = $sql." ADD COLUMN `question_{$index}` VARCHAR(200) NOT NULL";

	if($i < count($request->questions) -1){
	  $sql = $sql.',';
	}
        else {
	  $sql = $sql.';'; 
	} 

  }

  for($i = 0; $i < count($request->questions); $i += 1){
	array_push($question, mysqli_real_escape_string($db, trim($request->questions[$i])));
  }
  
 
  echo json_encode($sql);


  $db -> query($sql);
  $sql = '';
  $sql = "INSERT INTO surveys (`id`, `title`";

  for($i = 0; $i < count($question); $i += 1){
	$index = $i + 1;
	$sql = $sql.", `question_{$index}`";
  }

  $sql = $sql.") VALUES (null, '$title'";

  for($i = 0; $i < count($question); $i++){
	$sql = $sql.", '{$question[$i]}'";
  }

  $sql = $sql.")";

  if($db->query($sql))
  {
    http_response_code(201);
    $survey = [
        'title' => $title,
    ]; 

    for($i = 0; $i < count($question); $i += 1){
	$index = $i + 1;
    	$q = "question_{$index}";
    	$survey[$q] = "{$question[$i]}";
    }

    $survey['id'] = mysqli_insert_id($db);

    echo($sql);
    echo json_encode($survey);
  }
  else 
  {
    http_response_code(422);
  }

}

?>
 
