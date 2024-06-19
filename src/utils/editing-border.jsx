import styles from '../styles/editing-border.module.css';

export default function EditingBorder(props) {
	return (
		<div className={styles.borderWrapper}>
			{props.children}
			<span className={`${styles.dot} ${styles.dotUpLeft}`} />
			<span className={`${styles.dot} ${styles.dotUpRight}`} />
			<span className={`${styles.dot} ${styles.dotBotRight}`} />
			<span className={`${styles.dot} ${styles.dotBotLeft}`} />
		</div>
	);
}
