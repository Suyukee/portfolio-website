import Image from 'next/image';
import styles from '../../styles/project-card.module.css';

export default function ProjectCard({ title, imgUrl }) {
	return (
		<div className={styles.card}>
			<Image src={imgUrl} width={300} height={300} alt={title} />
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
		</div>
	);
}
