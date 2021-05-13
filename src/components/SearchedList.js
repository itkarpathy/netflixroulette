import Results from './Results'
import classes from './styles/SearchedList.module.css'

const SearchedList = ({search}) => {

	if(search.length === 0){
		return <h1>No searched movie , sorry</h1>
	}

	return (
		<ul className={classes.searchedList}>
			{search.map(list => (
				<Results result={list}/>
			))}	
		</ul>
	)
}

export default SearchedList
