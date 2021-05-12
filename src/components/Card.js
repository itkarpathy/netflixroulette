import classes from "./styles/Card.module.css";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import OpenBox from "./OpenBox";
import ConfirmBox from "./ConfirmBox";

const Card = ({ item, onRemove }) => {
  const [openBox, setOpenBox] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState(false);

  const removeMovieHandler = (e) => {
    onRemove(e.target.id);
    setOpenBox(false);
    setConfirmMessage(false);
  };

  const openEditButton = () => {
    setOpenBox(true);
  };

  const closeOpenMenu = () => {
    setOpenBox(false);
  };

  const closeDeleteBox = () => {
    setConfirmMessage(false);
  };

  const closeConfirm = () => {
    setConfirmMessage(true);
  };

  const { id, name, poster, releaseDate, type } = item;

  return (
    <li className={classes.card} key={id}>
      <div to={`/movie/${name}`} className={classes.btn__view}>
        {openBox ? (
          <OpenBox
            className={classes.openBox}
            onCancel={closeOpenMenu}
            onConfirm={closeConfirm}
            id={item.id}
          />
        ) : (
          <FaEllipsisV className={classes.closeBtn} onClick={openEditButton} />
        )}
        {confirmMessage ? (
          <ConfirmBox
            id={item.id}
            title="delete movie"
            text="Are you sure , you want to delete this movie?"
            onDelete={removeMovieHandler}
            onConfirm={closeConfirm}
            onCancel={closeDeleteBox}
          />
        ) : (
          ""
        )}

        <div>
          <img src={poster} alt="poster" />
        </div>
        <div className={classes.card__box}>
          <div className={classes.card__title}>
            <p>
              <span>{name}</span>
            </p>
            <h2>{releaseDate}</h2>
          </div>
          <div className={classes.card__release}>
            <p>{type ? type : "n/a"}</p>
          </div>
          <Link to={`/movie/${id}`}>
            <button>view details</button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Card;
