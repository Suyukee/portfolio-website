import localFont from 'next/font/local';
import './globals.css';

const comicSans = localFont({ src: '../../public/fonts/comic-sans.ttf' });

export const metadata = {
	title: 'Portfolio',
	description: 'Portfolio website',
};

export const viewport = {
	themeColor: '#000000',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#000000" />
				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
			</head>
			<body className={comicSans.className}>{children}</body>
		</html>
	);
}
