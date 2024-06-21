import localFont from 'next/font/local';
import './globals.css';

const comicSans = localFont({ src: '../../public/fonts/comic-sans.ttf' });

export const metadata = {
	title: 'Portfolio',
	description: 'Portfolio website',
};

export const viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'red' },
		{ media: '(prefers-color-scheme: dark)', color: 'green' },
	],
	colorScheme: 'light',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="red" />
				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="green" />
				<meta name="color-scheme" content="light" />
			</head>
			<body className={comicSans.className}>{children}</body>
		</html>
	);
}
