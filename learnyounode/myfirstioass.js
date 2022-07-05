let fs = require('fs');
fs.readFile(process.argv[2], (err, data)=>{
	if(data){
		let strings = data.toString();
		let arrayString = strings.split('\n');
		console.log(arrayString.length -1);
	}
});




