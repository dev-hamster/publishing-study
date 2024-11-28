import { SpaceMonoFont, WorkSansFont } from '@/components/shared/font';
import styled from '@emotion/styled';

export { SpaceMonoFont, WorkSansFont } from './font';

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
  ${WorkSansFont.base};
  color: #ffffff;
`;
