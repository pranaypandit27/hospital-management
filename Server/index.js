const fs = require('fs');
const http = require('http')
const server = http.createServer((req,res)=>{
    res.end("server created")
});
server.listen('3000');
// fs.writeFile('textfl.txt','hiii there',function(err){
//     if(err) console.log(err);
//     else console.log("done");
// });

// fs.appendFile('textfl.txt','i am pranay',function(err){
//     if(err) console.log(err);
//     else console.log("done");
// });

// // fs.copyFile('textfl.txt','textfm.txt',function(err){
// //     if(err) console.log(err);
// //     else console.log("done");
// // });
// setTimeout(() => {
    
//     fs.unlink('textfl.txt',function(err){
//         if(err) console.log(err);
//         else console.log("done");
//     });
// }, 30000);