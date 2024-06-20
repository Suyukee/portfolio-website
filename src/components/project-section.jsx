import styles from '../styles/project-section.module.css';
import FilterButton from './filter-button';

export default function ProjectSection() {
	return (
		<section className="section">
			<div className={styles.project}>
				<h2>Мои проекты</h2>
				<div className={styles.filter}>
					{/* <FilterButton active={true}>Все</FilterButton>
					<FilterButton active={false}>TypeScript</FilterButton>
					<FilterButton active={false}>Мобильные</FilterButton> */}

					<button className={`${styles.button} ${styles.active}`}>
						<h3>Все</h3>
					</button>
					<button className={styles.button}>
						<h3>TypeScript</h3>
					</button>
					<button className={styles.button}>
						<h3>Мобильные</h3>
					</button>
				</div>
			</div>
		</section>
	);
}
