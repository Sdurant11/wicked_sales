
<?php

require_once('functions.php');
set_exception_handler('error_handler');
startup();

require_once('db_connection.php');

  if (!$conn) {
    die('Connect Error: ' . mysqli_connect_error());
  }

$query = "SELECT * FROM `products`";

$result = mysqli_query($conn, $query);

if (!$result) {
  printf("Connect failed: %s\n", mysqli_connect_error());
  exit();
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
