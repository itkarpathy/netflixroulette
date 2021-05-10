import classes from "./styles/Card.module.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Card = ({ item , onRemove}) => {

	const removeMovieHandler = (id) =>{
		onRemove(id)
	}


	const { id, name, poster, releaseDate, type } = item

	return (
		<li className={classes.card} key={id}>
			
			<div to={`/movie/${name}`} className={classes.btn__view}>
			<button id='666' onClick={() => removeMovieHandler(item.id)}>delete</button>
				<div>
					<img src={poster} alt='poster' />
				</div>
				<div className={classes.card__box}>
					<div className={classes.card__title}>
						<p><span>{name}</span></p>
						<h2>{releaseDate}</h2>
					</div>
					<div className={classes.card__release}>
						<p>{type ? type : 'n/a' }</p>
					</div>
					<Link to={`/movie/${id}`}><button>view details</button></Link>
				</div>
			</div>
		</li>
	)
}

export default Card
