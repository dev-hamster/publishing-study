import { CaptionText, FlexColumnBox } from '@/components/shared';
import styled from '@emotion/styled';

export const Tags = () => {
  return (
    <TagsBlock>
      <CaptionText>Tags</CaptionText>
      {TAG_LIST.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsBlock>
  );
};

const TAG_LIST = ['ANIMATION', 'ILLUSTRATION', 'MOON', 'MOON'];

const Tag = styled.div`
  width: fit-content;
  padding: 12px 30px;
  border-radius: 20px;
  background: #3b3b3b;
  color: #ffffff;
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
`;

const TagsBlock = styled(FlexColumnBox)`
  gap: 20px;
  grid-area: tags;
`;
