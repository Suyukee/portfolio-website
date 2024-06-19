import styles from '../styles/stack-section.module.css';

function StackSection() {
	return (
		<section className="section">
			<div className={styles.section__stack}>
				<h3>JavaScript</h3>
				<h3>TypeScript</h3>
				<h3>React</h3>
				<h3>Next.js</h3>
			</div>
		</section>
	);
}

export default StackSection;
