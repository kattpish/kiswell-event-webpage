import React, { Suspense, useEffect, useState, useMemo, useCallback } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { SizeMe } from 'react-sizeme';
import { useMediaQuery } from 'react-responsive';
import catalogueData from '../data/catalogueData';
import { pdfjs } from 'react-pdf'; // 지우면 안됨

const Page = React.lazy(() => import('react-pdf/dist/esm/Page'));
const Document = React.lazy(() => import('react-pdf/dist/esm/Document'));

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

const DocumentWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 7rem);

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const CustomModal = Modal.styled`
  display: flex;
  width: 90%;
  flex-direction: column;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;

const CatalogueViewerTitle = styled.div`
  font-size: 1rem;
  color: #fff;
  font-family: 'Myriad Pro Semibold';
  margin-bottom: 1rem;
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

  @media screen and (max-width: 900px) {
    margin: 1rem;
  }
`;

const CatalogueBtnIcon = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  transition: transform 0.2s ease-out;
  margin-bottom: 0.5rem;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const CatalogueBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-left: ${(props) => (props.pagination === true ? '-4rem' : '1rem')};
  justify-content: center;
  align-items: middle;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    margin-left: 0;
  }
`;

const CloseBtn = styled.img`
  width: 3rem;
  height: 3rem;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
  position: absolute;
  right: 1rem;
  @media screen and (max-width: 900px) {
    width: 2rem;
    height: 2rem;
  }
`;

const PaginationBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Myriad Pro Bold';
  font-size: 0.8rem;
  text-align: center;
  margin: 0 1rem 1rem 1rem;
  position: relative;
  top: 85%;
  @media screen and (max-width: 900px) {
    top: 0;
    margin: 1rem;
  }
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 900 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 899 });
  return isMobile ? children : null;
};

function CatalogueModal(props) {
  const selected = useMemo(() => (typeof props.selected === 'object' ? props.selected : catalogueData.catalogues[props.selected]), [props.selected]);
  console.log(selected);
  return (
    <CustomModal isOpen={props.isOpen} onBackgroundClick={props.toggleModal} onEscapeKeydown={props.toggleModal}>
      <CatalogueViewerTitle>
        <Logo src="/images/logo_green.svg" />
        <div>{parse(selected.name)}</div>
        <CloseBtn onClick={props.toggleModal} src="/images/close_btn.svg" />
      </CatalogueViewerTitle>
      <DocumentWrapper>
        {props.pagination && (
          <Desktop>
            <PaginationBtn>
              <CatalogueBtnIcon onClick={props.handlePrevious} src="/images/previous_btn.svg" />
              <div>Previous</div>
            </PaginationBtn>
          </Desktop>
        )}
        <div style={{ width: '100%', overflow: 'auto' }}>
          {false /* !isIE11 */ ? (
            <SizeMe
              refreshRate={128}
              refreshMode={'debounce'}
              render={({ size }) => (
                <Suspense fallback={<div>로딩중</div>}>
                  <Document file={selected.url}>
                    {selected?.pageNumber && Array.from(Array(selected.pageNumber), (el, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1} width={size.width} />)}
                  </Document>
                </Suspense>
              )}
            />
          ) : (
            selected && Array.from(Array(selected.pageNumber)).map((v, i) => <img key={`image-${i}`} src={`${selected.url}-d/-${i}.png`} alt="Publication" style={{ width: '100%' }} />)
          )}
        </div>
        {props.pagination && (
          <Desktop>
            <PaginationBtn>
              <CatalogueBtnIcon onClick={props.handleNext} src="/images/next_btn.svg" />
              <div>Next</div>
            </PaginationBtn>
          </Desktop>
        )}
        <CatalogueBtnWrapper pagination={props.pagination}>
          {props.pagination && (
            <Mobile>
              <PaginationBtn>
                <CatalogueBtnIcon onClick={props.handlePrevious} src="/images/previous_btn.svg" />
                <div>Previous</div>
              </PaginationBtn>
            </Mobile>
          )}
          <a href={selected.url} target="_blank" download>
            <CatalogueBtn>
              <CatalogueBtnIcon src="/images/pdf_download_btn.svg" />
              <div>
                PDF
                <br />
                download
              </div>
            </CatalogueBtn>
          </a>
          <a href="https://en.kiswel.com/support/qna.asp?mode=write" target="_blank">
            <CatalogueBtn>
              <CatalogueBtnIcon src="/images/qna_btn.svg" />
              <div>Q&A</div>
            </CatalogueBtn>
          </a>
          {props.pagination && (
            <Mobile>
              <PaginationBtn>
                <CatalogueBtnIcon onClick={props.handleNext} src="/images/next_btn.svg" />
                <div>Next</div>
              </PaginationBtn>
            </Mobile>
          )}
        </CatalogueBtnWrapper>
      </DocumentWrapper>
    </CustomModal>
  );
}

export default CatalogueModal;
