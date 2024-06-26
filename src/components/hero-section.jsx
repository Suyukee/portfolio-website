import Image from 'next/image';
import styles from '../styles/hero-section.module.css';
import EditingBorder from './common/editing-border';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className="section">
			<div className={styles.hero}>
				<div className={styles.info}>
					<div></div>
					<div className={styles.person}>
						<h1>Привет, я Вова</h1>
						<h2>frontend-разработчик</h2>
					</div>
					<div className={styles.resume}>
						<Link className="button" href="/files/резюме.pdf">
							<h3>Резюме</h3>
						</Link>
					</div>
				</div>
				<Link className={styles.avatar} href="https://github.com/Suyukee">
					<EditingBorder>
						<Image src="/images/avatar.jpg" width={300} height={300} alt="Фото" priority={true} />
					</EditingBorder>
				</Link>
			</div>
		</section>
	);
}
