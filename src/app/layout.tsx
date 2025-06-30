import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Suriya\'s Portfolio',
    description: 'Personal portfolio showcasing projects and achievements',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    <Header />
                    <main className="pb-10">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
} 