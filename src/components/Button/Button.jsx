import sass from "./Button.module.scss";

export const Button = ({ text, type, disabled }) => {
	return <button
		disabled={disabled}
		type={type}
		className={sass.button}
	>
		{text}
	</button>
}