//***************import*****************

const msg = require('./index')

const msg1 = require('./index');

msg1.log('Hello World');

console.log(msg.simpleMsg)

// *****************************path modules*******************
const path = require('path');

const filePath = path.parse(__filename);
const dirPath = path.parse(__dirname);

console.log(filePath);
console.warn(dirPath)

console.log(process.env.PATH)

 const delimiter=process.env.PATH.split(path.delimiter);
 console.log(delimiter)

const extname= path.extname('./app.txt')
console.log(extname)

//******path format*******

console.log(path.format({
root:'/',
dir:'/home/ri-dev/Desktop/Node',
ext:'.js',
name:'app'
}))

//*********path join **************
console.log(path.join('/abc','def','ghi'))

// //**********************os modules*********************
const os = require('os');

// // *******totalMemory********
const totalMemory = os.totalmem();
console.log(`totalMemory ${totalMemory}`)

// //*************** */ freeMemory******

const freeMemory= os.freemem();
console.log(`freeMemory ${freeMemory}`)

console.log(os.cpus())
console.log(JSON.stringify(os.EOL))

console.log("hi my name is " + os.EOL + "birendra ") // line break

console.log(os.arch())
console.log(os.endianness())  // output ==> LE

try {
    console.log(os.getPriority())
} catch (err) {
console.log(errMsg + " :error message "+ err)
}

// **home directory method
console.log(os.homedir());

// ** hostname method  */
console.log(os.hostname());

//********************file system modules***************

const fs = require("fs");
const files= fs.readdirSync('./');
console.log(files);

fs.readdir('./' , function(err,files){
    if(err)
    console.log('Error',err);
    else console.log('Result' , files)
})

fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("==> " + data.toString());

 });

//**********make directory using fs and path */

fs.mkdir(path.join(__dirname, 'testdir'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});

//*****file content deleted */

fs.truncate('./test.txt', function() {
    console.log('File Content Deleted')
});

//**** *// Rename the file/

fs.renameSync('newtest.txt', 'test.text');  // first prameter old file name and second prameter new file name


//************Remove directory *********

fs.rmdir((__dirname, "testdir"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directory deleted  successfully!");
});




