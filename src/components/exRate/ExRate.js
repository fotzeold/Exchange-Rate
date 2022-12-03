import Converter from '../converter/Converter';
import Spinner from '../spinner/Spinner'
import './exRate.scss';

const ExRate = (props) => {
	return (
		<main>
			<h2>Конвертер валют</h2>
			<p>Конвертація відбувається по середньому банківському курсу Національного банку України</p>
			<div className="exrate">
				{props.data[1] ? <Converter data={props.data} /> : <Spinner />}
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

export default ExRate;