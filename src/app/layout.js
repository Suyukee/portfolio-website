import localFont from 'next/font/local';
import './globals.css';

const comicSans = localFont({ src: '../../public/fonts/comic-sans.ttf' });

export const metadata = {
	title: 'Portfolio',
	description: 'Portfolio website',
};

export const viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f8f8f8' },
		{ media: '(prefers-color-scheme: dark)', color: '#212529' },
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={comicSans.className}>{children}</body>
		</html>
	);
}
