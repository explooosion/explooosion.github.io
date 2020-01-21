import React from 'react';
import styled from 'styled-components';

// container
import Footer from './container/Footer';
import Header from './container/Header';
import Locale from './container/Locale';
import Section from './container/Section';

const Wrapper = styled.div`

  position: relative;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 3rem auto 0;
  width: ${p => p.theme.appWidth};

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    flex-flow: column;
    margin-top: 0;
    width: 90vw;
  }
`;

function App() {
  return (
    <Wrapper>
      <Locale />
      <Header />
      <Section />
      <Footer />
    </Wrapper>
  );
}

export default App;
