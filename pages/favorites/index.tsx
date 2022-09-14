import { NextPage } from 'next';
import { Layout } from '../../components/layout';

interface Props {

}

const FavoritesPage: NextPage<Props> = () => {
  return (
    <Layout title='Pokémon - Favorites'>
      <h1>Favorites Page</h1>
    </Layout>
  );
};

export default FavoritesPage;