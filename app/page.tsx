"use client";

import Head from "next/Head";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo Colati Gimenes Silva | Portfólio</title>
        <meta
          name="description"
          content="Portfólio de Enzo Colati Gimenes Silva - Estudante de tecnologia, e desenvolvedor web em ascensão."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main
        className="scroll-smooth bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans pt-16"
        tabIndex={-1}
      >
        {/* Seção Início */}
        <section
          id="inicio"
          role="region"
          aria-label="Seção Início"
          tabIndex={-1}
          className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
        >
          <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            Enzo Colati Gimenes Silva
          </h1>
          <p className="mt-6 text-xl max-w-2xl text-gray-300">
            Estudante de tecnologia com grande interesse em coisas novas, desenvolvimento web e
            desenvolvimento de sistemas. Futuro engenheiro de software.
          </p>
          <a
            href="#projetos"
            className="mt-10 text-cyan-400 hover:underline text-lg animate-bounce"
          >
            Ver projetos ↓
          </a>
        </section>

        {/* Seção Projetos */}
        <section
          id="projetos"
          role="region"
          aria-label="Seção Projetos e Conquistas"
          tabIndex={-1}
          className="min-h-screen px-6 py-16 bg-[#1e1e2f]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">
            Projetos & Conquistas
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <article className="bg-[#2a2a40] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300">GYMZUSS Pass</h3>
              <p className="mt-2 text-gray-300">
                Aplicação web desenvolvida como TCC na ETEC Camargo Aranha. Focada em ajudar
                o encontro de personais especializados e com disponibilidade proximo de voce.
              </p>
            </article>

            <article className="bg-[#2a2a40] p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-300">Cursos Cisco</h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>✅ Conceitos Básicos de Rede</li>
                <li>⏳ Em andamento: Introdução à Cibersegurança</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Seção Sobre */}
        <section
          id="sobre"
          role="region"
          aria-label="Seção Sobre Mim"
          tabIndex={-1}
          className="min-h-screen px-6 py-16 bg-[#1a1a2e]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4">
            <p>
              Estou indo para o segundo semestre da faculdade e finalizando meu curso técnico na ETEC
              Camargo Aranha, com grande interesse em desenvolvimento web, redes e
              cibersegurança.
            </p>
            <p>
              Curso Engenharia de Software na faculdade Sao Judas e pretendo trabalhar com soluções
              tecnológicas que ajudem a sociedade e melhore a experienca das pessoas na internet.
            </p>
            <p>
              Gosto de estudar, fazer cursos online, e
              também relaxar jogando no PC.
            </p>
          </div>
        </section>

        {/* Seção Contato */}
        <section
          id="contato"
          role="region"
          aria-label="Seção Contato"
          tabIndex={-1}
          className="min-h-screen px-6 py-16 bg-[#10101a]"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-purple-400">Contato</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-300 space-y-4 text-center">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:enzocgsilva@gmail.com"
                className="text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                enzocgsilva@gmail.com
              </a>
            </p>
            <p>
              <strong>Telefone:</strong>{" "}
              <a
                href="tel:+5511991906305"
                className="text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                (11) 99190-6305
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/EnzoSilva23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                github.com/EnzoSilva23
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
