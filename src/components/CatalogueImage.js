import React from 'react';
import styled from 'styled-components';

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 120%;
  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Thumbnail = styled.div`
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-out;
  -webkit-transition: transform 0.5s ease-out;
  cursor: pointer;
  z-index: 1;
  &:hover {
    transform: scale(1.1);
    div:first-child {
      opacity: 0.7;
    }

    button {
      opacity: 1;
    }

    span {
      opacity: 1;
    }
  }
`;

const CatalogueImageBtn = styled.button`
  background: no-repeat url('/images/catalogue-plus-btn.svg');
  width: 5.625rem;
  height: 5.625rem;
  border: none;
  opacity: 0;
  position: relative;
  cursor: pointer;
`;

const CatalougeImageText = styled.span`
  font-family: ${(props) => (props.title ? 'Myriad Pro Bold' : 'Myriad Pro Semibold')};
  font-size: ${(props) => (props.title ? '1rem' : '0.8rem')};
  opacity: 0;
  position: relative;
`;

const ThumbnailOverlay = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.5s ease-out;
`;

const CatalogueImage = (props) => {
  return (
    <ThumbnailWrapper onClick={props.onClick}>
      <Thumbnail url={props.thumbnail}>
        <ThumbnailOverlay>
          <CatalogueImageBtn />
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CatalougeImageText title="true">View</CatalougeImageText>
            <CatalougeImageText>Catalogue</CatalougeImageText>
          </div>
        </ThumbnailOverlay>
      </Thumbnail>
    </ThumbnailWrapper>
  );
};

export default CatalogueImage;
