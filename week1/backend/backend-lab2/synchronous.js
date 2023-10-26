const fs = require("fs");
const os = require("os");

fs.readFileSync("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("SYNC Error reading file:", err);
    return;
  }
  console.log("Synchronous read: ", data);
});

fs.writeFileSync(
  "output.txt",
  "Syncronously written data for testing purposes.",
  (err) => {
    if (err) {
      console.error("SYNC Error writing file:", err);
      return;
    }
    console.log("Synchronous write successful");
  }
);

console.log("hostname: ", os.hostname());
console.log("platform: ", os.platform());
console.log("cpus: ", os.cpus());

const info = `Hostname: ${os.hostname()} \nPlatform: ${os.platform()} \n CPUs: ${JSON.stringify(os.cpus(), null, 2)}`;

try {
  fs.writeFileSync("output.txt", info);
  console.log("Synchronous write successful");
} catch (err) {
  console.error("SYNC Error writing file:", err);
}
