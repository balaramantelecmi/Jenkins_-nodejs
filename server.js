var express=require('express'),
   app=express(),
   http=require('http'),
   server=http.createServer(app);





  app.get('/',function(req,res){

    res.send('hai balaraman malathi  ');  });
   



 server.listen(1234);
