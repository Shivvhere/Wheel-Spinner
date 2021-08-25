let container = document.querySelector(".container");
let menu_btn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}

function showMenu(){
	menu.classList.toggle("hide");
}

menu_btn.addEventListener('click',showMenu);