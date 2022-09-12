import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray900.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0 20px',
        width: '100%',
      }}
    >
      <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} alt={'App Icon'} width={70} height={70} />

      <Text color='white' h2>
        P
      </Text>
      <Text color='white' h3>
        okémon
      </Text>

      <Spacer css={{flex: 1}}/>

      <Text color='white'>Favorites</Text>
    </div>
  );
};
