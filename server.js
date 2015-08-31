var express=require('express'),
   app=express(),
   http=require('http'),
   server=http.createServer(app);





  app.get('/',function(req,res){
<<<<<<< HEAD
    res.send('hello world  murugan Pandian');
=======
    res.send('hello world  murugan hi this is');
>>>>>>> b94fa175ebb9724217d0b331102588b3f0fd5a4f
  });




 server.listen(1313);
