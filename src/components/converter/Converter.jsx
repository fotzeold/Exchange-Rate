import { useState, useEffect } from 'react';
import './converter.scss';
import useSortData from '../../hooks/useSortData';

const Converter = (props) => {
	const [topValue, setTopValue] = useState('');
	const [bottomValue, setBottomValue] = useState('');

	const [topLabel, setTopLabel] = useState('UAH');
	const [bottomLabel, setBottomLabel] = useState('USD');

	const [focusTop, setFocusTop] = useState(false);
	const [focusBottom, setFocusBottom] = useState(false);

	const [countValueTop, setCountValueTop] = useState('');
	const [countValueBottom, setCountValueBottom] = useState('');

	const rateList = [{
		currency: "UAH",
		id: 100000,
		name: "Українська гривня",
		rate: 1
	}, ...useSortData(props.data)];

	const sense = () => {
		const objSenseTop = rateList.filter(e => e.currency == topLabel);
		const objSenseBottom = rateList.filter(e => e.currency == bottomLabel);

		const rateTop = objSenseTop[0].rate;
		const rateBot = objSenseBottom[0].rate;

		return { rateTop, rateBot }
	}

	useEffect(() => {
		onCalc()
	}, [topValue, bottomValue, topLabel, bottomLabel, countValueTop, countValueBottom])

	const onCalc = () => {
		const { rateTop, rateBot } = sense();

		if (focusTop) {
			const resT = topValue * rateTop / rateBot;
			setCountValueTop(topValue)
			setCountValueBottom(resT.toFixed(2))
			setBottomValue(countValueBottom)
		}

		if (focusBottom) {
			const resB = bottomValue * rateBot / rateTop;
			setCountValueBottom(bottomValue)
			setCountValueTop(resB.toFixed(2))
			setTopValue(countValueTop)
		}
	}

	const onFocusTop = () => {
		setFocusBottom(false)
		setFocusTop(true)
	}

	const onFocusBottom = () => {
		setFocusTop(false)
		setFocusBottom(true)
	}


	return (
		<>
			<div className="row">
				<input type="number"
					className='converter-inp'
					onChange={(e) => { setTopValue(e.target.value) }}
					onFocus={onFocusTop}
					onBlur={() => setFocusTop(false)}
					value={focusTop ? topValue : countValueTop}
				/>
				<select
					onChange={(e) => {
						setTopLabel(e.target.value);
						onFocusBottom();
					}}
				>
					{rateList.map((e, i) => (
						<option
							key={i + 100}
							value={e.currency}
						>{e.currency}</option>
					))}
				</select>
			</div>
			<div className="row">
				<input type="number"
					className='converter-inp'
					onChange={(e) => { setBottomValue(e.target.value) }}
					onFocus={onFocusBottom}
					onBlur={() => setFocusBottom(false)}
					value={focusBottom ? bottomValue : countValueBottom}
				/>
				<select
					onChange={(e) => {
						setBottomLabel(e.target.value);
						onFocusTop();
					}}
					defaultValue={'USD'}
				>
					{rateList.map((e, i) => (
						<option
							key={i + 1000}
							value={e.currency}
						>{e.currency}</option>
					))}
				</select>
			</div>
		</>
	)
}

export default Converter;