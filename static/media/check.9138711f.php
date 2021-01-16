<!-- <?php 
	// print_r($_POST);
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];

	$error = '';
	if(trim($name) == '')
		$error = 'enter your name';
	elseif(trim($email) == '')
		$error = 'enter your name';
	elseif(trim($phone) == '');
		$error = 'enter your nomber';
	

	if(error != ''){
	echo $error;
	exit;
	}
		
	$subject =" =?utf8-8?B?".base64_encode("text message")."?=";
	$headers ="From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";


	mail('lisa15.08patrikeevna@gmail.com',$subject, $message, $headers);

	header('Location: /index.php');
	

 ?>
 -->
 <?php
if(count($_POST) > 0){
  //header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$addr =  htmlspecialchars($_SERVER["REMOTE_ADDR"]);
//$file =($_POST['file']);
//$check = is_array($_POST['check']) ? $_POST['check'] : array();
//$check = implode (', ', $check );

 //проверка письма
 if($name === '' || $email === '' || $tel === '') {
     $msg = 'заполните все поля';
 }
 elseif (!preg_match("/[0-9a-z]+@[a-z]/",$email)) {
     $msg = 'введите коректный адрес';
 }
 else {
   
  

$refferer = getenv('HTTP_REFERER');
$myemail = " lisa15.08patrikeevna@gmail.com" ;// e-mail администратора
 //$myemail = "lisa15.08patrikeevna@gmail.com, gikalov@const.ltd,    const@const.ltd ,  gikalov@const.ltd , roman.gikalov@gmail.com ";

// Отправка письма администратору сайта

$tema = "Письмо админу";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
айпи: $addr<br>
Источник (ссылка): $refferer
";

// mail($myemail, $tema, $message_to_myemail, "From: konstanta <mx1.hosting.reg.ru.> \r\n Reply-To: Sitename \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" ); заменить и разкоментировать


$myemail = $email;
if(mail($myemail, $tema, $message_to_myemail, "From: konstanta < lisa15.08patrikeevna@gmail.com> \r\n Reply-To: konstanta \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" )) {
  $msg = 'Спасибо! Мы вам перезвоним.';
}
else {
  $msg = 'Ой, что-то пошло не так :(';
}
// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td> <td>$addr</td>  <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);
}
return $msg;
?>
