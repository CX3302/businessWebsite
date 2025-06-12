import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import ClientNavigation from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AI Automation Solutions",
  description: "Transform your business with intelligent automation solutions powered by AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientNavigation />
        {children}
      </body>
    </html>
  );
}
