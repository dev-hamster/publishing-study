import styled from '@emotion/styled';

import IcoDiscord from '@/shared/assets/ico_discord_logo.svg?react';
import IcoEnvelop from '@/shared/assets/ico_envelope.svg?react';
import IcoInstagram from '@/shared/assets/ico_instagram_logo.svg?react';
import IcoLogo from '@/shared/assets/ico_logo.svg?react';
import IcoTwiiter from '@/shared/assets/ico_twitter_logo.svg?react';
import IcoYoutube from '@/shared/assets/ico_youtube_logo.svg?react';

function Footer() {
  return (
    <>
      <FooterLayout>
        <FooterContentContainer>
          <WebInfoBlock>
            <Logo>
              <IcoLogo />
              <LogoText> NFT Marketplace</LogoText>
            </Logo>
            <SiteMap>NFT marketplace UI created with Anima for Figma.</SiteMap>
            <CommunityBlock>
              <CommunityText>Join our community</CommunityText>
              <CommunityLogoList>
                <IcoDiscord />
                <IcoYoutube />
                <IcoTwiiter />
                <IcoInstagram />
              </CommunityLogoList>
            </CommunityBlock>
          </WebInfoBlock>
          <NavBlock>
            <Title>Explore</Title>
            <NavList>
              <NavItem>Marketplace</NavItem>
              <NavItem>Rankings</NavItem>
              <NavItem>Connect a wallet</NavItem>
            </NavList>
          </NavBlock>
          <SubscribeBlock>
            <Title>Join our weekly digest</Title>
            <Desc>
              Get exclusive promotions & updates straight to your inbox.
            </Desc>
            <SubscribeInput>
              <ButtonContainer>
                <EmailInput placeholder='Enter Your Email Address' />
                <SubscribeButton>
                  <IcoEnvelop />
                  Subscribe
                </SubscribeButton>
              </ButtonContainer>
            </SubscribeInput>
          </SubscribeBlock>
        </FooterContentContainer>
        <CopyRightBlock>
          <CopyRightText>Ⓒ NFT Market. Use this template freely.</CopyRightText>
        </CopyRightBlock>
      </FooterLayout>
    </>
  );
}

export default Footer;

const tabletBreakpoint = '834px';
const pcBreakpoint = '1280px';

const FooterLayout = styled.footer`
  padding: 40px 0;
  border-top: 2px solid #2b2b2b;
  background: #3b3b3b;
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 30px 30px;
  @media (min-width: ${pcBreakpoint}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 146.9px 30px;
  }
`;

const FooterContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WebInfoBlock = styled(FooterContentBlock)`
  @media (min-width: ${pcBreakpoint}) {
    max-width: 327.41px;
  }
`;

const Logo = styled.div`
  display: flex;
  gap: 12px;
`;
const LogoText = styled.p`
  font-family: 'Space Mono';
  color: #fff;
`;
const SiteMap = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #cccccc;
`;
const CommunityBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CommunityText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #cccccc;
`;

const CommunityLogoList = styled.div`
  display: flex;
  gap: 10px;
`;

const NavBlock = styled(FooterContentBlock)`
  @media (min-width: ${pcBreakpoint}) {
    width: 240px;
    max-width: 240px;
  }
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
`;
const NavItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #cccccc;
`;

const SubscribeBlock = styled(FooterContentBlock)`
  @media (min-width: ${pcBreakpoint}) {
    max-width: 420px;
  }
`;

const Title = styled.p`
  font-family: Space Mono;
  font-size: 22px;
  font-weight: 700;
  line-height: 35.2px;
  text-align: left;
  color: #fff;
`;

const SubscribeInput = styled.div``;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: #cccccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${pcBreakpoint}) {
    flex-direction: row;
    gap: 0px;
    width: 420px;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 16px 20px;
  border-radius: 20px;
  border: 1px;
  background: #fff;
  &::placeholder {
    color: #2b2b2b;
  }
`;

const SubscribeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 46px;
  border-radius: 20px;
  border: none;
  background: #a259ff;
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  text-align: center;
  color: #ffffff;
  @media (min-width: ${pcBreakpoint}) {
    width: 179px;
  }
`;

const CopyRightBlock = styled.div`
  padding: 20px 30px;
  border-top: 1px solid #858584;
  @media (min-width: ${tabletBreakpoint}) {
    padding: 20px 72px 0;
  }
  @media (min-width: ${pcBreakpoint}) {
    padding: 20px 115.5px 0;
  }
`;

const CopyRightText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 13.2px;
  color: #ccc;
`;
