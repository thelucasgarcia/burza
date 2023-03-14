/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function AboutContainer() {
  return (
    <section className="py-20 bg-gradient-to-tr from-neutral-800 to-black " id="about">
      <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <Image src="/img/about.gif" alt="cover" width={300} height={500} className="mx-auto sm:float-right rounded-lg " />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 sm:w-8/12">
          <div className="container float-left">
            <h1 className="text-green-300 uppercase text-3xl font-bold mb-5">I'm Burza</h1>
            <p className="text-white text-justify">
              João Augusto Bouglex é um DJ e produtor musical brasileiro, mais conhecido por seu projeto Burza. 
              Ele iniciou sua carreira na música eletrônica em 2019, mas foi em 2022 que lançou o projeto Burza, 
              que significa "tempestade" em algumas línguas eslavas, reflete a energia e a intensidade de suas apresentações ao vivo.
              Com sua técnica apurada e seleção musical cuidadosa, Burza DJ vem ganhando destaque na cena do Progressive Trance, 
              combinando melodias emotivas, batidas pulsantes e elementos atmosféricos para criar uma atmosfera envolvente na pista de dança. 
              Com um futuro promissor pela frente, Burza DJ é uma das novas promessas da música eletrônica brasileira.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}