import React, { useState, useMemo } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

import CatalogueViewer from './CatalogueViewer';
import catalogueData from '../data/catalogueData';

const ModalWrapper = Modal.styled`
  display: flex;
  width: 60%;
  flex-direction: column;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const CatalogueViewerTitle = styled.div`
  font-size: 1rem;
  color: #fff;
  position: absolute;
  top: 1.5rem;
  left: 14rem;
  font-family: 'Myriad Pro Semibold';
  display: flex;
  align-items: center;

  div {
    margin-left: 0.5rem;
  }
`;

const Logo = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`;

const CatalogueBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Myriad Pro Bold';
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const CatalogueBtnIcon = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  transition: transform 0.2s ease-out;
  margin-bottom: 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
`;

const CatalogueBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10vw;
  right: 10vw;
`;

function CatalogueModal(props) {
  const selected = useMemo(() => catalogueData.catalogues[props.selected], [props.selected]);

  return (
    <ModalWrapper isOpen={props.isOpen} onBackgroundClick={props.toggleModal} onEscapeKeydown={props.toggleModal}>
      <CatalogueViewerTitle>
        <Logo src="/images/logo_green.svg" />
        <div>{parse(selected.name)}</div>
      </CatalogueViewerTitle>
      <CatalogueViewer pdf={selected.url} />
      <CatalogueBtnWrapper>
        <Link to={selected.url} target="_blank" download>
          <CatalogueBtn>
            <CatalogueBtnIcon src="/images/pdf_download_btn.svg" />
            <div>
              PDF
              <br />
              download
            </div>
          </CatalogueBtn>
        </Link>
        <Link to={{ pathname: 'https://en.kiswel.com/support/qna.asp?mode=write' }} target="_blank">
          <CatalogueBtn>
            <CatalogueBtnIcon src="/images/qna_btn.svg" />
            <div>Q&A</div>
          </CatalogueBtn>
        </Link>
      </CatalogueBtnWrapper>
    </ModalWrapper>
  );
}

export default CatalogueModal;
