import classes from "./styles/Notfound.module.css";
import BGError from "../assets/Error.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1>Page not found</h1>
      </div>
      <img src={BGError} alt="notfound" />

      <div>
        <button className={classes.btn}>
          <Link to="/">go back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
