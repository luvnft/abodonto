import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

// @ts-expect-error TODO fix it
export default function Hero({ hero }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Anderson Betioli"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="400"
            src={hero.image.url}
            width="400"
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
                  variant: "default" | "outline";
                }) => (
                  <Link href={button.url} key={button.text}>
                    <Button variant={button.variant}>{button.text}</Button>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
