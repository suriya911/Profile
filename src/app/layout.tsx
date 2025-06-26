import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Classic Portfolio',
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
                <link
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            </head>
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <script dangerouslySetInnerHTML={{
                    __html: 'AOS.init();'
                }} />
            </body>
        </html>
    );
} 