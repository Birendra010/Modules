//*********exports************** */

simpleMsg='Hi  bro'

const log = function (msg) { 
    console.log(msg);
};


// module.exports.log=log;
// module.exports.simpMsg=simpleMsg;


module.exports={log,simpleMsg}