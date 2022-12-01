import { useState, useEffect } from 'react';

import ExRateServices from '../services/getInfo';
import ExRate from "../exRate/ExRate";
import Header from "../header/Header";

import './app.css';

const App = () => {
	const [data, setData] = useState({});
	const { getExchangeRate } = ExRateServices();

	useEffect(() => {
		getExchangeRate().then(data => {
			setData(data)
		})
	}, [])

	return (
		<div className="container">
			<div className="row">
				<Header data={data} />
				<ExRate data={data} />
			</div>
		</div>
	)
}

export default App;