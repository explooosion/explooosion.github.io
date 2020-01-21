import React from 'react';
import './Header.scss';
import { FaLink, FaFacebookSquare, FaRssSquare, FaLinkedin, FaGithubSquare, FaGitlab, FaCodepen } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header id='header'>
      <img className='jello-horizontal' src="/avatar.png" alt="Hi" title="Hi" /><br /><br />
      <h1>Robby</h1>
      <h4>ta7382@gmail.com</h4>
      <hr />
      <p>{t('title')}</p>
      <p>{t('edu')}
        <a rel="noopener noreferrer" target="_blank" href="http://im.nutc.edu.tw/bin/home.php">
          <FaLink />
        </a>
      </p>
      <div className='headerIcons'>
        <a rel="noopener noreferrer" target="_blank" href="https://fb.me/qi.lian.56">
          <FaFacebookSquare size='2em' />
        </a>
        &nbsp;
        <a rel="noopener noreferrer" target="_blank" href="https://dotblogs.com.tw/explooosion">
          <FaRssSquare size='2em' />
        </a>
        &nbsp;
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/robby-wu-2b26b510a/">
          <FaLinkedin size='2em' />
        </a>
        &nbsp;
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/explooosion">
          <FaGithubSquare size='2em' />
        </a>
        &nbsp;
        <a rel="noopener noreferrer" target="_blank" href="https://gitlab.com/explooosion">
          <FaGitlab size='2em' />
        </a>
        &nbsp;
        <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/ta7382/">
          <FaCodepen size='2em' />
        </a>
      </div>
    </header>
  );
}

export default Header;
