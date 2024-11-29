import styled from '@emotion/styled';

import {
  CaptionText,
  DescriptionText,
  FlexColumnBox,
  FlexRowBox,
} from '@/shared/ui';

export const Creator = () => {
  return (
    <CreatorBlock>
      <CaptionText>Created By</CaptionText>
      <CreatorInfo>
        <DescriptionText>Dish Studio</DescriptionText>
      </CreatorInfo>
    </CreatorBlock>
  );
};

const CreatorInfo = styled(FlexRowBox)``;

const CreatorBlock = styled(FlexColumnBox)`
  gap: 5px;
  grid-area: creator;
`;
