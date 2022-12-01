import { useState } from 'react';
import useSortData from '../../hooks/useSortData';
import useTransformData from '../../hooks/useTransformData';

import './rate-list.scss';
import dateImg from '../../img/date.png';

const RateList = (props) => {
	const date = new Date().toLocaleString();

	const [pagContent, setPagContent] = useState(useTransformData(useSortData(props.data)))
	const [activePage, setActivePage] = useState(0);
	const [filteredArray, setFilteredArray] = useState(pagContent[activePage]);

	const selectPage = (num) => {
		try {
			const pages = document.querySelectorAll('.paggination__btn');

			pages.forEach(e => e.classList.remove('active'));
			pages[num].classList.add('active');

			setActivePage(num)
			setFilteredArray(pagContent[num])
		} catch {
			console.log('Зміни дані в інпуті')
		}
	}

	const searchRate = (event) => {
		const str = event.target.value.toUpperCase();

		if (!str) {
			setPagContent(useTransformData(useSortData(props.data)));
			selectPage(0);
			setFilteredArray(useTransformData(useSortData(props.data))[0]);
		} else {
			const arr = props.data.filter(elem => {
				return elem.name.toUpperCase().includes(str) ||
					elem.currency.toUpperCase().includes(str)
			});
			setPagContent(useTransformData(arr))
			selectPage(0);
			setFilteredArray(useTransformData(arr)[0]);
		}
	}

	return (
		<>
			<div className="title">
				<div className="row">
					<h1>Курси валют</h1>
					<div className="title__date">
						<img src={dateImg} alt="" />
						<span>{date.slice(0, 10)}</span>
					</div>
					<div className="title__filter">&#128270; Пошук валюти</div>
					<input
						onChange={(e) => searchRate(e)}
						className="title__filter-inp"
						type="search"
						placeholder='USD або долар...'
						onKeyDown={(e) => {
							if (/[^a-zA-Z]/.test(e.key)) {
								e.preventDefault();
							}
						}}
					/>
				</div>
			</div>

			<div className="rate__list">
				{!filteredArray ? 'Такої валюти немає' : View(filteredArray)}
			</div>

			<div className="paggination">
				{
					!filteredArray ? null : pagContent.map((e, i) => {
						return (
							<div
								onClick={() => selectPage(i)}
								key={i + 10}
								className={`paggination__btn ${i == 0 ? 'active' : ''}`}
							>
								{i + 1}
							</div>
						)
					})
				}
			</div>
		</>
	)
};

function View(arr) {
	const res = arr.map((elem, i) => {
		const rate = elem.rate > 0.009 ? elem.rate.toFixed(2) : elem.rate.toFixed(3)

		return (
			<div className='rate__wrapper' key={i}>
				<span className='rate__title'>{elem.name}</span> <br />
				<span className='rate__sub-title'>
					{`1 ${elem.currency} = ${rate} UAH`}
				</span>
			</div>
		)
	})

	return (<>{res}</>)
}

export default RateList;




