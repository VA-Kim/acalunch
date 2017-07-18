nodeJS
======

ejs
---

```
* ejs파일을 사용하기 위해서는 res.render 함수를 사용해야 하며, 첫번째 parameter로 ejs의 이름을, 두번째 parameter로 ejs에서 사용될 object를 전달합니다. res.render함수는 ejs를 /views 폴더에서 찾으므로 views폴더의 이름은 변경되면 안됩니다.
```javascript
app.get("/hello", function(req,res){
  res.render("hello", {name:req.query.nameQuery});
});
```
```

MongoDB
=======

몽고DB를 공부해보자.

사용법
------

-	mlab 몽고DB
	-	shell에서 사용하기 mongo ds163672.mlab.com:63672/acalunch -u <dbuser> -p <dbpassword>
	-	환경변수로 사용하기 mongodb://<dbuser>:<dbpassword>@ds163672.mlab.com:63672/acalunch
