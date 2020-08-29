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
		placeText("about_name", basics.name);
		placeText("about", basics.summary);
		// placeText("email", basics.email);
		// placeText("phone", basics.phone);

		placeHtml(
			"portfolio_1",
			`   <div class="bg mx-auto rounded-lg p-6" style="width: 300px;">
					<img class="h-32 w-32 rounded-full m-auto" src="${basics.picture}">
					<div class="text-center">
						<h2 class="text-lg py-2">${basics.name}</h2>
						<div class="text-indigo-500 py-1 text-sm">Front-end web development</div>
						<div class="text-gray-400 pb-1">${basics.email}</div>
						<div class="text-gray-400 pb-1">${basics.phone}</div>
						<div class="text-center text-xl text-white mt-5">
                            <span class="hover:text-indigo-400"><i class="fab fa-facebook m-3"></i></span>
                            <span class="hover:text-indigo-400"><i class="fab fa-instagram m-3"></i></span>
                            <span class="hover:text-indigo-400"><i class="fab fa-twitter m-3"></i></span>
                            <span class="hover:text-indigo-400"><i class="fab fa-linkedin-in m-3"></i></span>
                        </div>
					</div>
				</div>`
		);

		placeHtml(
			"portfolio_2",
			`   <div class="bg mx-auto rounded-lg p-6" style="width: 300px;">
					<img class="h-32 w-32 rounded-full m-auto" src="${basics.picture}">
					<div class="text-center">
						<h2 class="text-lg py-2">${basics.name}</h2>
						<div class="text-indigo-500 py-1 text-sm">Front-end web development</div>
						<div class="text-gray-400 pb-1">${basics.email}</div>
						<div class="text-gray-400 pb-1">${basics.phone}</div>
						<div class="text-center text-xl text-white mt-5">
                            <span class="hover:text-indigo-400"><i class="fab fa-facebook m-3"></i></span>
                            <span class="hover:text-indigo-400"><i class="fab fa-instagram m-3"></i></span>
                            <span class="hover:text-indigo-400"><i class="fab fa-twitter m-3"></i></span>
                            <span class="hover:text-indigo-400"><i class="fab fa-linkedin-in m-3"></i></span>
                        </div>
					</div>
				</div>`
		);

		/*== Skills ==*/

		let skills = user.skills;
		placeHtml(
			"skills",
			` 
				<div class=" mt-12 px-5">
					<span class=" text-2xl text-indigo-500 font-bold mr-5">SKILLS: </span>
					<span
						class="border-indigo-500 border hover:bg-red-400 text-gray-200 font-bold py-2 px-4 rounded-full">${skills[0].name}</span>
					<span
						class="border-indigo-500 border hover:bg-blue-400 text-gray-200 font-bold py-2 px-4 rounded-full">${skills[1].name}</span>
					<span
						class=" border-indigo-500 border hover:bg-yellow-500 text-gray-200 font-bold py-2 px-4 rounded-full">${skills[2].name}</span>

				</div>`
		);
	});
}
displayUser("chadidi");
