import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout';

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout title='Some Pokemon'>
      <h1>
        `${id} - ${name}`
      </h1>
    </Layout>
  );
};

// Server Side:
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async ctx => {
  // const { data } = await  // your fetch function here

  return {
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?offset=24&limit=100');
  // console.log(`file: index.tsx | line 32 | data`, data);

  // const pokemon: SmallPokemon[] = data.results.map(poke => {
  //   const idArray = poke.url.split('/');
  //   const id = Number(idArray[idArray.length - 2]);
  // console.log(`file: index.tsx | line 37 | id`, id);

  //   return {
  //     ...poke,
  //     id,
  //     img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
  //   };
  // });

  return {
    props: {
      id: 25,
      name: 'Pikachu',
    },
  };
};

export default PokemonPage;
