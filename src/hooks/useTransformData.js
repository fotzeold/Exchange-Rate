const useTransformData = (arr) => {
	const array = [];
	const size = 5;

	for (let i = 0; i <= arr.length - 1; i += size) {
		array.push(arr.slice(i, i + size))
	}

	return array;
}

export default useTransformData;