import { FlexColumnBox } from '@/components/shared';
import { WorkSansFont } from '@/components/shared/font';
import styled from '@emotion/styled';

export const Title = () => {
  return (
    <TitleBlock>
      <TitleText>The Orbitians</TitleText>
      <Desc>Minted on Sep 30, 2022</Desc>
    </TitleBlock>
  );
};

const TitleBlock = styled(FlexColumnBox)`
  gap: 10px;
  grid-area: title;
`;

const TitleText = styled.h1`
  color: #ffffff;
  ${WorkSansFont.h4};
`;

const Desc = styled.p`
  color: #ffffff;
  ${WorkSansFont.base};
`;
