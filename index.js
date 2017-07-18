// index.js

var express = require('express');
var app = express();

// ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드입니다.
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

// query를 통해서 이름을 받는 코드입니다. 모든 query들은 req.query에 저장됩니다.
// ejs파일을 사용하기 위해서는 res.render 함수를 사용해야 하며, 첫번째 parameter로 ejs의 이름을, 두번째 parameter로 ejs에서 사용될 object를 전달합니다. res.render함수는 ejs를 /views 폴더에서 찾으므로 views폴더의 이름은 변경되면 안됩니다.
app.get("/hello", function(req,res){
 res.render("hello", {name:req.query.nameQuery});
});

// route parameter를 통해 이름을 받는 코드입니다. 콜론(:)으로 시작되는 route은 해당 부분에 입력되는 route이 req.params에 저장됩니다.
app.get("/hello/:nameParam", function(req,res){
 res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function(){ //3000번 포트를 사용합니다.
 console.log('Server On!'); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
