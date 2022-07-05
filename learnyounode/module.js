let fs = require('fs');
let path = require('path');

module.exports = (dir, extension, callback) => {
    fs.readdir(dir, (err, files) => {  
        let list = [];
        extension = '.' + extension;
        if (err) { return callback(err) };
        files.forEach(function(file) {
            if (path.extname(file) === extension) {
                list.push(file);
            }
        })
    return callback(null, list);
    })

}