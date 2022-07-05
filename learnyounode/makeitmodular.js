const modulo = require('./module');

const dir = process.argv[2]  
const extension = process.argv[3];

modulo(dir, extension, (err, files) => {
    if (err) { return console.log("Erro"); }
    else{
        for(let f = 0; f < files.length; f++){
            console.log(files[f]);
        }
    }    
});


