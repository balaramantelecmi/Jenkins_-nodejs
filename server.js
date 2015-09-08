var express=require('express'),
   app=express(),
   http=require('http'),
   server=http.createServer(app);





  app.get('/',function(req,res){
    res.send('yes ');  });




 server.listen(1234);
