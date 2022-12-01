import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import RateList from '../rateList/RateList';

import './header.scss'

const Header = (props) => {
	const content = props.data[1] ? <RateList data={props.data} /> : <Spinner />;

	return (
		<header>
			{content}
		</header>
	)
}

export default Header;