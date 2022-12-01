const useSortData = (arr) => {
	let res = arr.filter((e) => {
		let curr = e.currency
		return (curr == 'USD' || curr == 'EUR' || curr == 'RUB' || curr == 'PLN' || curr == 'XAU')
	});

	let sec = arr.filter((e) => {
		let curr = e.currency
		return (curr != 'USD' && curr != 'EUR' && curr != 'RUB' && curr != 'PLN' && curr != 'XAU')
	});

	return [...res, ...sec];
}

export default useSortData;