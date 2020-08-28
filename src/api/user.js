import axios from "axios";
import "regenerator-runtime/runtime.js";

export async function getUser(username) {
	const { data } = await axios.get(
		// `https://www.fevrok.dev/api/v1/portfolio/${username}/?api_key=du4iwvio46`
		`https://gitconnected.com/v1/portfolio/chadidi02`
	);

	console.log(data);
	return data;
}
