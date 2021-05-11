import classes from "./styles/OpenBox.module.css"

const OpenBox = (props) => {
	return (
		<div className={classes.openBox}>
			<div className={classes.icon}>
			<span onClick={props.onCancel}>X</span>
			</div>
			<div className={classes.menuItem} key={props.id}>
			<li>Edit</li>
			<li id={props.id} onClick={props.onConfirm}>Delete</li>
			</div>
		</div>
	)
}

export default OpenBox
