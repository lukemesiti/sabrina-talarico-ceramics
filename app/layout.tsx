import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Sabrina Talarico Ceramics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <Link href="/" className="text-lg">
              Sabrina Talarico Ceramics
            </Link>
            <div className="flex space-x-4">
              <Link href="/about" className="text-lg">
                About
              </Link>
              {/* <Link href="/contact">Contact</Link> */}
            </div>
          </nav>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
