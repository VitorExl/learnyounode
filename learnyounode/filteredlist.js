let fs = require('fs');
let path = require('path');

let dir = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(dir, (err, list)=>{
    if(err){
        console.log("Erro");
    } else {
        for(let f = 0; f < list.length; f++){
            if (path.extname(list[f]) === extension) {
                console.log(list[f]);
            }
        }
    }
})