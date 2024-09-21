import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Anderson Betioli Odontologia Avançada',
  description:
    'Especialista em implante, estética dental (lente, faceta, clareamento), prótese dentária.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-[100dvh] bg-white text-black">
          <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-white bg-opacity-90">
            <Link className="flex items-center justify-center" href="/">
              <Image
                src="/logo2.png"
                alt="Anderson Betioli Odontologia Avançada"
                width={200}
                height={200}
                className="overflow-hidden"
                priority={true}
              />
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/#servicos"
              >
                Serviços
              </Link>
              <Link
                className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/#sobre"
              >
                Sobre
              </Link>
              <Link
                className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/#contato"
              >
                Contato
              </Link>
            </nav>
          </header>

          {children}

          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
            <p className="text-xs text-gray-500">
              © 2023 Anderson Betioli Odontologia Avançada. Todos os direitos
              reservados.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/terms"
              >
                Termos de Serviço
              </Link>
              <Link
                className="text-xs hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/privacy"
              >
                Privacidade
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
