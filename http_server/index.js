const http=require('http')

const requestListener=function requestListener(req,res){
    res.writeHead(200);
    res.end("My server")
}

const server=http.createServer(requestListener);
const port = 8080;
server.listen(port, ()=>{
    console.log(`server is running on port no: ${port}`)
})