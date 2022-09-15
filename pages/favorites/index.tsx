import { useEffect, useState } from 'react';

import { Layout } from '../../components/layout';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritesPokemon } from '../../components/pokemon/';

const FavoritesPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.allPokemon());
  }, []);

  return (
    <Layout title='Pokémon - Favorites'>
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon favoritesPokemon={favoritesPokemon} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
