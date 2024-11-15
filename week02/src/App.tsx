import styled from '@emotion/styled';

import NFTsCard from '@/components/NFTsCards';

function App() {
  return (
    <NFTCardContainer>
      <NFTsCard />
    </NFTCardContainer>
  );
}

export default App;

const NFTCardContainer = styled.div`
  padding: 0 30px;
  background: #3b3b3b;

  @media (min-width: 834px) {
    padding: 0 70px;
  }

  @media (min-width: 1280px) {
    padding: 0 115px;
  }
`;
