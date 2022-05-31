import styled from 'styled-components';
import Layout from '../components/Layout';
import PageLink from 'components/PageLink';

const Title = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 3.5vw;
  color: ${(props) => (props.primary ? '#00953B' : '#666666')};
  font-family: ${(props) => (props.primary ? 'Myriad Pro Regular' : 'Myriad Pro Light')};
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Subtitle = styled.h2`
  font-family: 'Myriad Pro Light';
  font-size: 1.4vw;
  letter-spacing: 0.05rem;
  position: relative;
  top: -0.5rem;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const TitleAndSubtitleWrapper = styled.div`
  padding: 2rem 1.5rem;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const PageLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: start;
  }
`;

const PromotionalVideo = () => {
  return (
    <Layout>
      <TitleAndLinkWrapper>
        <TitleAndSubtitleWrapper>
          <TitleWrapper>
            <Title primary="true">KISWEL</Title>
            <Title style={{ marginLeft: '1rem' }}>PR</Title>
          </TitleWrapper>
          <Subtitle>Promotional Video</Subtitle>
        </TitleAndSubtitleWrapper>
        <PageLinkWrapper style={{ padding: '0 0 1.5rem 1.5rem' }}>
          <PageLink url="/" name="PUBLICATIONS" />
          <PageLink url="/study-report" name="R&D" />
        </PageLinkWrapper>
      </TitleAndLinkWrapper>
      <VideoContainer>
        <StyledVideo controls autoPlay muted width="1000" controlsList="nodownload">
          <source src="/videos/KISWEL_PR.mp4" type="video/mp4" />
        </StyledVideo>
      </VideoContainer>
    </Layout>
  );
};

export default PromotionalVideo;
