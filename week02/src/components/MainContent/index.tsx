import styled from '@emotion/styled';

import IcoSearch from '@/assets/ico_magnifying_glass.svg?react';

const MainContent = () => {
  return (
    <ContentBlock>
      <Title>Browse Marketplace</Title>
      <Desc>Browse through more than 50k NFTs on the NFT Marketplace.</Desc>
      <SearchBlock>
        <SearchForm>
          <SearchInput placeholder='Search your favourite NFTs' />
          <SearchButton>
            <IcoSearch width={24} height={24} />
          </SearchButton>
        </SearchForm>
      </SearchBlock>
    </ContentBlock>
  );
};

export default MainContent;

const tabletBreakpoint = '834px';
const pcBreakpoint = '1280px';

const ContentBlock = styled.div`
  padding: 40px 30px;
  background: #2b2b2b;
  color: #fff;
  @media (min-width: ${tabletBreakpoint}) {
    padding: 60px 77px;
  }
  @media (min-width: ${pcBreakpoint}) {
    padding: 80px 115px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 39.2px;
`;
const Desc = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
`;

const SearchBlock = styled.div`
  margin-top: 30px;
`;

const SearchForm = styled.form`
  display: flex;
  padding: 18px 20px;
  border-radius: 20px;
  border: 1px solid #3b3b3b;
`;

const SearchInput = styled.input`
  flex: 1 1 auto;
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #858584;
  &::placeholder {
    color: #858584;
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
`;
