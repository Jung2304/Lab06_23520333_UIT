import { Inter } from 'next/font/google';
import './globals.css';

// Optimize Google Font - self-hosted, no external requests
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Next.js Lab 06',
  description: 'Demonstrating Next.js features: SSG, App Router, API Routes, and Optimization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
