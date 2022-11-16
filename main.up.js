const mode = document.getElementById("mode");
const body = document.getElementById("body");
const night = document.getElementById("night");
const light = document.getElementById("light");
const update_loader = document.getElementById("update_loader");
function to_dark() {
  body.classList.add("bg-black");
  body.classList.add("!text-gray-200");
  night.classList.add("hidden");
  light.classList.remove("hidden");
  localStorage.setItem("mode", "dark");
}
function to_light() {
  body.classList.remove("bg-black");
  light.classList.add("hidden");
  body.classList.remove("!text-gray-200");
  night.classList.remove("hidden");
  localStorage.setItem("mode", "light");
}

var check_mode = localStorage.getItem("mode");
if (check_mode == "dark") {
  to_dark();
} else {
  to_light();
}

data_post = [
  { 0: "still no updates !" },
  { 1: "Sunmori 13 November uploaded to Google drive !" },
];
data_color = [{ 0: "green" }, { 1: "blue" }];
data_warn = [{ 0: "success!" }, { 1: "info!" }];

var content_list = "";
var x = data_post.length;
var xm = x - 1;
for (let i = 0; i < data_post.length; i++) {
  content_list += `<div class="boxs bg-${data_color[xm][xm]}-200 text-${data_color[xm][xm]}-900 h-40 p-5"><p><b>${data_warn[xm][xm]} </b>${data_post[xm][xm]}</p></div>`;
  update_loader.innerHTML = content_list;
  xm--;
}
