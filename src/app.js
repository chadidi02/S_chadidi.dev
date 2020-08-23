import axios from "axios";
import "regenerator-runtime/runtime.js";

async function getUser(username) {
	const { data } = await axios.get(
		`https://www.fevrok.dev/api/v1/portfolio/${username}/?api_key=du4iwvio46`
	);

	console.log(data);
	return data;
}

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
		placeText("summary", basics.summary);
		placeText("address", basics.location.address);

		let skills = user.skills;
		for (let i = 0; i < skills.length; i++) {
			console.log(skills[i].name);
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
