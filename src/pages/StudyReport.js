import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

import Layout from '../components/Layout';
import PageLink from 'components/PageLink';
import CatalogueModal from 'components/CatalogueModal';

const Title = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 3.5vw;
  color: ${(props) => (props.primary ? '#00953B' : '#666666')};
  font-family: ${(props) => (props.primary ? 'Myriad Pro Regular' : 'Myriad Pro Light')};
  margin: 0;
  padding: 0;
  margin-left: ${(props) => (props.primary ? '0' : '1rem')};

  @media only screen and (max-width: 1024px) {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }

  @media only screen and (max-width: 530px) {
    font-size: 6vw;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 8vw;
    margin-left: ${(props) => (props.primary ? '0' : '0.3rem')};
    margin-bottom: 0.5rem;
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

  @media only screen and (max-width: 530px) {
    padding: 1rem 0.5rem;
  }
`;

const ReportContainer = styled.div`
  border-top: 1px solid #ffcd00;
`;

const Bullets = styled.span`
  color: #ffcd00;
  font-family: 'Myriad Pro Bold';
  font-size: 3.5rem;
  @media only screen and (max-width: 1024px) {
    font-size: 3rem;
    padding: 0.5rem 0 0 0.5rem;
  }
`;

const ReportTitle = styled.span`
  color: #fff;
  font-family: 'Myriad Pro Bold';
  font-size: 2.5rem;
  padding: 1rem;

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;

const BulletsAndTitle = styled.div`
  display: flex;
`;

const ReportBtnIcon = styled.img`
  width: 10vw;
  height: 10vw;
  padding: 1rem;
  position: ${(props) => (props.green ? 'absolute' : 'static')};
  opacity: ${(props) => (props.green ? '0' : '1')};
  transition: all 0.5s ease-in;
  left: ${(props) => (props.isIE11 && props.green ? '1rem' : '')};
  top: ${(props) => (props.isIE11 && props.green ? '0.5rem' : '')};

  @media only screen and (max-width: 350px) {
    left: 50%;
    transform: ${(props) => (props.green ? 'translateX(-50%)' : '')};
  }
`;

const ReportBtnText = styled.div`
  font-family: ${(props) => (props.bold ? 'Myriad Pro Bold' : 'Myriad Pro Regular')};
  font-size: 1.1rem;
`;

const ReportBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #808080;
  border-left: ${(props) => (props.first ? 'none' : '1px solid #808080')};
  padding: 0.5rem 1rem 3rem 1rem;
  margin-bottom: 1rem;
  transition: all 0.5s ease-in;
  &:hover {
    img {
      opacity: 1;
    }
    color: #00953b;
  }
  &:active {
    img {
      opacity: 1;
    }
    color: #00953b;
  }
`;

const ReportBtnWrapper = styled.div`
  display: flex;
  :first-child {
    border-left: none;
  }

  @media only screen and (max-width: 350px) {
    flex-direction: column;
    div {
      border-left: none;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const PageLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem 1.5rem;
  @media only screen and (max-width: 530px) {
    padding: 0 0.5rem 1rem 0.5rem;
  }
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

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

const VideoModal = Modal.styled`
  display: flex;
  width: 60%;
  flex-direction: column;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

const CloseBtn = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  transition: transform 0.2s ease-out;
  margin-bottom: 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
  position: absolute;
  right: 4rem;
  top: 2rem;
`;

const StudyReport = () => {
  const [selected, setSelected] = useState({
    name: '',
    url: '',
    pageNumber: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  const handleClick = useCallback(
    (type) => {
      setIsOpen((open) => !open);
      if (type === 'A') {
        setSelected({
          name: 'Low Slag (KC-37)',
          url: '/files/A. effect of chemical composition of welding consumable on slag formation and corrosion resistance.pdf',
          pageNumber: 11,
        });
      } else if (type === 'B') {
        setSelected({
          name: 'WAAM (Ti-6AI-4V)',
          url: '/files/B. WAAM(Ti-6Al-4V).pdf',
          pageNumber: 15,
        });
      }
    },
    [setIsOpen],
  );

  const toggleModal = useCallback(
    (e) => {
      setIsOpen((open) => !open);
    },
    [setIsOpen],
  );

  const handleVideoClick = useCallback(
    (e) => {
      setIsVideoOpen(true);
    },
    [setIsVideoOpen],
  );

  const closeVideoModal = () => setIsVideoOpen(false);

  return (
    <Layout>
      <TitleAndLinkWrapper>
        <TitleAndSubtitleWrapper>
          <TitleWrapper>
            <Title primary="true">KISWEL</Title>
            <Title>R&D STUDY REPORT</Title>
          </TitleWrapper>
          <Subtitle>Welding technique, production technology & New material</Subtitle>
        </TitleAndSubtitleWrapper>
        <PageLinkWrapper>
          <PageLink url="/" name="PUBLICATIONS" />
          <PageLink url="/promotional-video" name="PR" />
        </PageLinkWrapper>
      </TitleAndLinkWrapper>
      <ReportContainer>
        <BulletsAndTitle>
          <Bullets>A.</Bullets>
          <ReportTitle>Low Slag (KC-37)</ReportTitle>
        </BulletsAndTitle>
        <ReportBtnWrapper>
          <ReportBtn first>
            <ReportBtnIcon isIE11={isIE11} src="/images/report-pdf-btn.svg" />
            <ReportBtnIcon isIE11={isIE11} onClick={() => handleClick('A')} green src="/images/report-pdf-btn-green.svg" />
            <ReportBtnText bold={true}>VIEW</ReportBtnText>
            <ReportBtnText>PDF</ReportBtnText>
          </ReportBtn>
          <StyledLink href="/files/A. effect of chemical composition of welding consumable on slag formation and corrosion resistance.pdf" target="_blank" download>
            <ReportBtn>
              <ReportBtnIcon isIE11={isIE11} src="/images/report-download-btn.svg" />
              <ReportBtnIcon isIE11={isIE11} green src="/images/report-download-btn-green.svg" />
              <ReportBtnText bold={true}>DOWNLOAD</ReportBtnText>
              <ReportBtnText>PDF</ReportBtnText>
            </ReportBtn>
          </StyledLink>
          <ReportBtn>
            <ReportBtnIcon isIE11={isIE11} src="/images/report-play-btn.svg" />
            <ReportBtnIcon isIE11={isIE11} onClick={handleVideoClick} green src="/images/report-play-btn-green.svg" />
            <ReportBtnText bold={true}>PLAY</ReportBtnText>
            <ReportBtnText>VIDEO</ReportBtnText>
          </ReportBtn>
        </ReportBtnWrapper>
      </ReportContainer>
      <ReportContainer>
        <BulletsAndTitle>
          <Bullets>B.</Bullets>
          <ReportTitle>WAAM (Ti-6AI-4V)</ReportTitle>
        </BulletsAndTitle>
        <ReportBtnWrapper>
          <ReportBtn first>
            <ReportBtnIcon isIE11={isIE11} src="/images/report-pdf-btn.svg" />
            <ReportBtnIcon isIE11={isIE11} onClick={() => handleClick('B')} green src="/images/report-pdf-btn-green.svg" />
            <ReportBtnText bold={true}>VIEW</ReportBtnText>
            <ReportBtnText>PDF</ReportBtnText>
          </ReportBtn>
          <StyledLink href="/files/B. WAAM(Ti-6Al-4V).pdf" target="_blank" download>
            <ReportBtn>
              <ReportBtnIcon isIE11={isIE11} src="/images/report-download-btn.svg" />
              <ReportBtnIcon isIE11={isIE11} green src="/images/report-download-btn-green.svg" />
              <ReportBtnText bold={true}>DOWNLOAD</ReportBtnText>
              <ReportBtnText>PDF</ReportBtnText>
            </ReportBtn>
          </StyledLink>
        </ReportBtnWrapper>
      </ReportContainer>
      <CatalogueModal selected={selected} isOpen={isOpen} opacity={opacity} toggleModal={toggleModal} />
      <VideoModal isOpen={isVideoOpen} toggleModal={closeVideoModal} onBackgroundClick={closeVideoModal}>
        <CloseBtn onClick={closeVideoModal} src="/images/close_btn.svg" />
        <StyledVideo controls autoPlay muted controlsList="nodownload">
          <source src="/videos/A. 논문. effect of chemical composition of welding consumable on slag formation and corrosion resistance(video).mp4" type="video/mp4" />
        </StyledVideo>
      </VideoModal>
    </Layout>
  );
};

export default StudyReport;
