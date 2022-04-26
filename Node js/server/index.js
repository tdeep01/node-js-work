const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("pikachu server");
    res.end();
})
server.listen(8000,'127.0.0.1');