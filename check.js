const out = require("child_process").execSync("node hello.js").toString();
if (!out.includes("GH-600")) {
  console.error("FAIL: hello.js must print GH-600");
  process.exit(1);
}
console.log("PASS");
