import styled from '@emotion/styled';
import { useState } from 'react';

import CollectionsCard from '@/components/CollectionsCard';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import NFTsCard from '@/components/NFTsCards';
import TabButton from '@/components/TabButton';

function App() {
  const [tab, setTab] = useState<'NFTs' | 'Collections'>('NFTs');

  return (
    <>
      <Header />
      <MainContent />

      <TabContainer>
        <TabButton tab={tab} handleClick={(tab) => setTab(tab)} />
      </TabContainer>

      <NFTsCardContainer>
        {tab === 'NFTs' && <NFTsCard />}
        {tab === 'Collections' && <CollectionsCard />}
      </NFTsCardContainer>

      <Footer />
    </>
  );
}

export default App;

const tabletBreakpoint = '834px';
const pcBreakpoint = '1280px';

const Container = styled.div`
  padding: 0 30px;

  @media (min-width: ${tabletBreakpoint}) {
    padding: 0 70px;
  }

  @media (min-width: ${pcBreakpoint}) {
    padding: 0 115px;
  }
`;

const TabContainer = styled(Container)`
  background: #2b2b2b;
`;

const NFTsCardContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #3b3b3b;
  @media (min-width: ${tabletBreakpoint}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
