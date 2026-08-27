
<?php
error_reporting(E_ERROR | E_PARSE);
$datafile = ".progress.bin";
$data = file_get_contents($datafile);
$parseddata = unserialize($data);

$key = $_GET['key'];
$value = $_GET['value'];

if ($key && $value) {
  //echo "Setting " . $key . " to " . $value;
  $parseddata[$key] = $value;
  file_put_contents($datafile, serialize($parseddata));
} else if ($key) {
  echo $parseddata[$key];
}
?>
