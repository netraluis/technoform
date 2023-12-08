const test = async () => {
	try {
		const res = await fetch(`http://localhost:11000/test`);
		const data = await res.json();
		console.log(res, data);
	} catch (err) {
		console.log(err);
	}
};

export default test