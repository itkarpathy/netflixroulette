import classes from "./styles/Modal.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isThreeCharacters = (value) => value.length < 4;
const isDateValid = (value) => value === 4;
const checkUrl = (value) => value.includes("https://") || value.trim() === "";

const Modal = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    poster: true,
    release: true,
    type: true,
    genre: true,
    runtime: true,
  });

  const nameInputRef = useRef();
  const posterInputRef = useRef();
  const releaseInputRef = useRef();
  const typeInputRef = useRef();
  const selectedGenre = useRef();
  const runtimeRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const poster = posterInputRef.current.value;
    const release = releaseInputRef.current.value;
    const type = typeInputRef.current.value;
    const genre = selectedGenre.current.value;
    const runtime = runtimeRef.current.value;

    const nameIsValid = !isEmpty(name);
    const posterIsValid = !checkUrl(poster);
    const dateIsValid = !isDateValid(release);
    const typeIsValid = !isEmpty(type);
    const typeIsGenre = !isEmpty(genre);
    const typeIsRuntime = isThreeCharacters(runtime);

    setFormInputsValidity({
      name: nameIsValid,
      poster: posterIsValid,
      release: dateIsValid,
      type: typeIsValid,
      genre: typeIsGenre,
      runtime: typeIsRuntime,
    });

    const formIsValid =
      nameIsValid && posterIsValid && dateIsValid && typeIsValid && typeIsGenre && typeIsRuntime;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: name,
      poster: poster,
      release: release,
      type: type,
      genre: genre,
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
        <label htmlFor="releaseDate">release date</label>
        {!formInputsValidity.release && <p>Please choose released date!</p>}
        <input ref={releaseInputRef} type="number" placeholder="select year" />
      </div>

      <div className={classes.control}>
        <label htmlFor="poster">movie url</label>
        {!formInputsValidity.poster && <p>Please enter valid url</p>}
        <input type="text" placeholder="Movie URL here" ref={posterInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="type">genre</label>
        {!formInputsValidity.genre && <p>Please select genre</p>}
        <select
          onChange={(e) => e.target.value}
          ref={selectedGenre}
          className={classes.select}
        >
          <option value="">select genre</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={classes.control}>
        <label htmlFor="type">overview</label>
        {!formInputsValidity.type && <p>Please add overview</p>}
        <input type="text" placeholder="Overview here" ref={typeInputRef} />
      </div>

      <div className={`${formInputsValidity.runtime ? classes.control: 'no active'}`}>
        <label htmlFor="releaseDate">runtime</label>
        {!formInputsValidity.runtime && <p>Maximum 3 char!</p>}
        <input type="number" placeholder="Runtime here" ref={runtimeRef} />
      </div>

      <div className={classes.control__btn}>
        <button onClick={props.onCancel}>reset</button>
        <button type="submit">send</button>
      </div>
    </form>
  );
};

export default Modal;
