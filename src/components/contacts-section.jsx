import Link from 'next/link';
import styles from '../styles/contacts-section.module.css';

export default function ContactsSection() {
	return (
		<section className="section">
			<div className={styles.contacts}>
				<h2>Контакты</h2>
				<h3 className={styles.text}>
					В настоящее время я ищу новые возможности и всегда открыт для ваших предложений.
					Дополнительные вопросы и предложения вы можете отправить на мой телеграм или email.
				</h3>
				<div className={styles.links}>
					<Link className="button" href="https://t.me/suyukee">
						<h3>Телеграм</h3>
					</Link>
					<Link className="button" href="mailto:suyukee@ya.ru">
						<h3>Email</h3>
					</Link>
					<Link className="button" href="https://github.com/Suyukee">
						<h3>Github</h3>
					</Link>
					<Link className="button" href="https://vercel.com/suyukees-projects">
						<h3>Vercel</h3>
					</Link>
				</div>
			</div>
		</section>
	);
}
