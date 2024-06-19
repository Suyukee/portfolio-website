import Image from 'next/image';
import styles from '../styles/hero-section.module.css';
import EditingBorder from '../utils/editing-border';

export default function HeroSection() {
	return (
		<section className="section">
			<div className={styles.hero}>
				<div className={styles.info}>
					<h1>Привет, я Вова</h1>
					<h2>frontend-разработчик</h2>
				</div>
				<div className={styles.avatar}>
					<EditingBorder>
						<Image src="/images/avatar.jpg" width={300} height={300} alt="Фото" priority={true} />
					</EditingBorder>
				</div>
			</div>
		</section>
	);
}
