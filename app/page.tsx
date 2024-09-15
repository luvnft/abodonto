import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Clock,
  DrillIcon,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import client from "../lib/graphQLClient";
import pageQuery from "./queries/page.graphql";
import Image from "next/image";

export default async function HomePage() {
  const { data } = await client.query({
    query: pageQuery,
    variables: { slug: "home" },
  });
  const { hero } = data.pagina;

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b border-[#be955f] bg-white bg-opacity-90">
        <Link className="flex items-center justify-center" href="#">
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
            href="#servicos"
          >
            Serviços
          </Link>
          <Link
            className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
            href="#sobre"
          >
            Sobre
          </Link>
          <Link
            className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
            href="#contato"
          >
            Contato
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Anderson Betioli"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="400"
                src="/ander.jpg"
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
                  <Button className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] text-black font-semibold hover:from-[#a17a4a] hover:to-[#d1a970] transition-all duration-300">
                    Agendar Consulta
                  </Button>
                  <Button
                    className="bg-transparent text-[#be955f] border border-[#be955f] hover:bg-gradient-to-r hover:from-[#be955f] hover:to-[#e2c08d] hover:text-black transition-all duration-300"
                    variant="outline"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="servicos"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                alt="Procedimento de implante dentário"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="400"
                src="/implantes.jpg"
                width="400"
              />
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
                <Button className="w-fit bg-gradient-to-r from-[#be955f] to-[#e2c08d] text-black font-semibold hover:from-[#a17a4a] hover:to-[#d1a970] transition-all duration-300">
                  Saiba Mais Sobre Implantes
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 lg:order-last">
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
                <Button className="w-fit bg-gradient-to-r from-[#be955f] to-[#e2c08d] text-black font-semibold hover:from-[#a17a4a] hover:to-[#d1a970] transition-all duration-300">
                  Descubra as Facetas
                </Button>
              </div>
              <Image
                alt="Antes e depois de facetas dentárias"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="400"
                src="/faceta.jpg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                alt="Procedimento de clareamento dental"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="400"
                src="/clareamento.jpg"
                width="400"
              />
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
                <Button className="w-fit bg-gradient-to-r from-[#be955f] to-[#e2c08d] text-black font-semibold hover:from-[#a17a4a] hover:to-[#d1a970] transition-all duration-300">
                  Explore o Clareamento Dental
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 lg:order-last">
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
                <Button className="w-fit bg-gradient-to-r from-[#be955f] to-[#e2c08d] text-black font-semibold hover:from-[#a17a4a] hover:to-[#d1a970] transition-all duration-300">
                  Conheça a Gengivoplastia
                </Button>
              </div>
              <Image
                alt="Procedimento de gengivoplastia"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="400"
                src="/gengivoplastia.jpg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section
          id="sobre"
          className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
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
                  pacientes satisfeitos têm a dizer sobre sua experiência
                  conosco.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-500 italic">
                    Sempre fiquei ansioso com consultas odontológicas, mas a
                    equipe aqui me fez sentir muito confortável. A abordagem
                    gentil e as técnicas modernas tornaram meu tratamento
                    indolor!
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
          className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
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
              <form className="flex space-x-2">
                <Input
                  className="flex-1 bg-white text-black placeholder-gray-500"
                  placeholder="Digite seu e-mail"
                  type="email"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] text-black font-semibold hover:from-[#a17a4a] hover:to-[#d1a970] transition-all duration-300"
                >
                  Agendar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-400">
                Entraremos em contato em até 24 horas para confirmar sua
                consulta.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#be955f]">
        <p className="text-xs text-gray-500">
          © 2023 Anderson Betioli Odontologia Avançada. Todos os direitos
          reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
            href="#"
          >
            Termos de Serviço
          </Link>
          <Link
            className="text-xs hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
            href="#"
          >
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
