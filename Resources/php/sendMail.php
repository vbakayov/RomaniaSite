<?php





 function sendFormMail(){

      require_once('../../www/php/PHPMailerAutoload.php');

      // Check if the "Sender's Email" input field is filled out
      $mail = new PHPMailer(); // create a new object
      $mail->CharSet = 'UTF-8';
      $email=$_POST['vemail'];
      $name= $_POST['vname'];

      $message = $_POST['msg'];
      $name2 = '???:'. $name . "\r\n";
      $subject = 'Message';
     print("Hello World");

     $mail->IsSMTP(); // enable SMTP
      $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
      $mail->SMTPDebug = false;
      $mail->do_debug = 0;
      $mail->SMTPAuth = true; // authentication enabled
      $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
      $mail->Host = "smtp.gmail.com";
      $mail->Port = 465; // or 587
      $mail->IsHTML(true);
      $mail->Username = "blaivDummy@gmail.com";
      $mail->Password = "garderob"; //parola
      $mail->Sender= "blaivDummy@gmail.com";

      $mail->AddReplyTo( $email, $name);
      $mail->SetFrom("useremail@gmail.com", $name);
      $mail->Subject =  $subject;
      $mail->Body =    $message;
      $mail->AddAddress("blaiv@abv.bg"); //destination address
       if(!$mail->Send())
          {
          return "Error in MailSend: " . $mail->ErrorInfo;
          }
          else
          {
          return "The message was send successfully!";
          }
}

echo header('Content-type: text/plain; charset=utf-8');
echo  sendFormMail();


?>

