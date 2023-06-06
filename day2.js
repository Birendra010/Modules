///*****************Event Modules*********** */

const EventEmitter =  require('events');
const emitter = new EventEmitter();

emitter.on('massageLogged',function(){
    console.log('listener called ')
})
emitter.emit('massageLogged')




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

