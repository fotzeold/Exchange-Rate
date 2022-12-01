import { useState } from 'react';
import useSortData from '../../hooks/useSortData';
import Spinner from '../spinner/Spinner'
import './exRate.scss';

const ExRate = (props) => {
	if (props.data[1]) {

		const rateList = [{
			currency: "UAH",
			id: 100000,
			name: "Українська гривня",
			rate: 1
		}, ...useSortData(props.data)]

		return (
			<main>
				<h2>Конвертер валют</h2>
				<p>Конвертація відбувається по середньому банківському курсу Національного банку України</p>
				<div className="exrate">
					<div className="row">
						<input type="text" />
						<select name="" id="">
							{rateList.map((e, i) => (<option key={i + 100}>{e.currency}</option>))}
						</select>
					</div>
					<div className="row">
						<input type="text" />
						<select name="" id="">

						</select>
					</div>
				</div>
				<h2>
					Де можна придбати
				</h2>
				<ul>
					<li><a href="https://www.oschadbank.ua/">Ощадбанк</a></li>
					<li><a href="https://sensebank.com.ua/">Альфа Банк</a></li>
					<li><a href="https://www.monobank.ua/?lang=uk">Монобанк</a></li>
					<li><a href="https://privatbank.ua/">Приват Банк</a></li>
					<li><a href="https://raiffeisen.ua/">Райфайзель Банк</a></li>
				</ul>
				<br />
				<p>Нажми щоб перейти на сайт <br />Курс може відрізнятись в залежності від банку</p>
			</main>
		)
	}

	return (
		<Spinner />
	)
}

export default ExRate;