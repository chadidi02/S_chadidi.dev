import axios from "axios";
import "regenerator-runtime/runtime.js";

export async function getUser(username) {
	const { data } = await axios.get(
		`https://gitconnected.com/v1/portfolio/chadidi02`
	);
	return data;
}
