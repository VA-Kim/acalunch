var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('Hello World!');
});

app.listen(3000, function(){ //3000번 포트를 사용합니다.
 console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
