import classes from "./styles/MainNavigation.module.css"
import { Link } from 'react-router-dom'

const MainNavigation = () => {
	return (
		<div className={classes.wrapper}>
		<h2><Link to='/'><span>netflix</span>roulette</Link></h2>
			<button className={classes.btn__navbar}>+ add movie</button>
		</div>
	)
}

export default MainNavigation
