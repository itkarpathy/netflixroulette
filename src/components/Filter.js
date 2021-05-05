import classes from "./styles/Filter.module.css";

const Filter = ({movies}) => {
  return (
    <>
      <div className={classes.filter}>
        <div className={classes.filter__left}>
          <p>ALL</p>
          <p>DOCUMENTARY</p>
          <p>COMEDY</p>
          <p>HORROR</p>
          <p>CRIME</p>
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
              <option active value="select">
                RELEASE DATE
              </option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
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
