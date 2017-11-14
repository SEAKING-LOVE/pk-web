const urlBuilder = (path) => {
	return `${API_HOST}/v1/${path}`;
};

export const fetchData = async (path) => {
	try {
		const response = await fetch(urlBuilder(path));
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}