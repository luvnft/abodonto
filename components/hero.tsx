import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

// @ts-expect-error TODO fix it
export default function Hero({ hero }) {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <Image
            src={'/ander.png'}
            alt="Anderson Betioli"
            height={600}
            width={600}
            className="mx-auto sm:w-full lg:order-last object-cover object-center"
            priority={true}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
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
        </div>
      </div>
    </section>
  );
}
