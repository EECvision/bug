const checkExtension = (id, src, callback) => {
  let e = new Image();
  e.src = "chrome-extension://" + id + "/" + src;
  console.log("e.src: ", e.src);
  (e.onload = () => callback(1)), (e.onerror = () => callback(0));
};

let link =
  "chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/content_script/inpage.js";

// "src" must be included to "web_accessible_resources" in manifest.json
checkExtension(
  "bfnaelmomeimhlpmgjnjophhpkkoljpa",
  "content_script/inpage.js",
  (ok) => {
    console.log("Phantom: %s", ok ? "installed" : "not installed");
  }
);

checkExtension(
  "bhlhnicpbhignbdhedgjhgdocnmhomnp",
  "images/checkmark-icon.png",
  (ok) => {
    console.log("ColorZilla: %s", ok ? "installed" : "not installed");
  }
);

checkExtension(
  "kkilomkmpmkbdnfelcpgckmpcaemjcdh",
  "phishing.html",
  (ok) => {
    console.log("AdBlock: %s", ok ? "installed" : "not installed");
  }
); 

fetch(
  "chrome-extension://kkilomkmpmkbdnfelcpgckmpcaemjcdh/phishing.html"
).then((res) => {
  console.log("hello");
});
