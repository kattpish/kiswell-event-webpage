import React, { useState } from 'react';
import styled from 'styled-components';
import navbarData from '../data/navbarData.json';
import CustomedDrawer from './CustomedDrawer';

const NavbarWrapper = styled.div`
  background-color: #ffcd00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  a {
    cursor: pointer;
  }

  @media screen and (max-width: 1030px) {
    padding: 0 3vw;
  }

  @media only screen and (max-width: 240px) {
    justify-content: flex-end;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  color: #000;
  font-family: 'Myriad Pro Semibold';
  text-align: center;
  list-style: none;
  position: relative;
  top: 0.5rem;

  @media screen and (max-width: 1030px) {
    top: 0.3rem;
  }
`;

const NavbarListItem = styled.li`
  padding: 0 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    color: #008f4b;

    ul {
      z-index: 100;
      opacity: 1;
      transform: translateY(0);
      max-height: 1000px;
    }
  }
  @media screen and (max-width: 1030px) {
    display: none;
  }
`;

const NavbarDropdown = styled.ul`
  background-color: #ffdb00;
  list-style: none;
  padding: 0;
  z-index: -10;
  opacity: 0;
  position: absolute;
  max-height: 0;
  top: 35px;
  transition: all 0.5s;
  &:last-child: {
    padding-bottom: 1rem;
  }
`;

const NavbarDropdownItem = styled.li`
  padding: 0.5rem 1rem;
  a {
    color: #000;
    text-decoration: none;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #323333 !important;
    a {
      color: #ffdb00;
    }
  }

  &:active {
    background-color: #323333 !important;
    a {
      color: #ffdb00;
    }
  }
`;

const NavbarLogo = styled.a`
  @media screen and (max-width: 1030px) {
    transform: scale(0.7);
  }

  @media only screen and (max-width: 240px) {
    display: none;
  }
`;

const NavbarIcon = styled.div`
  display: flex;
  justify-content: center;
  border-left: 1px solid #000;
  padding: 0 0.5rem;
  &:hover {
    ul {
      z-index: 100;
      opacity: 1;
      transform: translateY(0);
      max-height: 1000px;
    }
  }
  img {
    width: 1.31rem;
    height: 1.31rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1030px) {
    border: none;
    padding: 0 1rem 0 0;
  }
  @media screen and (max-width: 350px) {
    display: none;
    padding: 0 1rem 0 0;
  }
`;

const NavbarMenuBar = styled.div`
  display: none;
  img {
    width: 1.31rem;
    height: 1.31rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1030px) {
    display: block;
  }
  @media only screen and (max-width: 240px) {
    padding-right: 1rem;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function onSwitch() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <NavbarWrapper>
      <NavbarLogo href="https://en.kiswel.com/">
        <img src="/images/h1_logo.gif" alt="Kiswel Logo" />
      </NavbarLogo>
      <NavbarList>
        {Object.keys(navbarData).map((data, index) => (
          <NavbarListItem key={`listitem-${index}`}>
            {data.toUpperCase()}
            <NavbarDropdown>
              {navbarData[data].map((childData, childIndex) => (
                <NavbarDropdownItem key={`dropdownitem-${index}-${childIndex}`}>
                  <a href={childData.url}>{childData.label.toUpperCase()}</a>
                </NavbarDropdownItem>
              ))}
            </NavbarDropdown>
          </NavbarListItem>
        ))}
        <NavbarIcon>
          <a href="https://en.kiswel.com/search/search.asp">
            <img src="/images/btn_head_sch.gif" alt="Kiswel Search" />
          </a>
        </NavbarIcon>
        <NavbarIcon>
          <div>
            <img src="/images/btn_language.gif" alt="Kiswel Language" />
          </div>
          <NavbarDropdown>
            <NavbarDropdownItem>
              <a href="https://www.kiswel.com/">Korean</a>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <a href="https://cn.kiswel.com/">中文</a>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <a href="https://jp.kiswel.com/">日本語</a>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <a href="https://es.kiswel.com/">Español</a>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <a href="https://de.kiswel.com/">Deutschland</a>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <a href="https://ru.kiswel.com/">Русский</a>
            </NavbarDropdownItem>
          </NavbarDropdown>
        </NavbarIcon>
        <NavbarMenuBar onClick={onSwitch}>
          <img src="/images/bars-solid.svg" alt="Kiswel Menubar" />
        </NavbarMenuBar>
      </NavbarList>
      <CustomedDrawer onClose={onClose} open={isOpen} onSwitch={onSwitch} />
    </NavbarWrapper>
  );
}

export default Navbar;
