import classes from "./styles/FilteredList.module.css";
import Year from "./Year";

const FilteredList = ({ items }) => {

	if(items.length === 0 ){
		return <h1>No filtered date list!</h1>
	}
	
  return <ul className={classes.movieList}>
	  {items.map(year =>
		 <Year key={year.id} year={year} />
		)}
	 
  </ul>
  
};

export default FilteredList;
