import type { NextPage, GetStaticProps } from 'next'; // OR... import { NextPage } from 'next' It's the same
import { Grid } from '@nextui-org/react';
import { pokeApi } from '../api';

import { Layout } from '../components/layout';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemon: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemon }) => {
  // console.log(pokemon);

  return (
    <Layout title='Pokémon List'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemon.map((poke) => (
          <PokemonCard pokemon={poke} key={poke.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// Only use in the Pages:
export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?offset=24&limit=100');
  // console.log(`file: index.tsx | line 32 | data`, data);

  const pokemon: SmallPokemon[] = data.results.map(poke => {
    const idArray = poke.url.split('/');
    const id = Number(idArray[idArray.length - 2]);
    // console.log(`file: index.tsx | line 37 | id`, id);

    return {
      ...poke,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });

  return {
    props: {
      pokemon,
    },
  };
};

export default HomePage;
