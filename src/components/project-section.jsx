'use client';

import { useState } from 'react';
import styles from '../styles/project-section.module.css';
import ProjectCard from './common/project-card';
import ProjectTag from './common/project-tag';

const projectsData = [
	{
		id: 1,
		title: 'Калькулятор интегрирования',
		image: '/images/project-cards/1.jpg',
		gitUrl: 'https://github.com/Suyukee/define-integral',
		tag: ['Все', 'TypeScript', 'Мобильный'],
	},
	{
		id: 2,
		title: 'Игра на память',
		image: '/images/project-cards/2.jpg',
		gitUrl: 'https://github.com/Suyukee/memory-game',
		tag: ['Все', 'Мобильный'],
	},
	{
		id: 3,
		title: 'Блог',
		image: '/images/project-cards/3.jpg',
		gitUrl: 'https://github.com/Suyukee/blog-on-react',
		tag: ['Все', 'Мобильный'],
	},
	{
		id: 4,
		title: 'Отель Solar',
		image: '/images/project-cards/4.jpg',
		gitUrl: 'https://github.com/Suyukee/hotel-solar',
		tag: ['Все', 'Мобильный'],
	},
	{
		id: 5,
		title: 'Сайт портфолио',
		image: '/images/project-cards/5.jpg',
		gitUrl: 'https://github.com/Suyukee/portfolio-website',
		tag: ['Все', 'Мобильный'],
	},
];

export default function ProjectSection() {
	const [tag, setTag] = useState('Все');

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));
	return (
		<section className="section">
			<div className={styles.project}>
				<h2>Мои проекты</h2>
				<div className={styles.filter}>
					<ProjectTag name={'Все'} onClick={handleTagChange} isSelected={tag === 'Все'} />
					<ProjectTag
						name={'TypeScript'}
						onClick={handleTagChange}
						isSelected={tag === 'TypeScript'}
					/>
					<ProjectTag
						name={'Мобильный'}
						onClick={handleTagChange}
						isSelected={tag === 'Мобильный'}
					/>
				</div>
				<div className={styles.cards}>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
