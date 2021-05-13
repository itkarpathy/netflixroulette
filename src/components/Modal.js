import classes from "./styles/Modal.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isNotFourCharacters = (value) => value.trim().length === 4;
const checkUrl = (value) => value.trim() === "https://" || value.trim() === "";

const Modal = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    poster: true,
    release: true,
    type: true,
  });

  const nameInputRef = useRef();
  const posterInputRef = useRef();
  const releaseInputRef = useRef();
  const typeInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const poster = posterInputRef.current.value;
    const release = releaseInputRef.current.value;
    const type = typeInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const posterIsValid = !checkUrl(poster);
    const dateIsValid = isNotFourCharacters(release);
    const typeIsValid = !isEmpty(type);


    setFormInputsValidity({
      name: nameIsValid,
      poster: posterIsValid,
      dateIsValid: dateIsValid,
      type: typeIsValid,
    });

    const formIsValid =
      nameIsValid && posterIsValid && dateIsValid && typeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      poster: poster,
      release: release,
      type: type,
    });
  };

  return (
    <form className={classes.modal} onSubmit={submitHandler}>
      <h2>add movie:</h2>
      <div className={classes.control}>
        <label htmlFor="name">name</label>
        {!formInputsValidity.name && <p>Please leave valid name!</p>}
        <input type="text" placeholder="Superman" ref={nameInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="poster">poster url</label>
        {!formInputsValidity.poster && <p>Please enter valid url!</p>}
        <input
          type="text"
          placeholder="https://something.com"
          ref={posterInputRef}
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="releaseDate">release date</label>
        {!formInputsValidity.dateIsValid && <p>Maximum 4 char!</p>}
        <input type="number" placeholder="2021" ref={releaseInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="type">type</label>
        {!formInputsValidity.type && <p>Please add type of movie!</p>}
        <input type="text" placeholder="Comedy" ref={typeInputRef} />
      </div>

      <div className={classes.control__btn}>
        <button onClick={props.onCancel}>cancel</button>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Modal;
