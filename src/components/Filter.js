import classes from "./styles/Filter.module.css";
import { useState } from "react";

const Filter = ({ movies, getYear }) => {
  const [date, setDate] = useState();
  const [year, setYear] = useState();
  const [typeOfMovie, setTypeOfMovie] = useState();

  //remove duplications:

  const arr = movies.map((el) => el.type);
  const newArrType = [...new Set(arr)];

  const typeSelector = (e) => {
    const textContent = e.target.textContent;
    setTypeOfMovie(textContent);
  };

  //filtered by types:

  const typeMovie = newArrType.map((el) => (
    <>
      <p onClick={typeSelector}>{el}</p>
    </>
  ));

  //filtered by years
  const selectedSortDateHandler = (q) => {
    setYear(q);
    getYear(year);
  };

  return (
    <>
      <div className={classes.filter}>
        <div className={classes.filter__left}>{typeMovie}</div>
        <div className={classes.filter__right}>
          <h2>SORT BY</h2>
          <div className={classes.custom__select}>
            <select
              onChange={(e) => selectedSortDateHandler(e.target.value)}
              name="release"
              className={classes.select}
            >
              {movies.map((el) => (
                <>
                  <option active value={date} id={el.id}>
                    {el.releaseDate}
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
    </>
  );
};

export default Filter;
