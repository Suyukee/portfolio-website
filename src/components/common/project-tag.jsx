import styles from '../../styles/filter-button.module.css';

export default function ProjectTag({ name, onClick, isSelected }) {
	return (
		<button
			className={`${styles.button} ${isSelected && styles.active}`}
			onClick={() => onClick(name)}
		>
			<h3>{name}</h3>
		</button>
	);
}
