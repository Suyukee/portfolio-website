import HeroSection from '@/components/hero-section';
import ProjectSection from '@/components/project-section';
import StackSection from '@/components/stack-section';

export default function Home() {
	return (
		<main className="main">
			<HeroSection />
			<StackSection />
			<ProjectSection />
		</main>
	);
}
