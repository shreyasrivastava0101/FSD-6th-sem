const fs=require('fs').promises;
    async function readfileExample(){
        try{
            const data=await fs.readFile('myfile.txt','utf8');
            console.log('File Content:',data);
        }
        catch(err){
            console.error('Error reading file:',err);
        }
    }
    readfileExample();

    //or with util.promisify(Node.js.8.0.0+)

    const {promisify} = require('util');
    const readFileAsync =promisify(require('fs').readFile);

    async function readwithPromisify(){
        try{
            const data=await readFileAsync('myfile.txt','utf8');
            console.log(data);
        }
        catch(err){
            console.error(err);
        }
    }

    readwithPromisify();
