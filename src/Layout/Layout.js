import classes from "../Layout/Layout.module.css";

const Layout = (props) => {
  return <div className={classes.main}>{props.children}</div>;
};

export default Layout;
