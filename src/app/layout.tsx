import type { Metadata } from 'next';
import ThemeProvider from '@/components/provider/ThemeProvider';
import Header from '@/components/Header';
import { inter } from "./fonts";
import './globals.css';


export const metadata: Metadata = {
  title: 'Marco Tortolani',
  description:
    'Frontend developer apasionado por la creatividad y la precisión en cada línea de código. Constantemente buscando nuevas formas de mejorar la experiencia del usuario. Comprometido con el trabajo en equipo y el aprendizaje continuo. No todo es programar, también disfruto de la música, las películas y soy un entusiasta de Star Wars y los videojuegos.',
  keywords: [
    'Front',
    'Developer',
    'JavaScript',
    'ReactJS',
    'NextJS',
    'TailwindCSS',
    'HTML',
    'CSS',
    'Web Development',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} relative scroll-smooth flex flex-col items-center `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
