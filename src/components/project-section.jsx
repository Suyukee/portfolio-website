import styles from '../styles/project-section.module.css';
import FilterButton from './common/filter-button';
import ProjectCard from './common/project-card';

export default function ProjectSection() {
	const projectsData = [
		{
			id: 1,
			title: 'Калькулятор интегрирования',
			image: '/images/project-cards/1.jpg',
			tag: ['All'],
		},
		{
			id: 2,
			title: 'Игра на память',
			image: '/images/project-cards/2.jpg',
			tag: ['All'],
		},
		// {
		// 	id: 3,
		// 	title: '',
		// 	image: '',
		// 	tag: ['All'],
		// },
	];
	return (
		<section className="section">
			<div className={styles.project}>
				<h2>Мои проекты</h2>
				<div className={styles.filter}>
					<FilterButton active={true}>Все</FilterButton>
					<FilterButton active={false}>TypeScript</FilterButton>
					<FilterButton active={false}>Мобильные</FilterButton>
				</div>
				<div className={styles.cards}>
					{projectsData.map((project) => (
						<ProjectCard key={project.id} title={project.title} imgUrl={project.image} />
					))}
				</div>
			</div>
		</section>
	);
}
