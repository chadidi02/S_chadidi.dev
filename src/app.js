import { getUser } from "./api/user";

function placeText(id, text) {
	var q = document.getElementById(id);
	if (q) q.innerHTML = text;
}

function placeHtml(id, html) {
	var q = document.getElementById(id);
	if (q) q.insertAdjacentHTML("beforeend", html);
}

function displayUser(username) {
	getUser(username).then((user) => {
		let basics = user.basics;

		placeText("headline", basics.headline);
		placeText("name", basics.name);
		placeText("about", basics.summary);
		placeHtml("picture", `<img src="${basics.picture}"/>`);

		/*== Skills ==*/

		// let skills = user.skills;
		// for (let i = 0; i < skills.length; i++) {
		// 	placeHtml(
		// 		"skills",
		// 		``
		// 	);
		// }
	});
}
displayUser("chadidi");
