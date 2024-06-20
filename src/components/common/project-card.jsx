import Image from 'next/image';
import styles from '../../styles/project-card.module.css';
import Link from 'next/link';

export default function ProjectCard({ title, imgUrl, gitUrl }) {
	return (
		<Link href={gitUrl} className={styles.card}>
			<Image src={imgUrl} width={300} height={300} alt={title} />
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
		</Link>
	);
}
