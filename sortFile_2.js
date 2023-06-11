var fs = require('fs');
const spawn = require('child_process').spawn;
let fileName = process.argv[2];
let destPath = process.argv[3];

const sort = spawn('sort',  [fileName]);
const writer = fs.createWriteStream(destPath, { encoding: "utf8" });


sort.stdout.on('data', function (data) {
  writer.write(data)
});

sort.on('exit', function (code) {
    if (code) console.log(code); //if some error
    writer.end();
    console.log(process.cpuUsage())
  });