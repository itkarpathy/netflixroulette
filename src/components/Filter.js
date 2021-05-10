import classes from "./styles/Filter.module.css";
import { useState } from 'react'

const Filter = ({ movies }) => {
  const [filter, setFilter] = useState(movies)
  const [date, setDate] = useState()
  const [year, setYear] = useState()
  const [typeOfMovie, setTypeOfMovie] = useState()

  //remove duplications:

  const arr = filter.map(el => el.type)
  const newArrType = [...new Set(arr)]

  const typeSelector = (e) => {
    const textContent = e.target.textContent
    setTypeOfMovie(textContent)
  }

  //filtered types:

  const typeMovie = newArrType.map(el => (
    <>
      <p onClick={typeSelector} >{el}</p>
    </>
  )
  )



  const selectedSortDateHandler = (e) => {
    const year = e.target.value

    setYear(year)


  }

  return (
    <>
      <div className={classes.filter}>
        <div className={classes.filter__left}>
          {typeMovie}
        </div>
        <div className={classes.filter__right}>
          <h2>SORT BY</h2>
          <div className={classes.custom__select}>
            <select
              onChange={selectedSortDateHandler}
              name="release"
              className={classes.select}
            >
              {movies.map(el => (
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

      {year ? <h1>This is the {year} year that you choosed</h1> : ''}
      {typeOfMovie ? <h1>Type of movie: {typeOfMovie}</h1> : ''}

    </>
  );
};

export default Filter;
