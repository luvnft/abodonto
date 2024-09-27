import Hero from '@/components/hero';
import LazyLoaderObserver from '@/components/ui/LazyLoadObserver';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import client from '@/graphql/client';
import { Pagina } from '@/graphql/gql/graphql';
import pageQuery from '@/graphql/queries/page.graphql';
import {
  ChevronRight,
  Clock,
  DrillIcon,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const { data } = await client.query<{ pagina: Pagina }>({
    query: pageQuery,
    variables: {
      slug: 'home',
    },
  });
  const { hero } = data.pagina;

  return (
    <main className="flex-1">
      {hero && <Hero hero={hero} />}
      <section
        id="servicos"
        className="w-full py-12 md:py-24 lg:py-32 bg-black"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                Nossos Serviços
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Oferecemos uma ampla gama de serviços odontológicos para
                melhorar seu sorriso e manter sua saúde bucal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 text-[#be955f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center justify-items-center">
            <Image
              alt="Procedimento de implante dentário"
              className="rounded-xl w-full max-w-[400px] aspect-square object-cover"
              height="400"
              src="/implantes.jpg"
              width="400"
            />
            <LazyLoaderObserver>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <DrillIcon className="w-4 h-4 text-[#be955f]" />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                      Implantes
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Restaure seu sorriso com nossas soluções avançadas de
                    implantes dentários. Nossos implantes oferecem uma
                    substituição permanente e natural para dentes ausentes,
                    melhorando tanto a função quanto a estética.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li>• Solução duradoura e resistente</li>
                  <li>• Preserva a saúde do osso maxilar</li>
                  <li>• Melhora a fala e a capacidade de mastigação</li>
                  <li>• Aprimora a estrutura facial</li>
                </ul>
                <Link href="https://wa.me/5544997381613?text=Olá, gostaria de saber mais sobre implantes">
                  <Button className="w-fit">Saiba Mais Sobre Implantes</Button>
                </Link>
              </div>
            </LazyLoaderObserver>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center justify-items-center">
            <LazyLoaderObserver>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Smile className="w-4 h-4 text-[#be955f]" />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                      Facetas
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Transforme seu sorriso com nossas facetas de porcelana
                    personalizadas. Projetadas para melhorar a aparência dos
                    seus dentes, nossas facetas aumentam sua confiança e
                    proporcionam um sorriso digno de Hollywood.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Corrige descoloração, lascas e desalinhamentos</li>
                  <li>• Procedimento minimamente invasivo</li>
                  <li>• Resultados com aparência natural</li>
                  <li>• Resistente a manchas e duradouro</li>
                </ul>
                <Link href="https://wa.me/5544997381613?text=Olá, gostaria de saber mais sobre facetas">
                  <Button className="w-fit">Descubra as Facetas</Button>
                </Link>
              </div>
            </LazyLoaderObserver>
            <Image
              alt="Antes e depois de facetas dentárias"
              className="rounded-xl w-full max-w-[400px] aspect-square object-cover"
              height="400"
              src="/faceta.jpg"
              width="400"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 text-[#be955f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6  md:grid-cols-2 md:gap-12 items-center justify-items-center">
            <Image
              alt="Procedimento de clareamento dental"
              className="rounded-xl w-full max-w-[400px] aspect-square object-cover"
              height="400"
              src="/clareamento.jpg"
              width="400"
            />
            <LazyLoaderObserver>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#be955f]" />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                      Clareamento
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Ilumine seu sorriso com nossos tratamentos profissionais de
                    clareamento dental. Nossos serviços de clareamento removem
                    manchas e descoloração, proporcionando um sorriso branco e
                    deslumbrante que ilumina o ambiente.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li>• Resultados rápidos e eficazes</li>
                  <li>• Procedimento seguro e confortável</li>
                  <li>• Planos de tratamento personalizados</li>
                  <li>• Efeitos duradouros com cuidados adequados</li>
                </ul>
                <Link href="https://wa.me/5544997381613?text=Olá, gostaria de saber mais sobre clareamento dental">
                  <Button className="w-fit">
                    Explore o Clareamento Dental
                  </Button>
                </Link>
              </div>
            </LazyLoaderObserver>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center justify-items-center">
            <LazyLoaderObserver>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Scissors className="w-4 h-4 text-[#be955f]" />
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                      Gengivoplastia
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Aprimore a linha da sua gengiva com nossos procedimentos de
                    contorno gengival. A gengivoplastia melhora a estética do
                    seu sorriso e promove uma melhor saúde bucal, remodelando e
                    esculpindo suas gengivas.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Corrige linhas gengivais irregulares</li>
                  <li>• Reduz a exposição excessiva da gengiva</li>
                  <li>• Melhora a estética geral do sorriso</li>
                  <li>• Técnica minimamente invasiva</li>
                </ul>
                <Link href="https://wa.me/5544997381613?text=Olá, gostaria de saber mais sobre gengivoplastia">
                  <Button className="w-fit">Conheça a Gengivoplastia</Button>
                </Link>
              </div>
            </LazyLoaderObserver>
            <Image
              alt="Procedimento de gengivoplastia"
              className="rounded-xl w-full max-w-[400px] aspect-square object-cover"
              width="400"
              height="400"
              src="/gengivoplastia.jpg"
            />
          </div>
        </div>
      </section>
      <section
        id="sobre"
        className="w-full py-12 md:py-24 lg:py-32 bg-black text-[#be955f]"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                Por Que Nos Escolher?
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Combinamos tecnologia de ponta com atendimento compassivo para
                proporcionar a melhor experiência odontológica possível.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <Shield className="mx-auto h-12 w-12 text-[#be955f]" />
              <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                Tecnologia Avançada
              </h3>
              <p className="text-sm text-center text-gray-400">
                Equipamentos de última geração para diagnósticos precisos e
                tratamentos confortáveis.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Clock className="mx-auto h-12 w-12 text-[#be955f]" />
              <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                Horários Convenientes
              </h3>
              <p className="text-sm text-center text-gray-400">
                Agendamento flexível para se adequar ao seu estilo de vida
                agitado, incluindo consultas noturnas e aos fins de semana.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Star className="mx-auto h-12 w-12 text-[#be955f]" />
              <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                Equipe Especializada
              </h3>
              <p className="text-sm text-center text-gray-400">
                Profissionais altamente qualificados e experientes dedicados à
                sua saúde bucal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                O Que Nossos Pacientes Dizem
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Não acredite apenas em nossas palavras. Veja o que nossos
                pacientes satisfeitos têm a dizer sobre sua experiência conosco.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <p className="text-gray-500 italic">
                  Sempre fiquei ansioso com consultas odontológicas, mas a
                  equipe aqui me fez sentir muito confortável. A abordagem
                  gentil e as técnicas modernas tornaram meu tratamento indolor!
                </p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                  - Sara Silva
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <p className="text-gray-500 italic">
                  A equipe é incrivelmente amigável e profissional. Eles
                  explicaram cada etapa do meu tratamento e garantiram que eu
                  estivesse confortável durante todo o processo. Não poderia
                  estar mais feliz com meu novo sorriso!
                </p>
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                  - Miguel Santos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="w-full py-12 md:py-24 lg:py-32 bg-black text-[#be955f]"
      >
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
              Pronto para o Seu Melhor Sorriso?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Agende sua consulta hoje e dê o primeiro passo em direção a um
              sorriso mais saudável e confiante.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="https://wa.me/5544997381613?text=Olá, gostaria de agendar uma consulta">
              <Button type="submit">Agendar consulta</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
