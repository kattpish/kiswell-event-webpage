import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import CatalogueCard from '../components/CatalogueCard';
import CatalogueModal from '../components/CatalogueModal';
import PageLink from '../components/PageLink';
import { useMediaQuery } from 'react-responsive';
import catalogueData from '../data/catalogueData.json';

const Title = styled.h1`
  letter-spacing: 0.05rem;
  font-size: 3.5vw;
  color: ${(props) => (props.primary ? '#00953B' : '#666666')};
  font-family: ${(props) => (props.primary ? 'Myriad Pro Regular' : 'Myriad Pro Light')};
  margin: 0;
  margin-left: ${(props) => (props.primary ? '0' : '1rem')};
  padding: 0;
  @media only screen and (max-width: 1024px) {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }

  @media only screen and (max-width: 530px) {
    font-size: 8vw;
    padding-bottom: 0.5rem;
  }
  @media screen and (max-width: 320px) {
    margin-left: ${(props) => (props.primary ? '0' : '0.3rem')};
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
  @media only screen and (max-width: 530px) {
    font-size: 6vw;
    padding-bottom: 0.5rem;
  }
`;

const TitleAndSubtitleWrapper = styled.div`
  padding: 2rem 0;
  @media only screen and (max-width: 530px) {
    padding: 1rem 0;
  }
`;

const CatalogueCol = styled.div`
  display: flex;
`;

const CatalogueRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1399 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 321, maxWidth: 899 });
  return isMobile ? children : null;
};

const Small = ({ children }) => {
  const isSmall = useMediaQuery({ maxWidth: 320 });
  return isSmall ? children : null;
};

const Catalogue = () => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleClick = useCallback(
    (index) => {
      setIsOpen((open) => !open);
      setSelected(index);
    },
    [setIsOpen],
  );

  const toggleModal = useCallback(
    (e) => {
      setIsOpen((open) => !open);
    },
    [setIsOpen],
  );

  const handlePrevious = useCallback(
    (e) => {
      setSelected((idx) => (idx <= 0 ? idx : idx - 1));
    },
    [setSelected],
  );

  const handleNext = useCallback(
    (e) => {
      setSelected((idx) => (idx >= 11 ? idx : idx + 1));
    },
    [setSelected],
  );

  return (
    <Layout>
      <TitleAndLinkWrapper>
        <TitleAndSubtitleWrapper>
          <TitleWrapper>
            <Title primary="true">KISWEL</Title>
            <Title>PUBLICATIONS</Title>
          </TitleWrapper>
          <Subtitle>Company Profile & Catalogue</Subtitle>
        </TitleAndSubtitleWrapper>
        <PageLinkWrapper style={{ padding: '0 0 1.5rem ' }}>
          <PageLink url="/study-report" name="R&D" />
          <PageLink url="/promotional-video" name="PR" />
        </PageLinkWrapper>
      </TitleAndLinkWrapper>
      <Desktop>
        <CatalogueRow>
          <CatalogueCol>
            {catalogueData.catalogues.slice(0, 6).map((item, index) => (
              <CatalogueCard handleClick={handleClick} name={item.name} thumbnail={item.thumbnail} url={item.url} key={`${item}-${index}`} index={0 + index} />
            ))}
          </CatalogueCol>
        </CatalogueRow>
        <CatalogueRow>
          <CatalogueCol>
            {catalogueData.catalogues.slice(6, 12).map((item, index) => (
              <CatalogueCard handleClick={handleClick} name={item.name} thumbnail={item.thumbnail} url={item.url} key={`${item}-${index}`} index={6 + index} />
            ))}
          </CatalogueCol>
        </CatalogueRow>
      </Desktop>
      <Tablet>
        {[0, 4, 8].map((v) => (
          <CatalogueRow key={v}>
            <CatalogueCol>
              {catalogueData.catalogues.slice(v, v + 4).map((item, index) => (
                <CatalogueCard handleClick={handleClick} name={item.name} thumbnail={item.thumbnail} url={item.url} key={`${item}-${index}`} index={v + index} />
              ))}
            </CatalogueCol>
          </CatalogueRow>
        ))}
      </Tablet>
      <Mobile>
        {[0, 2, 4, 6, 8, 10].map((v) => (
          <CatalogueRow key={v}>
            <CatalogueCol>
              {catalogueData.catalogues.slice(v, v + 2).map((item, index) => (
                <CatalogueCard handleClick={handleClick} name={item.name} thumbnail={item.thumbnail} url={item.url} key={`${item}-${index}`} index={v + index} />
              ))}
            </CatalogueCol>
          </CatalogueRow>
        ))}
      </Mobile>
      <Small>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
          <CatalogueRow key={v}>
            <CatalogueCol>
              {catalogueData.catalogues.slice(v, v + 1).map((item, index) => (
                <CatalogueCard handleClick={handleClick} name={item.name} thumbnail={item.thumbnail} url={item.url} key={`${item}-${index}`} index={v + index} />
              ))}
            </CatalogueCol>
          </CatalogueRow>
        ))}
      </Small>

      <CatalogueModal pagination selected={selected} handlePrevious={handlePrevious} handleNext={handleNext} isOpen={isOpen} opacity={opacity} toggleModal={toggleModal} />
    </Layout>
  );
};

export default Catalogue;
