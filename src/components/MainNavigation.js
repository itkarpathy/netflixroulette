import classes from "./styles/MainNavigation.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Message from "./Message";

const MainNavigation = (props) => {
  const [visible, setVisible] = useState(false);
  const [successMessage, setSetSuccessMessage] = useState(false);

  const clickModal = () => {
    setVisible(true);
  };

  const inactiveHandler = () => {
    setVisible(false)
  }

  const closeMessage = () => {
    setSetSuccessMessage(false)
  }

  const submitOrderHandler = (userData) => {
    setSetSuccessMessage(false)
    fetch(
      "https://netflix-roulette-a0a46-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: userData.name,
          poster: userData.poster,
          releaseDate: userData.release,
          type: userData.type,
        }),

      }

    );
    setSetSuccessMessage(true)
  };

  return (
    <div className={classes.wrapper}>
      <h2>
        <Link to="/" className={classes.logo}>
          <span>netflix</span>roulette
        </Link>
      </h2>
      <button className={classes.btn__navbar} onClick={clickModal}>
        + add movie
      </button>
      {visible && <Modal onCancel={inactiveHandler} onConfirm={submitOrderHandler} />}
      {!visible && successMessage && <Message title='congratulations' text='The movie has been added to database succesfully' onCancel={closeMessage} />}
    </div>
  );
};

export default MainNavigation;
