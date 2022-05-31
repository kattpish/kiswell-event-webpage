import React, { useState } from 'react';
import styled from 'styled-components';

const FooterLogo = styled.div`
  background: no-repeat url('/images/footer-logo.svg');
  width: 10rem;
  height: 1.25rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    div {
      padding-bottom: 1rem;
    }
  }
`;

const FooterInfo = styled.div`
  font-family: 'Myriad Pro Light';
  font-size: 0.8rem;
  color: #666;
  line-height: 1rem;
  margin-left: 1rem;
`;

const FooterInfoTitle = styled.div`
  padding-bottom: 0.5rem;
`;

const FooterInfoWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  position: relative;

  a {
    margin-left: 1rem;
    img {
      width: 1.5rem;
    }
  }

  :first-child {
    margin-left: 0;
  }
`;

const SelectText = styled.div`
  color: #666;
  font-family: 'Myriad Pro Regular';
`;

const StyledSelect = styled.select`
  border: 1px solid #666666;
  background-color: #000;
  color: #666;
  padding: 0;
  width: 12vw;
  min-width: 150px;
  height: 2rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 0 0.5rem;
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

function Footer() {
  function handleChange(e) {
    if (e.target.value === '') {
      return;
    }
    window.open(e.target.value);
  }

  return (
    <FooterWrapper>
      <FooterInfoWrapper>
        <FooterLogo />
        <FooterInfo>
          <FooterInfoTitle>Contact us</FooterInfoTitle>
          166(Juja-dong Heangkook Building), Toegye-ro, Jung-gu, Seoul, Korea
          <br />
          +82-2-2270-9400(Seoul Headqusrters),
          <br />
          +82-55-269-7200(Cahngwon Plant),
          <br />
          +82-51-310-7200(Busan Plant)
          <br />
          Copyright 2020 KISWEL LTD. All Right Reserved.
        </FooterInfo>
      </FooterInfoWrapper>
      <SelectWrapper>
        <IconWrapper>
          <a href="https://www.facebook.com/kiswelltd/">
            <img src="/images/ico_fb.png" alt="Kiswel Facebook" />
          </a>
          <a href="https://www.instagram.com/kiswel/?igshid=eenc8y7cuwlh">
            <img src="/images/ico_ins.png" alt="Kiswel Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UC8nBuOAAKXrBmCJnhz0ChJQ">
            <img src="/images/ico_yt.png" alt="Kiswel Youtube" />
          </a>
        </IconWrapper>
        <SelectText>Family Sites</SelectText>
        <StyledSelect onChange={handleChange}>
          <option selected value="">
            Select
          </option>
          <option value="https://www.samhwasteel.com/en/">Sam Hwa Steel Co., Ltd</option>
          <option value="https://www.korheat.com/English/index.asp">Korea Heat Treatment Co., Ltd.</option>
          <option
            value="http://www.kiswire.com/english/index.asp
"
          >
            KISWIRE Co., Ltd
          </option>
          <option
            value="http://www.koswire.com/en/
"
          >
            KOS Co., Ltd
          </option>
          <option value="https://www.jisanresort.co.kr/en/main.asp">Jisan Resort Co., Ltd</option>
          <option value="https://www.etlandmall.co.kr/pc/main/index.do">ET Land Co., Ltd</option>
        </StyledSelect>
      </SelectWrapper>
    </FooterWrapper>
  );
}

export default Footer;
