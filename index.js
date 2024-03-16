const path = require("node:path");
const fs = require("node:fs");
let config = {
	timing_fade_opacity: 0.5,
	timing_pop_location: 700,
	styling_closenotif_positioning: "top: 2em; right: 2em;",
	styling_closenotif_colors_background: "#000",
	styling_closenotif_colors_text: "#FFF",
	styling_closenotif_border_thickness: "2.5px",
	styling_closenotif_border_type: "solid",
	styling_closenotif_border_color: "#848484",
	styling_closenotif_padding: "4px",
	styling_imageshow_zIndex: 900,
	styling_imageshow_positioning:
		"top: 20%; bottom: 20%; left: 10%; right: 10%;",
	styling_imageshow_colors_background: "#f5f5f5",
	styling_imageshow_border_thickness: ".2em",
	styling_imageshow_border_type: "solid",
	styling_imageshow_border_color: "currentColor",
	styling_imageshow_border_radius: "0%",
	styling_hlimg_maxwidth: "80%",
	styling_hlimg_maxheight: "100%",
};
const configfile = path.join(__dirname, "./config.json");
if (fs.existsSync(configfile)) {
	const t = fs.readFileSync(configfile, "utf8");
	config = JSON.parse(t);
} else {
	fs.writeFileSync(configfile, JSON.stringify(config));
}
switch (process.argv[2]) {
	case "body":
		console.log(`${process.argv[3]}<script id="hlimg-options" type="application/json">
        ${JSON.stringify(config)}</script>
<script defer type="module" src="/e/hl-img/hl-img.min.js"></script>`);
}
