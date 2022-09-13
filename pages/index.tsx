import type { NextPage, GetStaticProps } from 'next'; // OR... import { NextPage } from 'next' It's the same
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../api';

import { Layout } from '../components/layout';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title="Pokemon's List">
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(({ id, name, img }) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card hoverable clickable>
              <Card.Body css={{p: 1}}>
                <Card.Image src={img} width='70%' height='70%'/>
              </Card.Body>
              <Card.Footer>
                <Row justify='space-between'>
                  <Text transform='capitalize'>{name}</Text>
                  <Text># {id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

// Only use in the Pages:
export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?offset=24&limit=100');
  console.log(`file: index.tsx | line 32 | data`, data);

  const pokemons: SmallPokemon[] = data.results.map(poke => {
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
      pokemons,
    },
  };
};

export default HomePage;
