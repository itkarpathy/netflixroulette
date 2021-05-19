import classes from "./styles/FilteredList.module.css";
import Year from "./Year";

const FilteredList = ({ items }) => {
	let content = <h1>We can not find any match</h1>

	if (items.length === 0) {
		return content
	}

	return <ul className={classes.movieList}>
		{items.map(year =>
			<Year key={year.id} year={year} />
		)}

	</ul>

};

export default FilteredList;
