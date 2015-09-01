var express=require('express'),
   app=express(),
   http=require('http'),
   server=http.createServer(app);





  app.get('/',function(req,res){
    res.send('hello world  balaraman rool');  });




 server.listen(2233);
