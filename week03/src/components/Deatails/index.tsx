import styled from '@emotion/styled';
import { CaptionText, FlexColumnBox } from '../shared';
import { WorkSansFont } from '../shared/font';

export const Details = () => {
  return (
    <DetailsBlock>
      <CaptionText>Details</CaptionText>
      <DetailItem>View on Etherscan</DetailItem>
      <DetailItem>View on Etherscan</DetailItem>
    </DetailsBlock>
  );
};

const DetailItem = styled.div`
  color: #fff;
  ${WorkSansFont.base};
`;

const DetailsBlock = styled(FlexColumnBox)`
  gap: 5px;
  grid-area: details;
`;
