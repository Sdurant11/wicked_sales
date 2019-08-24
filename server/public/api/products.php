
<?php

require_once('functions.php');
set_exception_handler('error_handler');
startup();

require_once('db_connection.php');

  if (!$conn) {
    die('Connect Error: ' . mysqli_connect_error());
  }

if (empty($_GET['id'])) {
  $whereClause = "";
} else {
    if (is_numeric($_GET['id']) ){
      $whereClause = " WHERE id={$_GET['id']} ";
    } else {
      die("Id needs to be a number");
    }
}

$query = "SELECT * FROM `products`" . $whereClause;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception("Connect failed: ". mysqli_connect_error());
}

$output = [];

while ($row = $result->fetch_assoc()) {
  array_push($output, $row);
}

$json_output = (json_encode($output));
print($json_output);




// $output = file_get_contents('dummy-products-list.json');
// print($output);

?>
