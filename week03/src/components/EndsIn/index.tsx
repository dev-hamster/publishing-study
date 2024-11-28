import { FlexColumnBox, FlexRowBox } from '@/components/shared';
import { SpaceMonoFont } from '@/components/shared/font';
import styled from '@emotion/styled';

export const EndsIn = () => {
  return (
    <EndsInBlock>
      <FlexColumnBox style={{ gap: '10px' }}>
        <Caption>Auction ends in:</Caption>
        <EndsInTimeBlock>
          <TimeBox>
            <p>59</p>
            <TimeText>Time</TimeText>
          </TimeBox>
          <TimeBox>:</TimeBox>
          <TimeBox>
            <p>59</p>
            <TimeText>Minutes</TimeText>
          </TimeBox>
          <TimeBox>:</TimeBox>
          <TimeBox>
            <p>59</p>
            <TimeText>Seconds</TimeText>
          </TimeBox>
        </EndsInTimeBlock>
      </FlexColumnBox>
      <Button>
        <ButtonText>Place Bid</ButtonText>
      </Button>
    </EndsInBlock>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  background-color: #a259ff;
`;

const ButtonText = styled.span`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  color: #fff;
`;

const TimeBox = styled(FlexColumnBox)`
  flex: 1 1 auto;
  gap: 5px;
  ${SpaceMonoFont.h3}
`;

const TimeText = styled.span`
  ${SpaceMonoFont.caption};
  color: #ffffff;
`;

const EndsInTimeBlock = styled(FlexRowBox)`
  gap: 10px;
  ${SpaceMonoFont.h4};
  color: #fff;
`;

const EndsInBlock = styled(FlexColumnBox)`
  gap: 30px;
  width: 100%;
  height: min-content;
  padding: 30px;
  border-radius: 20px;
  background: #3b3b3b;
  grid-area: endsIn;
  height: fit-content;
`;

const Caption = styled.p`
  color: #fff;
  ${SpaceMonoFont.caption};
`;
