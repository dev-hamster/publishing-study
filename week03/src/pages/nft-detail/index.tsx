import styled from '@emotion/styled';

import Footer from '@/shared/ui/Footer';
import Header from '@/shared/ui/Header';

import { Creator } from './ui/Creator';
import { Details } from './ui/Deatails';
import { Description } from './ui/Description';
import { EndsIn } from './ui/EndsIn';
import { Tags } from './ui/Tags';
import { Title } from './ui/Title';

export const NftDetailPage = () => {
  return (
    <>
      <Header />
      <HeroImage />
      <ContentsContainer>
        <Title />
        <Creator />
        <Description />
        <Details />
        <Tags />
        <EndsIn />
      </ContentsContainer>
      <Footer />
    </>
  );
};

const ContentsContainer = styled.div`
  gap: 20px;
  padding: 40px 30px;
  background: #2b2b2b;
  display: grid;
  grid-template-areas:
    'title'
    'endsIn'
    'creator'
    'description'
    'details'
    'tags';

  @media (min-width: 834px) {
    padding: 40px 72px;
    grid-template-columns: 1fr 295px;
    grid-template-areas:
      'title title endsIn'
      'creator creator endsIn'
      'description description endsIn'
      'details details .'
      'tags tags .';
    column-gap: 30px;
  }

  @media (min-width: 1280px) {
    padding: 40px 115px;
    column-gap: 150px;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 320px;
  background: #2b2b2b;
`;
