import styled from '@emotion/styled';

import thumb01 from '@/assets/thumb01.png';
import thumb02 from '@/assets/thumb02.png';
import thumb03 from '@/assets/thumb03.png';
import { default as user01 } from '@/assets/user01.png';

const CARD_DATA = [
  {
    thumb: thumb01,
    collections: [thumb02, thumb03],
    total: 1025,
    title: 'DSGN Animals',
    user: {
      profile: user01,
      name: 'MrFox',
    },
  },
  {
    thumb: thumb01,
    collections: [thumb02, thumb03],
    total: 3,
    title: 'DSGN Animals',
    user: {
      profile: user01,
      name: 'MrFox',
    },
  },
  {
    thumb: thumb01,
    collections: [thumb02, thumb03],
    total: 0,
    title: 'DSGN Animals',
    user: {
      profile: user01,
      name: 'MrFox',
    },
  },
  {
    thumb: thumb01,
    collections: [thumb02, thumb03],
    title: 'DSGN Animals',
    total: 1025,
    user: {
      profile: user01,
      name: 'MrFox',
    },
  },
  {
    thumb: thumb01,
    collections: [thumb02, thumb03],
    title: 'DSGN Animals',
    total: 1025,
    user: {
      profile: user01,
      name: 'MrFox',
    },
  },
  {
    thumb: thumb01,
    collections: [thumb02, thumb03],
    title: 'DSGN Animals',
    total: 1025,
    user: {
      profile: user01,
      name: 'MrFox',
    },
  },
];

const CollectionsCard = () => {
  return (
    <CardLayout>
      {CARD_DATA.map((card, idx) => {
        return (
          <Card key={idx}>
            <CardThumbnailBox>
              <CardThumbnail src={card.thumb} alt='' />
            </CardThumbnailBox>
            <CollectionListBlock>
              {card.collections.map((src, idx) => (
                <CollectionListItem key={idx}>
                  <img src={src} alt='' />
                </CollectionListItem>
              ))}
              {card.total > 0 && (
                <CollectionListItem>{card.total}+</CollectionListItem>
              )}
              {card.total === 0 && <CollectionListEmptyItem />}
            </CollectionListBlock>

            <CardContents>
              <TitleText>{card.title}</TitleText>
              <UserInfoBlock>
                <Profile src={card.user.profile} alt='' />
                <UserName>{card.user.name}</UserName>
              </UserInfoBlock>
            </CardContents>
          </Card>
        );
      })}
    </CardLayout>
  );
};

export default CollectionsCard;

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  grid-gap: 30px;
`;

const Card = styled.div`
  border-radius: 20px;
`;

const CardThumbnailBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 20px;
  overflow: hidden;
`;

const CollectionListBlock = styled.div`
  display: flex;
  gap: 15px;
  flex: 1 1 95px;
  margin-top: 15px;
`;

const CollectionListEmptyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const CollectionListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: #a259ff;
  font-family: Space Mono;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
  text-align: center;
  color: #fff;
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
  margin-top: 15px;
  color: #fff;
`;

const TitleText = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 30.8px;
`;

const UserInfoBlock = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
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
