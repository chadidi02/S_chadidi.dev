import { getUser } from "../api/user";

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
		/*== portfolio ==*/
		placeHtml(
			"portfolio_1",
			`
			<div class="md:flex-shrink-0">
				<img class="rounded-lg w-48 md:w-64 m-auto" src="${basics.picture}">
			</div>
			<div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left text-gray-600">
				<div class="md:text-2xl text-xl">${basics.name}</div>
				<div class="md:text-base text-sm">@<span>${basics.username}</span></div><br>
				<div class="md:text-base text-sm"><i
						class="fas fa-map-marker-alt mr-2"></i><span>${basics.region}</span>
				</div>
				<div class="md:text-base text-sm"><i
						class="fas fa-envelope mr-2"></i><span>${basics.email}</span>
				</div>
				<div class="md:text-base text-sm"><i
						class="fas fa-phone-alt mr-2"></i><span>${basics.phone}</span></div>
				<div class="md:text-base text-sm"><i class="fas fa-link mr-2"></i><a
						href="https://www.fevrok.com/">${basics.website}</a></div><br>
				<div class="md:text-base text-sm">${basics.headline}</div>
			</div>`
		);
		/*== portfolio end ==*/

		/*== About ==*/
		placeHtml(
			"about-me",
			`
			<div class=" text-left">
				<h1 class="text-2xl title">About me<span class="logo-color">.</span></h1>
				<p class="text-sm px-10 text-gray-600">${basics.summary}</p>
			</div>`
		);
		/*== About end ==*/

		/*== Skills ==*/
		let skills = user.skills;
		placeHtml(
			"skills",
			` <div class="">
				<h1 class="text-2xl title">Skills<span class="logo-color">.</span></h1>
				<div class=" mt-5 px-10">
					<span
						class="border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[0].name}</span>
					<span
						class="border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[1].name}</span>
					<span
						class=" border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[2].name}</span>
					<span
						class=" border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[3].name}</span>
					<span
						class=" border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[4].name}</span>
					<span
						class=" border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[5].name}</span>
					<span
						class=" border-indigo-500 border py-2 px-4 rounded-full inline-block mb-2 items-skills">${skills[6].name}</span>

				</div>
			</div>`
		);
		/*== Skills end ==*/

		/* */

		placeHtml(
			"Profiles",
			`
			<h1 class="text-2xl title">Profiles<span class="logo-color">.</span></h1>
			<div class=" mt-5">
				<ul class="snip1135 flex px-10 text-base">
					<li class="mr-5"><a class="" target="_blank"
							href="https://github.com/chadidi02">GitHub</a></li>
					<li class="mr-5"><a class="" target="_blank"
							href="https://www.linkedin.com/in/schadidi02/">LinkedIn</a>
					</li>
					<li class="mr-5"><a class="" target="_blank"
							href="https://www.instagram.com/s.chadidi02/">Instagram</a>
					</li>
					<li class="mr-5"><a class="" target="_blank"
							href="https://gitconnected.com/chadidi02">Gitconnected</a>
					</li>
				</ul>
			</div>
			`
		);
	});
}
displayUser("chadidi02");
