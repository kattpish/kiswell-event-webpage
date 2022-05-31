import styled from 'styled-components';
import Drawer from 'rc-drawer';
import Menu, { SubMenu, MenuItem, Divider } from 'rc-menu';
import { ArrowRight } from 'react-bootstrap-icons';
import 'rc-drawer/assets/index.css';
import 'rc-menu/assets/index.css';

import navbarData from '../data/navbarData';

const StyledMenu = styled(Menu)`
  color: #999;
  border: none;
  box-shadow: none;
  font-family: 'Myriad Pro Semibold';
  font-size: 1rem;
  margin: 0;
`;

const StyledSubMenu = styled(SubMenu)`
  border-bottom: 1px solid #363134;
  background: #000;

  ul {
    background-color: #1c191e !important;
    border-top: 1px solid #363134;
    border-bottom: 1px solid #363134;
  }

  &:hover {
    color: #fff;

    div {
      background-color: #000;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding-left: 2rem !important;
  a {
    text-decoration: none;
    color: #999;
  }
`;

const MobileMenuTitle = styled.div`
  color: #ffcd00;
  font-size: 1.8rem;
`;

const TitleAndIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem 0.8rem 1rem;
  cursor: pointer;
`;

function CustomedDrawer(props) {
  return (
    <Drawer onClose={props.onClose} placement="right" handler={false} open={props.open} contentWrapperStyle={{ background: '#000', width: '30vw', minWidth: '300px' }} maskStyle={{ opacity: 0.7 }}>
      <StyledMenu mode="inline" openAnimation="slide-up">
        <TitleAndIconWrapper onClick={props.onSwitch}>
          <MobileMenuTitle>Menu</MobileMenuTitle>
          <ArrowRight color="#ffcd00" size={24} />
        </TitleAndIconWrapper>
        <Divider />
        {Object.keys(navbarData).map((data, index) => (
          <StyledSubMenu key={'submenu' + index} title={data.toUpperCase()}>
            {navbarData[data].map((childData, childIndex) => (
              <StyledMenuItem key={index + '-styeldmenuitem-' + childIndex}>
                <a href={childData.url}>- {childData.label.toUpperCase()}</a>
              </StyledMenuItem>
            ))}
          </StyledSubMenu>
        ))}
      </StyledMenu>
    </Drawer>
  );
}

export default CustomedDrawer;
