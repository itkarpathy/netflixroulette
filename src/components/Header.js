import classes from './styles/Header.module.css'
import MainNavigation from './MainNavigation'
import SearchBar from './SearchBar'

const SearchArea = () => {
	return (
		<div className={classes.header}>
			<MainNavigation />
			<SearchBar />
		</div>
	)
}

export default SearchArea
