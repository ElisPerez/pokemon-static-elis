import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

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
      <Image
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
        alt={'App Icon'}
        width={70}
        height={70}
      />

      <NextLink href={'/'} passHref>
        <Link>
          {/* <h2 style={{ color: 'white' }}>P</h2>
          <h3 style={{ color: 'white' }}>okémon</h3> */}
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href={'/favorites'} passHref>
        <Link>
          <Text color='white'>Favorites</Text>
        </Link>
      </NextLink>
      {/* <p style={{ color: 'white' }}>Favorites</p> */}
    </div>
  );
};
