import sass from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }) => {
	return <h2 className={sass.section__title}>{title}</h2>
}