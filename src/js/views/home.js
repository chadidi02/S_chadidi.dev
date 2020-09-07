import { getUser } from "../api/user";
import { placeHtml } from "./place";

function displayUser(username) {
	getUser(username).then((user) => {
		let basics = user.basics;
		placeHtml("name", basics.name);
		placeHtml("email", basics.email);
		placeHtml("phone", basics.phone);
		console.log(basics);

		/*== About ==*/
		placeHtml(
			"about-me",
			`
			<div class="w-full sm:w-1/2">
			<h1 class=" home__about-title title p-10 text-center">
				About Me
			</h1>
		</div>
		<div class="w-full sm:w-1/2" id="about-content">
			<p class="p-10 home__about-content">
				the idea of beauty is the fundamental idea of everything. In the
				world we see only distortions of the fundamental idea, but art, by imagination, may lift
				itself
				to the height of this idea. Art is therefore akin to creation.
			</p>
		</div>
			`
		);
		placeHtml(
			"skills",
			`
		<!-- skills -->
		<div class="w-full sm:w-1/2">
			<div class="px-10 m-auto">
				<!-- skills -->
				<h3 class="home__about-skills-title">Skills.</h3>
				<ul class="skills">
					<li class="skills__item">
						<div class="skills__title">UI &amp; web design</div>
						<div class="skills__value">90%</div>
						<div class="skills__progress"><span style="right:10%;">
								<div class="ui-web"></div>
							</span></div>
					</li>
					<li class="skills__item">
						<div class="skills__title">UX</div>
						<div class="skills__value">70%</div>
						<div class="skills__progress"><span style="right:30%;">
								<div class="ux"></div>
							</span></div>
					</li>
					<li class="skills__item">
						<div class="skills__title">HTML &amp; CSS</div>
						<div class=" skills__value">80%</div>
						<div class="skills__progress"><span style="right:50%;">
								<div class="html-css"></div>
							</span></div>
					</li>
					<li class="skills__item">
						<div class="skills__title">Javascript</div>
						<div class=" skills__value ">30%</div>
						<div class="skills__progress"><span style="right:70%;">
								<div class="js"></div>
							</span></div>
					</li>
				</ul>
				<!-- end of skills -->
			</div>
		</div>`
		);
	});
}
displayUser("chadidi02");
