data_name = [
  { 0: "//Google drive" },
  { 1: "//Facebook" },
  { 2: "//Instagram" },
  { 3: "//Instagram" },
  { 4: "//Instagram" },
  { 5: "//twitter" },
  { 6: "//github" },
];
data_link = [
  {
    0: "https://drive.google.com/drive/folders/1Lr3VZcPGfObxwygOG448vq_5UrFPdSbS",
  },
  { 1: "https://facebook.com/daire.it" },
  { 2: "https://instagram.com/dei.terada" },
  { 3: "https://instagram.com/de_fotograp" },
  { 4: "https://instagram.com/road_archives" },
  { 5: "https://twitter.com/03ii00" },
  { 6: "https://github.com/dai-re/" },
];

const list_loader = document.getElementById("list_loader");
var content_list = "";
for (let i = 0; i < data_name.length; i++) {
  content_list += `<li class="w-afull flex justify-center items-center h-11 border brder-gray-600 mx-auto hover:text-red-600 hover:bg-gray-200" id="list${i}"><a href="${data_link[i][i]}" class="text-center font-bold" target="_blank">${data_name[i][i]}</a></li>`;
  list_loader.innerHTML = content_list;
}

const mode = document.getElementById("mode");
const body = document.getElementById("body");
const night = document.getElementById("night");
const light = document.getElementById("light");
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
