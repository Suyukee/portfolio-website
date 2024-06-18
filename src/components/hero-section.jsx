import Image from 'next/image';
import styles from '../styles/hero-section.module.css';
import EditingBorder from './editing-border';

export default function HeroSection() {
	return (
		<section className="section">
			<div className={styles.section__hero}>
				<div className={styles.hero__info}>
					<h1>Привет, я Вова</h1>
					<h2>frontend-разработчик</h2>
				</div>
				<div className={styles.hero__avatar}>
					<EditingBorder>
						<Image src="/images/avatar.jpg" width={300} height={300} alt="Фото" />
					</EditingBorder>
				</div>
			</div>
		</section>
	);
}
