import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface Props {
  favoritesPokemon: number[];
}
export const FavoritesPokemon: React.FC<Props> = ({ favoritesPokemon }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritesPokemon.map(id => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
