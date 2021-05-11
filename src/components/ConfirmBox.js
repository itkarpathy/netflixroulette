import classes from "./styles/ConfirmBox.module.css"

const Confirmbox = (props) => {
	const title = props.title.toUpperCase()
	const text  = props.text

	return (
		<div className={classes.confirm}>
			<div className={classes.confirm__top}>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		<div className={classes.buttons}>
		<button onClick={props.onCancel}>cancel</button><button id={props.id} onClick={props.onDelete}>confirm</button>
		</div>
			
		</div>
	)
}

export default Confirmbox
