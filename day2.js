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

http.createServer(function(req,res){
    if(req.url==='/'){
        res.write('first request');
    }

    if(req.url==='/api'){
        res.write('second request')
    }
    res.end();
}).listen('3000');

