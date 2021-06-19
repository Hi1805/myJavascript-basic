let rq = require('request');
rq('https://randomuser.me/api/',(err,res,body)=>{
    if (err)
        throw err;
    console.log(res);
    //in ra body nhận được
    console.log(body);
  });