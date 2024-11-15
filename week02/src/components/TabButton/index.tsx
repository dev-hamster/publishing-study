import styled from '@emotion/styled';

const TabButton = ({
  tab,
  handleClick,
}: {
  tab: 'NFTs' | 'Collections';
  handleClick: (tab: 'NFTs' | 'Collections') => void;
}) => {
  return (
    <TabBlock>
      <TabButtonContainer
        activate={tab === 'NFTs'}
        onClick={() => {
          handleClick('NFTs');
        }}
      >
        <TabButtonContent>
          NFTs
          <Badge activate={tab === 'NFTs'}>302</Badge>
        </TabButtonContent>
      </TabButtonContainer>
      <TabButtonContainer
        activate={tab === 'Collections'}
        onClick={() => {
          handleClick('Collections');
        }}
      >
        <TabButtonContent>
          Collections<Badge activate={tab === 'Collections'}>37</Badge>
        </TabButtonContent>
      </TabButtonContainer>
    </TabBlock>
  );
};

export default TabButton;

const tabletBreakpoint = '834px';

const TabBlock = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;

const TabButtonContainer = styled.button<{ activate?: boolean }>`
  flex: 1 1 auto;
  border: none;
  border-bottom: ${({ activate }) => (activate ? '2px solid #858584' : 'none')};
  background: transparent;
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  color: ${({ activate }) => (activate ? '#fff' : '#858584')};
  cursor: pointer;
`;

const TabButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Badge = styled.div<{ activate?: boolean }>`
  display: none;
  padding: 5px 10px;
  border-radius: 20px;
  background: ${({ activate }) => (activate ? '#858584' : '#3B3B3B')};
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #fff;

  @media (min-width: ${tabletBreakpoint}) {
    display: block;
  }
`;
