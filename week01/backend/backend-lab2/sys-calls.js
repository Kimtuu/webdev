const fs = require("fs");
const os = require("os");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File ", data);
});

fs.writeFile("output.txt", "Hello World!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully");
});

console.log("OS hostname:", os.hostname());
console.log("OS platform:", os.platform());
console.log("OS cpus:", os.cpus());
const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

fs.writeFile(
  "output.txt",
  hostname + " " + platform + " " + JSON.stringify(cpus),
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("OS File written successfully");
  }
);


/**
 * os operations are synhronous so they will be executed first
 * fs operations are asynchronous so they will be executed during whole program execution
 * 
 */