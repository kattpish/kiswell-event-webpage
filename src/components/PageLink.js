import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const StyledLink = styled(Link)`
  color: #ffcd00;
  font-family: 'Myriad Pro Regular';
`;

const PageLink = (props) => (
  <StyledLink to={props.url}>
    Go to <b>KISWEL</b> {props.name}
    <FontAwesomeIcon icon={faCaretRight} style={{ paddingLeft: '0.5rem' }} />
  </StyledLink>
);

export default PageLink;
