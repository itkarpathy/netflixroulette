import classes from "./styles/Filter.module.css";

const Filter = ({ movies }) => {
  const { type, id, releaseDate } = movies;

  return (
    <>
      <div className={classes.filter}>
        <div className={classes.filter__left}>
          <p>ALL</p>
          <p>COMEDY</p>
          <p>ACTION</p>
          <p>DRAMA</p>
        </div>
        <div className={classes.filter__right}>
          <h2>SORT BY</h2>
          <div className={classes.custom__select}>
            <select
              name="release"
              id="release"
              className={classes.select}
              placeholder="select"
            >
              <option>release date</option>
              <option active value="select">
                2016
              </option>
              <option active value="select">
                2017
              </option>
              <option active value="select">
                2018
              </option>
              <option active value="select">
                2019
              </option>
            </select>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.movie__numbers}>
        <h1><span>{movies.length}</span> movie found</h1>
      </div>
    </>
  );
};

export default Filter;
