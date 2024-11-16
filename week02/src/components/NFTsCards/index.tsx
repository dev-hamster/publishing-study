import styled from '@emotion/styled';

import thumb01 from '@/assets/thumb01.png';
import thumb02 from '@/assets/thumb02.png';
import thumb03 from '@/assets/thumb03.png';
import { default as user01, default as user03 } from '@/assets/user01.png';
import user02 from '@/assets/user02.png';

const CARD_DATA = [
  {
    thumb: thumb01,
    title: 'Distant Galaxy',
    user: {
      profile: user01,
      name: 'MoonDancer',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb02,
    title: 'Life On Edena',
    user: {
      profile: user02,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb03,
    title: 'Life On Edena',
    user: {
      profile: user03,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb01,
    title: 'Distant Galaxy',
    user: {
      profile: user01,
      name: 'MoonDancer',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb02,
    title: 'Life On Edena',
    user: {
      profile: user02,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb03,
    title: 'Life On Edena',
    user: {
      profile: user03,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb01,
    title: 'Distant Galaxy',
    user: {
      profile: user01,
      name: 'MoonDancer',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb02,
    title: 'Life On Edena',
    user: {
      profile: user02,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb03,
    title: 'Life On Edena',
    user: {
      profile: user03,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb01,
    title: 'Distant Galaxy',
    user: {
      profile: user01,
      name: 'MoonDancer',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb02,
    title: 'Life On Edena',
    user: {
      profile: user02,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
  {
    thumb: thumb03,
    title: 'Life On Edena',
    user: {
      profile: user03,
      name: 'NebulaKid',
    },
    price: 1.63,
    highestBid: 0.33,
  },
];

const NFTsCard = () => {
  return (
    <CardLayout>
      {CARD_DATA.map((card, idx) => {
        return (
          <Card key={idx}>
            <CardThumbnailBox>
              <CardThumbnail src={card.thumb} alt='' />
            </CardThumbnailBox>
            <CardContents>
              <TitleBlock>
                <TitleText>{card.title}</TitleText>
                <UserInfoBlock>
                  <Profile src={card.user.profile} alt='' />
                  <UserName>{card.user.name}</UserName>
                </UserInfoBlock>
              </TitleBlock>
              <PriceBlock>
                <PriceBox>
                  <SubTitle>Price</SubTitle>
                  <Price>{card.price}ETH</Price>
                </PriceBox>
                <HighestBidBox>
                  <SubTitle>HighestBid</SubTitle>
                  <Price>{card.highestBid} wETH</Price>
                </HighestBidBox>
              </PriceBlock>
            </CardContents>
          </Card>
        );
      })}
    </CardLayout>
  );
};

export default NFTsCard;

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  height: 402px;
  border-radius: 20px;
  background: #2b2b2b;
`;

const CardThumbnailBox = styled.div`
  width: 100%;
  height: 238px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;

const CardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 0px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const TitleText = styled.p`
  font-family: Work Sans;
  font-size: 22px;
  font-weight: 600;
  line-height: 30.8px;
`;

const UserInfoBlock = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const Profile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
`;

const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.2px;
`;

const HighestBidBox = styled(PriceBox)`
  align-items: flex-end;
`;

const SubTitle = styled.p`
  font-family: Space Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.2px;
  color: #858584;
`;

const Price = styled.p`
  font-family: Space Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.2px;
  color: #fff;
`;
