import { useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layout';
import { Pokemon } from '../../interfaces';
import { localFavorites } from '../../utils';
import { getPokemonInfo } from '../../utils/getPokemonInfo';
// import { useRouter } from 'next/router';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  // console.log(`🚀 pokemon`, pokemon);

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(prev => !prev);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 50,
      spread: 170,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={`Pokémon - ${pokemon.name.replace(/^\w/, c => c.toUpperCase())}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable clickable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || './no-image'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* <h1 style={{textTransform: 'capitalize'}}>{pokemon.name}</h1> */}
              <Text transform='capitalize' h1>{pokemon.name}</Text>
              <Button
                color={isInFavorites ? 'error' : 'gradient'}
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? 'Remove from Favorites' : 'Save to Favorites'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex'>
                <Image
                  alt={pokemon.name}
                  height={100}
                  src={pokemon.sprites.front_default}
                  width={100}
                />
                <Image
                  alt={pokemon.name}
                  height={100}
                  src={pokemon.sprites.back_default}
                  width={100}
                />
                <Image
                  alt={pokemon.name}
                  height={100}
                  src={pokemon.sprites.front_shiny}
                  width={100}
                />
                <Image
                  alt={pokemon.name}
                  height={100}
                  src={pokemon.sprites.back_shiny}
                  width={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// Server Side:
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async ctx => {
  const pokemon100 = [...Array(100)].map((value, index) => `${index + 25}`);
  // console.log({ pokemon100 });

  return {
    paths: pokemon100.map(value => ({
      params: {
        id: value,
      },
    })),
    fallback: false,
  };
};

// ctx: It's the context.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(`file: [id].tsx | line 40 | ctx`, ctx); // Destructuring to params

  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
    revalidate: 86400 // 60 * 60 * 24
  };
};

export default PokemonPage;
