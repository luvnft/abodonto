import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

// @ts-expect-error TODO fix it
export default function Hero({ hero }) {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="pt-12 md:pt-0 grid gap-6 md:grid-cols-[1fr_auto] md:gap-12 lg:grid-cols-[1fr_400px] lg:gap-0 xl:grid-cols-[1fr_auto]">
          <div className="flex flex-col justify-center space-y-4 items-center md:items-start md:pb-12 lg:pb-0">
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {hero.titulo}
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                {hero.texto}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {hero.buttons.map(
                (button: {
                  text: string;
                  url: string;
                  variant: 'default' | 'outline';
                }) => (
                  <Link href={button.url} key={button.text}>
                    <Button variant={button.variant}>{button.text}</Button>
                  </Link>
                ),
              )}
            </div>
          </div>
          <Image
            src={'/ander.png'}
            alt="Anderson Betioli"
            height="800"
            width="800"
            className="mx-auto w-2/3 md:w-auto object-cover object-center"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
