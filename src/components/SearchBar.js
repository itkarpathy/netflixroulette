import classes from "./styles/Search.module.css"
import { useState} from 'react'

const SearchBar = ({ getQuery }) => {
	const [text, setText ] = useState('')

	const searchHandler = (q) =>{
		setText(q)
	}

	const onSubmitHandler = (e) =>{
		e.preventDefault()
		getQuery(text)
		setText('')
	
	}

	return (
		<div className={classes.wrapper}>
			<h2>find your movie</h2>
			<form className={classes.searchbar} onSubmit={onSubmitHandler}>
				<input autoFocus value={text} type="text" placeholder='What do you want search?' onChange={(e) => searchHandler(e.target.value)}/>
			<button className={classes.btn__search} type='submit'>search</button>
			</form>
			
		</div>
	)
}

export default SearchBar
