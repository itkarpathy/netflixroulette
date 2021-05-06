import classes from "./styles/MainNavigation.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const MainNavigation = (props) => {
  const [checkVisible, setVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const clickModal = () => {
    setVisible(true);
  };

  const submitOrderHandler = (userData) => {
    setSubmitting(true);
    fetch(
      "https://netflix-roulette-a0a46-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: userData.name,
          poster: userData.poster,
          releaseDate: userData.release,
          typr: userData.type,
        }),
      }
    );
  };

  return (
    <div className={classes.wrapper}>
      <h2>
        <Link to="/">
          <span>netflix</span>roulette
        </Link>
      </h2>
      <button className={classes.btn__navbar} onClick={clickModal}>
        + add movie
      </button>
      {checkVisible && <Modal onConfirm={submitOrderHandler} />}
    </div>
  );
};

export default MainNavigation;
