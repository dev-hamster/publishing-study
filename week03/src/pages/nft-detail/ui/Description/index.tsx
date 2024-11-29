import styled from '@emotion/styled';

import { CaptionText, DescriptionText, FlexColumnBox } from '@/shared/ui';

export const Description = () => {
  return (
    <DescriptionBlock>
      <CaptionText>Description</CaptionText>
      <DescriptionText>
        <p>
          The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
          blockchain,there are all sorts of beings in the NFT Universe. The most
          advanced and friendly of the bunch are Orbitians.
        </p>
        <br />
        <p>
          They live in a metal space machines, high up in the sky and only have
          one foot on Earth. These Orbitians are a peaceful race, but they have
          been at war with a group of invaders for many generations. The
          invaders are called Upside-Downs, because of their inverted bodies
          that live on the ground, yet do not know any other way to be.
        </p>
        <br />
        <p>
          Upside-Downs believe that they will be able to win this war if they
          could only get an eye into Orbitian territory, so they've taken to
          make human beings their target.
        </p>
      </DescriptionText>
    </DescriptionBlock>
  );
};

const DescriptionBlock = styled(FlexColumnBox)`
  gap: 5px;
  grid-area: description;
`;
