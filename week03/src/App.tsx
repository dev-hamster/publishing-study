import styled from '@emotion/styled';

import { Creator } from '@/components/Creator';
import { Details } from '@/components/Deatails';
import { Description } from '@/components/Description';
import { EndsIn } from '@/components/EndsIn';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Tags } from '@/components/Tags';
import { Title } from '@/components/Title';

function App() {
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
}

export default App;

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
  // TODO 고정 높이를 줘야하나?
  width: 100%;
  height: 320px;
  background: #2b2b2b;
`;
