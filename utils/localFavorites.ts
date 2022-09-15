const toggleFavorite = (id: number) => {
  if (typeof window === 'undefined') return false;
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  // typeof window: check that only the front reads the localStorage. (The server does not)
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

const allPokemon = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

// This error is because an anonymous object is being exported by default. It is valid but not recommended
export default {
  toggleFavorite,
  existInFavorites,
  allPokemon,
};
