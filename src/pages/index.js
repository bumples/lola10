import React from 'react';

import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  return (
    <Layout>
      <SEO description="Bumples homepage" title="Bumple Books" />
      <HomepageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured Books'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured Books'
      ) && <FeaturedProducts />}
      
    </Layout>
  );
};

export default IndexPage;