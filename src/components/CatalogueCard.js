import styled from 'styled-components';
import parse from 'html-react-parser';

import CatalogueImage from './CatalogueImage';

const CatalogueTitle = styled.h1`
  font-size: 0.875rem;
  color: #808080;
  font-family: 'Myriad Pro Light';
`;

const CatalogueBtn = styled.button`
  background: no-repeat url('/images/download-btn.svg');
  width: 2rem;
  height: 2rem;
  border: none;
  transition: background 0.3s ease-in;
  -webkit-transition: background 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background: no-repeat url('/images/download-btn-colored.svg');
  }
`;

const CatalogueInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: -0.2rem;
  padding: 0 0.3rem;
`;

const CatalogueCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media screen and (max-width: 320px) {
    padding: 0;
  }
`;

const StyledLink = styled.a`
  align-self: start;
  margin-top: 0.5rem;
`;

function CatalogueCard(props) {
  return (
    <CatalogueCardWrapper>
      <CatalogueImage index={props.index} url={props.url} name={props.name} thumbnail={props.thumbnail} onClick={() => props.handleClick(props.index)} />
      <CatalogueInfo>
        <CatalogueTitle>{parse(props.name)}</CatalogueTitle>
        <StyledLink href={props.url} target="_blank" download>
          <CatalogueBtn />
        </StyledLink>
      </CatalogueInfo>
    </CatalogueCardWrapper>
  );
}

export default CatalogueCard;
