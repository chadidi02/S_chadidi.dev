import { getUser } from "./api/user";
import home from "./views/home.js";
// import portfolio from "./views/portfolio.js";
// import portfolio from "./views/contact";

let tabcontent = document.querySelector(".tabcontent");
tabcontent.style.display = "block";

const pages = document.querySelectorAll("#menu li");
pages.forEach((page, i) => {
	page.addEventListener(
		"click",
		function () {
			let tabcontent = document.querySelectorAll(".tabcontent");
			tabcontent.forEach((tab) => {
				tab.style.display = "none";
			});

			document.getElementById(`page_${i}`).style.display = "block";
			let current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");

			page.classList.add("active");
		},
		false
	);
});
