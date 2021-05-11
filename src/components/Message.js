import classes from "./styles/Message.module.css"

const Message = (props) => {
	const newTitle = props.title
	const upperTextTitle = newTitle.toUpperCase() + ' ' + '!'

	return (
		<div className={classes.msg}>
			<h1>{upperTextTitle}</h1>
			<p>{props.text}</p>
			<button onClick={props.onCancel}>close</button>
		</div>
	)
}

export default Message
