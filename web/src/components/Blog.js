import React from 'react';
import styled from 'styled-components';
import htmlReactParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { FaPaperclip } from 'react-icons/fa';

import SectionBase from '../layouts/SectionBase';

const Section = styled(SectionBase)`
`;

const dotblog = `{
  ARTICLES: [
    <a href="https://dotblogs.com.tw/explooosion/2020/12/12/041028" target="_blank">'Vue - Extend Vue component ...'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2020/10/10/040358" target="_blank">'GCP - 使用 Github Actions 部署 React 到 GKE'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2020/10/09/143330" target="_blank">'GCP - 使用 Github Actions 部署 React 到 Cloud Run'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/11/10/212333" target="_blank">'Docker - 在 Mac 上安裝 MSSQL 的搖光吧！'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/09/30/141005" target="_blank">'CSS - 運用 Stylelint 養成好習慣'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/01/21/040728" target="_blank">'MongoDB - 詳細到讓人牙起來的安裝教學'</a>,
  ],
}`;

function Blog() {
  const { t } = useTranslation();

  return (
    <Section>
      <h2 className='face-in'>
        <FaPaperclip />&nbsp; {t('blog')}
      </h2>
      <ul className='face-in'>
        <li>
          <h3>{t('blog.dotblog')}</h3>
          <pre>{htmlReactParser(dotblog)}</pre>
        </li>
      </ul>
    </Section>
  );
}

export default Blog;
