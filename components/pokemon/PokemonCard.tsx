import { Card, Grid, Row, Text } from '@nextui-org/react';

import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces';

interface Props {
  pokemon: SmallPokemon;
}


export const PokemonCard: React.FC<Props> = ({ pokemon: { id, img, name } }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width='70%' height='70%' />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            {/* <p style={{textTransform: 'capitalize'}}>{name}</p>
            <p># {id}</p> */}
            <Text transform='capitalize'>{name}</Text>
            <Text># {id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
