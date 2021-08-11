//   DOM読み込み
//-------------------------------------------------//
const nav = document.getElementById("hamburger_nav");
const hamCheckBox = document.getElementById("hamburger_checkbox");

const navTop = document.getElementById("nav_top");
const navAbout = document.getElementById("nav_about");
const navNews = document.getElementById("nav_news");
const navForm = document.getElementById("nav_form");

// チェクボックスに変化があったときの関数
function checkBox() {
  if (hamCheckBox.checked) {
    nav.classList.add("show");
    hamburger_icon.src = "./assets/svgs/menu_close.svg";
  } else {
    nav.classList.remove("show");
    hamburger_icon.src = "./assets/svgs/menu_open.svg";
  }
}

//navメニューがクリックされた時
function clickNav() {
  nav.classList.remove("show");
  hamCheckBox.checked = false;
  checkBox();
}

navTop.addEventListener("click", () => clickNav());
navAbout.addEventListener("click", () => clickNav());
navNews.addEventListener("click", () => clickNav());
navForm.addEventListener("click", () => clickNav());
