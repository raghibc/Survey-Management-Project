<?php

include 'database.php';

$answer = [];

$sql = "SELECT * FROM answers";

if($result = $db->query($sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $answer[$i]['id']		= $row['id'];
    $answer[$i]['name']		= $row['name'];
    $answer[$i]['title']	= $row['title'];
    $answer[$i]['answer_1']	= $row['answer_1'];
    $answer[$i]['answer_2']	= $row['answer_2'];
    $answer[$i]['answer_3']	= $row['answer_3'];
    $i++;
  }

  echo json_encode($answer);
}
else
{
  http_response_code(404);
}

?>