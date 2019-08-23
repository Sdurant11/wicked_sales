
<?php

require_once ('db_connection.php');

  if (!$conn) {
    die('Connect Error: ' . mysqli_connect_error());
  }

require_once('functions.php');
set_exception_handler ('error_handler');

$output = file_get_contents('dummy-products-list.json');
print($output);

?>
