///*****************Event Modules*********** */

const EventEmitter =  require('events');
const emitter = new EventEmitter();
//register a couple of callback

emitter.on('massageLogged',()=>{
    console.log('first name - Birendra')
})
emitter.on('massageLogged',()=>{
    console.log('last name - Kumar ')
})
emitter.emit('massageLogged')



///registering  for the event with callback parameters 

emitter.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`)
})
emitter.emit('checkpage',200,'ok')



const http = require('http')

const server = http.createServer(function(req,res){
    if(req.url==='/'){
        res.end('hello from the home sides ');
    }else if(req.url === '/about'){
        res.end('hello from the aboutUs sides')
    }else if(req.url == '/contact'){
        res.end('hello from the contactUs sides ')
    }else{
        res.writeHead(404 , {"Content-type":"text/html"}); //inspact 
        res.end("<h1>page does not exits</h1>")
        
    }

  
})
server.listen('3000',()=>{
    console.log('listening to the port no 3000...')
});

