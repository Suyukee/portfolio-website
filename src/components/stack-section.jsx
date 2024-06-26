import styles from '../styles/stack-section.module.css';

function StackSection() {
	return (
		<section className="section">
			<div className={styles.stack}>
				<div className={styles.technologies}>
					<h3>JavaScript</h3>
					<h3>TypeScript</h3>
					<h3>React</h3>
					<h3>Next.js</h3>
				</div>
				{/* <h3>Оконченное высшее в IT сфере</h3>
				<h3>Пройденный курс TypeScript + React</h3>
				<h3>Больше года обучения</h3> */}
			</div>
		</section>
	);
}

export default StackSection;
