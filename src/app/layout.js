import localFont from 'next/font/local';
import './globals.css';

const comicSans = localFont({ src: '../../public/fonts/comic-sans.ttf' });

export const metadata = {
	title: 'Portfolio',
	description: 'Portfolio website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={comicSans.className}>{children}</body>
		</html>
	);
}
