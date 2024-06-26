import styles from '../../styles/project-tag.module.css';

export default function ProjectTag({ name, onClick, isSelected }) {
	return (
		<button className={`button ${isSelected && styles.active}`} onClick={() => onClick(name)}>
			<h3>{name}</h3>
		</button>
	);
}
