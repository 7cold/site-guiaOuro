<?php
function sendPushNotification($to = '', $data = array())
{
    $apiKey = 'AIzaSyDqxaEnKsdbRLDIkpBg5dQ7-OExOGYzY9U';
    $fields = array('to' => $to, 'notification' => $data);

    $headers = array('Authorization: key=' . $apiKey, 'Content-Type: application/json');

    $url = 'https://fcm.googleapis.com/fcm/send';

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

    $result = curl_exec($ch);
    curl_close($ch);

    return json_decode($result, true);
}

$to = "/topics/allDevices";

$data = array(
    'body' => 'Nova Notícia'
);

print_r(sendPushNotification($to, $data));
