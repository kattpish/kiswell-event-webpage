import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';

const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

const DocumentWrapper = styled.div`
  width: 80vw;
  max-height: 800px;
  overflow: auto;
`;

export default function CatalogueViewer(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <DocumentWrapper>
      {!isIE11 ? (
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      ) : (
        <div></div>
      )}
    </DocumentWrapper>
  );
}
