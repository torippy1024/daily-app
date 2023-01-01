import type {NextPage} from 'next';
import Layout from '../components/layouts/Layout';
import SitesContainer from '../components/sites';

const Home: NextPage = () => {
  return (
    <Layout>
      <SitesContainer />
    </Layout>
  );
};

export default Home;
