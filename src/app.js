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

		placeText("name", basics.name);
		placeText("username", basics.username);
		placeText("about", basics.summary);
		placeText("address", basics.region);
		placeText("email", basics.email);

		// placeText("company", work.company);
		// placeText("position", work.position);
		// placeText("startDate", work.startDate);
		// placeText("summary", work.summary);

		// let work = user.work;
		// for (let i = 0; i < arr.length; i++) {
		//     const element = arr[i];
		//     document.getElementById("about1", work.summary);
		// }

		placeHtml("picture", `<img src="${basics.picture}"/>`);

		const work = user.work;
		for (let i = 0; i < work.length; i++) {
			placeHtml(
				"work",
				`<p class="text-sm mb-1 text-gray-800">${
					!work[i].summary ? "" : work[i].summary
				}</p>
				<div class="text-sm">
					<span class="text-gray-500">Company : </span>
					<span class="font-medium text-gray-800">${work[i].company}</span>
				</div>
				<div class="text-sm">
					<span class="text-gray-500">Role : </span>
					<span class="font-medium text-gray-800">${work[i].position}</span>
				</div>`
			);
		}
		// placeHtml("text-2", work[0].company);
		// placeHtml("text-3", work[0].position);

		let skills = user.skills;
		for (let i = 0; i < skills.length; i++) {
			placeHtml(
				"skills",
				`<tr>
            <td class="ltr:pr-2 rtl:pl-2 rtl:text-left ltr:text-right truncate"><span
                    class="font-medium text-sm">${skills[i].name} : </span></td>
            <td valign="bottom" class="w-full">
                <div
                    class="rounded-full h-1 bg-white-100 bg-gray-200 overflow-hidden mb-2">
                    <div class="bg-purple-500 h-full" style="width: ${skills[i].level}%;"></div>
                </div>
            </td>
        </tr>`
			);
		}
	});
}
displayUser("chadidi");

// function myFunction() {
// 	document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function (event) {
// 	if (!event.target.matches(".dropbtn")) {
// 		var dropdowns = document.getElementsByClassName("dropdown-content");
// 		var i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains("show")) {
// 				openDropdown.classList.remove("show");
// 			}
// 		}
// 	}
// };
