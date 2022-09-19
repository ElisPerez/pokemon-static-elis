import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

// URL of front-end, domain name:
const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  // console.log(origin);
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Elis Antonio Perez' />
        <meta name='description' content={`Info about Pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={`Info about ${title}`} />
        <meta
          property='og:image'
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
