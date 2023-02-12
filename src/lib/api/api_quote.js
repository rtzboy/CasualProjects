const generateText = async () => {
	try {
		const res = await fetch('https://api.quotable.io/random?maxLength=40');
		if (res.ok) {
			const data = await res.json();
			return {
				success: true,
				message: 'success',
				result: { author: data.author, content: data.content }
			};
		}
		return { success: false, message: res.statusText, result: null };
	} catch (err) {
		return { success: false, message: err, result: null };
	}
};

export default generateText;
