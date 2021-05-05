import classes from "./styles/Card.module.css"
import { Link } from 'react-router-dom'
import dot  from '../assets/menu.png'


const Card = ({ item }) => {
	const { char_id, img, name, birthday } = item
	const birthdayCheck = birthday.substr(birthday.length - 4);
	const filteredBirthday = birthdayCheck > 0 ? birthdayCheck : 'n/a'


	return (
		<li className={classes.card} key={char_id}>
			<Link to={`/movie/${char_id}`} className={classes.btn__view}>
				<div className={classes.info}>
				</div>
				<div>
					<img src={img} alt='no' />
				</div>
				<div className={classes.card__box}>
					<div className={classes.card__title}>
						<p><span>{name}</span></p>
						<h3>{filteredBirthday ? (filteredBirthday) : birthday}</h3>
					</div>
					<div className={classes.card__release}>
						<p>Drama, Blography, Music</p>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default Card
