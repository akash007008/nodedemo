var express=require('express');
var app=express();

app.get('/about/:title',function(req,res){
	t=req.params.title;
	res.render('index.ejs',{title:t});
});
console.log('Server up');
app.listen(3000);