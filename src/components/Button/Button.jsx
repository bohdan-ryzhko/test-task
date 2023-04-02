import sass from "./Button.module.scss";

export const Button = ({ onClick, text, type, disabled }) => {
	return <button
		onClick={onClick}
		disabled={disabled}
		type={type}
		className={sass.button}
	>
		{text}
	</button>
}