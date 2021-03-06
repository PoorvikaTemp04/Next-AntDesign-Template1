import Head from 'next/head';

import Legends from '../../demos/vis/showcase-sections/legends-showcase';

const LegendsPage = () => (
  <>
    <Head>
      <link rel="stylesheet" href="/react-vis.css" />
    </Head>
    <Legends />
  </>
);

export default LegendsPage;
