<?php
$email = $_POST['email'];
$affiliate = "40x5051";
$url = "https://wd.supracrm.com/api/v2/accounts-by-email?email=" . $email . "&affiliate_id=40x70345";
$token = "TCM05-MR5D4-CY85P-MAY22";

$headers = array(
    "token:" . $token,
    "Content-Type: application/x-www-form-urlencoded",
);
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
print_r($resp);


?>

