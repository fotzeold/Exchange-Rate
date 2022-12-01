const ExRateServices = () => {
	const _apiKey = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

	const getResource = async (url) => {
		let result = await fetch(url);

		if (!result.ok) {
			throw new Error(result.status);
		}

		return await result.json();
	}

	const getExchangeRate = async () => {
		const data = await getResource(_apiKey);
		return data.map(_transformInfo);
	}

	const _transformInfo = (data) => {
		return {
			id: data["r030"],
			rate: data['rate'],
			name: data["txt"],
			currency: data["cc"],
		}
	}

	return { getExchangeRate };
}

export default ExRateServices;