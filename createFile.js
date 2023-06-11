const fs = require('fs');

const countOfStrokes = 1e7 //укажите количество генерируемых строк
const file = fs.createWriteStream('./big.file');
for(let i=0; i<=countOfStrokes; i++) {
  file.write('Lorem ipsum dolor sit amet, \ndolor sit on you, \nSedsedsedsedsed. \nme Gusta \n');
}
 
file.end();