
<?php
error_reporting(E_ERROR | E_PARSE);
$dbUrl = getenv('REPLIT_DB_URL');

$key = $_GET['key'];
$value = $_GET['value'];

$options = array(
    CURLOPT_RETURNTRANSFER => true,   // return web page
    CURLOPT_HEADER         => false,  // don't return headers
    CURLOPT_FOLLOWLOCATION => true,   // follow redirects
    CURLOPT_MAXREDIRS      => 10,     // stop after 10 redirects
    CURLOPT_ENCODING       => "",     // handle compressed
    CURLOPT_USERAGENT      => "test", // name of client
    CURLOPT_AUTOREFERER    => true,   // set referrer on redirect
    CURLOPT_CONNECTTIMEOUT => 120,    // time-out on connect
    CURLOPT_TIMEOUT        => 120,    // time-out on response
); 

if ($key && $value) {
  //echo "Setting " . $key . " to " . $value;
   $ch = curl_init($dbUrl);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS,
              $key."=". $value);
  $xml =  curl_exec($ch);
  curl_close($ch);
  echo $xml;
} else if ($key) {
  //echo "Getting " . $key . " ";
  $ch = curl_init($dbUrl."/".$key);
  curl_setopt_array($ch, $options);
  $xml =  curl_exec($ch);
  curl_close($ch);
  echo $xml;
}
?>
