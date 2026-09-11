import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Central Car Repairs | RMI Registered Workshop & Valet | Salt River, Cape Town',
  description: 'Established 1997. RMI-registered automotive servicing, engine diagnostics, mechanical repairs, and on-premises Meguiar\'s car wash & valet at 400 Albert Road, Salt River, Cape Town.',
  openGraph: {
    title: 'Central Car Repairs | RMI Workshop & Car Wash | Salt River, Cape Town',
    description: 'Established 1997. RMI-registered automotive servicing, engine diagnostics, mechanical repairs, and on-premises Meguiar\'s car wash & valet at 400 Albert Road, Salt River, Cape Town.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Car Repairs | Precision Workshop & Car Wash',
    description: 'Established 1997 in Salt River, Cape Town. RMI-registered workshop & Meguiar\'s valet.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#F4F5F7] text-[#1E2022] font-sans antialiased selection:bg-[#00A8E8] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

