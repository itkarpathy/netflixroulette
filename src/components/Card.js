import classes from "./styles/Card.module.css"
import { Link } from 'react-router-dom'

const Card = ({ item }) => {

	const { id, name, poster, releaseDate, type } = item

	return (
		<li className={classes.card} key={id}>
			<Link to={`/movie/${id}`} className={classes.btn__view}>
				<div className={classes.info}>
				</div>
				<div>
					<img src={poster} alt='poster' />
				</div>
				<div className={classes.card__box}>
					<div className={classes.card__title}>
						<p><span>{name}</span></p>
						<h2>{releaseDate}</h2>
					</div>
					<div className={classes.card__release}>
						<p>{type}</p>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default Card
