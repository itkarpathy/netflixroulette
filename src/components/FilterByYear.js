import classes from "./styles/FilterByYear.module.css";

const FilterByYear = (props) => {

	const dropDownValue =(e)=>{
		props.selectedValue(e.target.value)
	}
	return (
		<div className={classes.filter}>
			<select value={props.selected} name="select" id="select" onChange={dropDownValue}>
				<label htmlFor="">filtered by year</label>
				<option value="">release date</option>
				<option value="2016">2016</option>
				<option value="2008">2008</option>
				<option value="2019">2020</option>
			</select>
		</div>
	)
}

export default FilterByYear
