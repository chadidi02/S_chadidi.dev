export function placeText(id, text) {
	var q = document.getElementById(id);
	if (q) q.innerHTML = text;
}

export function placeHtml(id, html) {
	var q = document.getElementById(id);
	if (q) q.insertAdjacentHTML("beforeend", html);
}
