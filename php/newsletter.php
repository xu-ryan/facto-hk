<?php

// 获取form表单提交的邮件地址
$email = $_POST['email'];

// 将邮件地址存储到文件中
file_put_contents('newsletter.txt', $email . "\n", FILE_APPEND);

// 返回订阅结果
$data = array(
  'success' => true,
  'redirect' => '/thank-you/'
);
$json = json_encode($data);

// 设置 HTTP 响应头
header('Content-Type: application/json');

// 输出 JSON 格式的数据
echo $json;

// 终止脚本执行
exit();

?>