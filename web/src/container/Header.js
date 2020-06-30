import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { useTranslation } from 'react-i18next';
import {
  FaFacebookSquare,
  FaRssSquare,
  FaLinkedin,
  FaGithubSquare,
  FaGitlab,
  FaCodepen,
} from 'react-icons/fa';

const Head = styled.header`

  position: sticky;
  top: 3rem;
  width: 270px;

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    position: relative;
    top: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const Profile = styled.div`

  margin-top: 1.5rem;

  h1 {
    font-weight: bold;
  }
`;

const Icons = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    justify-content: flex-start;
    width: 100%;
  }

  a {
    color: ${p => p.theme.dark};
    cursor: pointer;

    &:hover {
      color: ${p => rgba(p.theme.dark, .8)};
    }

    @media only screen and (max-width: ${p => p.theme.screenLg}) {
      margin-right: 1rem;
    }
  }
`;

const icons = [
  { key: 'fb', link: 'https://fb.me/qi.lian.56', img: FaFacebookSquare },
  { key: 'blog', link: 'https://dotblogs.com.tw/explooosion', img: FaRssSquare },
  { key: 'linkedin', link: 'https://www.linkedin.com/in/robby-wu-2b26b510a', img: FaLinkedin },
  { key: 'github', link: 'https://github.com/explooosion', img: FaGithubSquare },
  { key: 'gitlab', link: 'https://gitlab.com/explooosion', img: FaGitlab },
  { key: 'codepen', link: 'https://codepen.io/ta7382', img: FaCodepen },
];

function Header() {
  const { t } = useTranslation();

  const renderProfile = () => {
    return (
      <Profile>
        <h1>Robby</h1>
        <h4>ta7382@gmail.com</h4>
        <hr />
        <p>{t('title')}</p>
        <p>{t('edu')}</p>
      </Profile>
    );
  }

  const renderIcons = icon => {
    const { key, link, img: Img } = icon;
    return (
      <a
        key={key}
        href={link}
        className="shake"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Img size="2em" />
      </a>
    );
  }

  return (
    <Head>
      <img
        className='jello-horizontal'
        src="/avatar.png"
        alt="Hi"
        title="Hi"
      />
      {renderProfile()}
      <Icons>{icons.map(icon => renderIcons(icon))}</Icons>
    </Head>
  );
}

export default Header;
