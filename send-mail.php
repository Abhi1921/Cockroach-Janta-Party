<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$formType = isset($data['formType']) ? $data['formType'] : 'Form Submission';
$senderEmail = isset($data['email']) ? $data['email'] : 'no-reply@cockroachjantapartywale.com';
$senderName = isset($data['name']) ? $data['name'] : 'Website Visitor';

// Mailtrap Sandbox Credentials
$smtpHost = 'sandbox.smtp.mailtrap.io';
$smtpPort = 2525;
$smtpUser = 'fe5cbbbebe3582';
$smtpPass = '6316826f241f20';

$fieldsHtml = '';
if (is_array($data)) {
    foreach ($data as $key => $value) {
        if ($key !== 'formType') {
            $valStr = is_array($value) ? implode(', ', $value) : $value;
            $fieldsHtml .= '<tr><td style="padding:10px;border:1px solid #e2e8f0;font-weight:bold;background:#f8fafc;width:32%;">' . htmlspecialchars(str_replace('_', ' ', $key)) . '</td><td style="padding:10px;border:1px solid #e2e8f0;">' . htmlspecialchars($valStr) . '</td></tr>';
        }
    }
}

$subject = "[CJP Notification] New $formType from $senderName";
$message = '
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
  <div style="background: #9f1239; color: #ffffff; padding: 16px 20px; font-size: 18px; font-weight: bold;">🚀 CJP New Submission: ' . htmlspecialchars($formType) . '</div>
  <div style="padding: 20px;">
    <p>A new form submission was received on cockroachjantapartywale.com:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px;"><tbody>' . $fieldsHtml . '</tbody></table>
  </div>
</div>';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: CJP Website <no-reply@cockroachjantapartywale.com>\r\n";
$headers .= "Reply-To: $senderEmail\r\n";

// Raw Socket SMTP connection to Mailtrap
$socket = @fsockopen($smtpHost, $smtpPort, $errno, $errstr, 10);
if ($socket) {
    fgets($socket, 512);
    fputs($socket, "EHLO " . gethostname() . "\r\n");
    fgets($socket, 512);
    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 512);
    fputs($socket, base64_encode($smtpUser) . "\r\n");
    fgets($socket, 512);
    fputs($socket, base64_encode($smtpPass) . "\r\n");
    fgets($socket, 512);
    fputs($socket, "MAIL FROM: <no-reply@cockroachjantapartywale.com>\r\n");
    fgets($socket, 512);
    fputs($socket, "RCPT TO: <admin@cockroachjantapartywale.com>\r\n");
    fgets($socket, 512);
    fputs($socket, "DATA\r\n");
    fgets($socket, 512);
    fputs($socket, "Subject: $subject\r\n$headers\r\n$message\r\n.\r\n");
    fgets($socket, 512);
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    echo json_encode(["success" => true, "message" => "Mailtrap email sent via PHP SMTP!"]);
} else {
    mail("admin@cockroachjantapartywale.com", $subject, $message, $headers);
    echo json_encode(["success" => true, "message" => "Form submission processed!"]);
}
?>
