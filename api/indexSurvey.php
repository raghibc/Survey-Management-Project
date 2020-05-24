<?php

include 'database.php';

$surveys = [];

$sql = "SELECT * FROM surveys";

if($result = $db->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $surveys[$i]['id']		= $row['id'];
    $surveys[$i]['title']	= $row['title'];
    $surveys[$i]['question_1']	= $row['question_1'];
    $surveys[$i]['question_2']	= $row['question_2'];
    $surveys[$i]['question_3']	= $row['question_3'];
    $i++;
  }

  echo json_encode($surveys);
}
else
{
  http_response_code(404);
}

?>