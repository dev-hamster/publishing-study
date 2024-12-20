import styled from '@emotion/styled';
import { SpaceMonoFont } from '../styles';
export { SpaceMonoFont, WorkSansFont } from '../styles';

export const FlexRowBox = styled.div`
  width: 100%;
  display: flex;
`;

export const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CaptionText = styled.p`
  ${SpaceMonoFont.base};
  color: #858584;
`;

export const DescriptionText = styled.p`
  ${SpaceMonoFont.base};
  color: #ffffff;
`;
