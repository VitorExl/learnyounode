let inicio = 2;
let total = 0;
for(let f = inicio; f < process.argv.length; f++){
	total += Number(process.argv[f]);
}
console.log(total)