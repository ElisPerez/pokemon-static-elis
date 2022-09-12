import type { NextPage, GetStaticProps } from 'next'; // OR... import { NextPage } from 'next' It's the same
import { Layout } from '../components/layout';

const HomePage: NextPage = (props) => {
  console.log({props});
  return (
    <Layout title="Pokemon's List">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

// Only use in the Pages:
export const getStaticProps: GetStaticProps = async ctx => {
  console.log('Hello world');

  return {
    props: {
      name: 'Elis Antonio'
    },
  };
};

export default HomePage;
