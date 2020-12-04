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
      <SEO description="Bumples homepage" title="Homepage" />
      <HomepageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;