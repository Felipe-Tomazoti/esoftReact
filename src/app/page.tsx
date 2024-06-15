import React from "react";
import Header from "./components/Header/header";
import CardSection from "./components/CardSection/cardSection";

export default function Home() {
  return (
    <div>
      <header>
        <Header titulo={'Squirtle'} />
      </header>

      <main >
        <section>
          <CardSection titulo={'Informações sobre Squirtle'}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
              alt="Squirtle - Pokémon do tipo Água"
            />
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png"
              alt="Squirtle - Pokémon do tipo Água"
            />
            <p>
              Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.
            </p>
          </CardSection>
          <CardSection titulo={'Características'}>
            <p>
              Squirtle é conhecido por sua concha nas costas, que oferece proteção
              adicional. Ele possui ataques de água poderosos, como Water Gun e
              Hydro Pump.
            </p>
          </CardSection>
          <CardSection titulo={'Curiosidades'}>
            <ul>
              <li>
                Squirtle é um dos Pokémon mais populares e adoráveis.
              </li>
              <li>
                Seu nome deriva das palavras "squirrel" (esquilo) e "turtle"
                (tartaruga).
              </li>
              <li>
                Squirtle é frequentemente escolhido por treinadores para começar sua
                jornada Pokémon.
              </li>
            </ul>
          </CardSection>
          <CardSection titulo={'Squirtle: O Amigo Aquático'}>
            <p>
              Squirtle, com sua aparência simpática e sua habilidade em controlar a
              água, conquistou o coração de treinadores Pokémon ao redor do mundo.
              Sendo o inicial de água na região de Kanto, Squirtle é uma escolha
              popular para aqueles que buscam equilíbrio e versatilidade em suas
              equipes.
            </p>
            <p>
              Sua concha nas costas não apenas oferece proteção, mas também é um
              símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
              para Blastoise, Squirtle se transforma em uma força formidável,
              dominando ataques aquáticos que podem surpreender adversários em
              batalhas.
            </p>
            <p>
              Além de suas habilidades de batalha, Squirtle é conhecido por seu
              carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle
              como uma amizade profunda, tornando-o não apenas um companheiro de
              lutas, mas um amigo leal ao longo de suas jornadas.
            </p>
          </CardSection>
          <CardSection titulo={'Recursos Adicionais'}>
          <ul>
          <li>
            <a
              href="https://www.pokemon.com/br/pokedex/squirtle"
              target="_blank"
              >Pokédex - Squirtle</a>
          </li>
          <li>
            <a
              href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
              target="_blank"
              >Bulbapedia - Squirtle</a>
          </li>
        </ul>
          </CardSection>
          <CardSection titulo={'Evoluções'}>
          <ul>
          <li>
            <figure>
              <a href="pokemon.html?evolucao=Squirtle">
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
                alt="Squirtle"
              />
            </a>
              <figcaption>1. Squirtle</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <a href="pokemon.html?evolucao=Wartortle">
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
                alt="Wartortle"
              />
            </a>
              <figcaption>2. Wartortle</figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <a href="pokemon.html?evolucao=Blastoise">
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
                alt="Blastoise"
              />
            </a>
              <figcaption>3. Blastoise</figcaption>
            </figure>
          </li>
        </ul>
          </CardSection>
        </section>
      </main>
    </div>
  );
}
