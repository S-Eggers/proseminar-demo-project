let menu = document.getElementById("barTopMenu");
let li = document.createElement("li");
li.id = "nav_dark_mode";
let a = document.createElement("a");
a.title = "Switch to Dark Mode";
let img = document.createElement("img");
img.classList.add("headericon", "original",
    "icon-role-navigation", "icon-shape-seminar");
img.src = "/assets/images/icons/blue/add.svg";
a.append(img);
let br = document.createElement("br");
a.append(br);
let div = document.createElement("div");
div.classList.add("navtitle");
div.innerText = "Dark Mode";
a.append(div);
li.append(a);
menu.append(li);