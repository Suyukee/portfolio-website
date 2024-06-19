import styles from '../styles/filter-button.module.css';

export default function FilterButton({ children, active }) {
	return (
		<button className={`${styles.button} ${active && styles.active}`}>
			<h3>{children}</h3>
		</button>
	);
}
