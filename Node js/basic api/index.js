const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end("Home");
    }
    else if(req.url=="/api")
    {
        fs.readFile('api.json','utf-8',(err,data)=>{
            const obj=JSON.parse(data);
            res.writeHead(200,{"Content-type":"application/json"})
            res.write(obj[0].name);
            res.end(data);
        })
    }
    else
    {
        res.writeHead(404);
        res.end("Something went wrong");
    }
});
server.listen(8000,'127.0.0.1');
