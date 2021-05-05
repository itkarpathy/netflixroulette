import { useState, useEffect } from 'react'
import classes from './styles/Home.module.css'
import MovieLists from './MovieLists'
import SearchBar from './SearchBar'
import MainNavigation from './MainNavigation'
import Filter from './Filter'
import Footer from './Footer'


const Home = (props) => {
	const [movies, setMovies] = useState([])
	const [query, setQuery ] = useState('')

	useEffect(()=>{
		const fetchApi = async () =>{
			const response = await fetch(`https://breakingbadapi.com/api/characters?name=${query}`)
			const data = await response.json()
			setMovies(data)
		}
		fetchApi()
	},[query])


	return (
		<div>
				<div  className={classes.home}>
				<div className={classes.header}>
				<MainNavigation />
				<SearchBar getQuery={(q) => setQuery(q)}/>
				</div>
				</div>
				<Filter movies={movies}/>				
				<MovieLists movies={movies}/>
				<Footer />
		</div>
	)
}

export default Home
