const fs = require("fs");
const through2 = require("through2");

let fileName = process.argv[2];
let destPath = process.argv[3];

const reader = fs.createReadStream(fileName, { encoding: "utf8" });
const writer = fs.createWriteStream(destPath, { encoding: "utf8" });

const toSort = through2((data, enc, cb) => {
  cb(
    null,
    Buffer.from(
      data
        .toString()
        .split("\n")
        .sort((a, b) => a.localeCompare(b))
        .join("\n")
    )
  );
});

reader.pipe(toSort).pipe(writer);

writer.on('finish', () => {
  console.log(process.cpuUsage())
});