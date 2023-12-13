const path = require("path");
const hlimg_config = require(path.join(__dirname, "/config.json"));
switch (process.argv[2]) {
  case "body":
    console.log(`${
      process.argv[3]
    }<script id="hlimg-options" type="application/json">
        ${JSON.stringify(hlimg_config)}</script>
<script defer type="module" src="/e/hl-img/hl-img.min.js"></script>`);
return;
}
