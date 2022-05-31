import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  color: white;
  background: no-repeat bottom left/10% url('/images/kiswel-bg.png'), #000;
  background-attachment: fixed;
`;

const ContentWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Navbar />
    <ContentWrapper>
      {children}
      <Footer />
    </ContentWrapper>
  </Wrapper>
);

export default Layout;
