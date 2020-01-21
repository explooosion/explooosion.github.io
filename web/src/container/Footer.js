import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`

  position: fixed;
  bottom: 35px;
  float: left;
  width: 270px;

  span {
    display: block;
    font-size: 12px;
    color: ${p => p.theme.gray};

    a {
      margin-left: .25rem;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    position: relative;
    bottom: 1rem;
    width: 100%;
  }
`;

function Footer() {
  return (
    <Foot>
      <span>Hosted on GitHub Pages</span>
      <span>
        &mdash; Base Theme
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/orderedlist"
        >
          orderedlist
        </a>
      </span>
      <span>
        &mdash; Base Design
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/lulalachen"
        >
          lulalachen
        </a>
      </span>
    </Foot>
  );
}

export default Footer;
