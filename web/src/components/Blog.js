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
    <a href="https://dotblogs.com.tw/explooosion/2020/03/07/021815" target="_blank">'PixiJS - 修正 sprite 為透明背景時的 hitArea'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2020/01/20/124933" target="_blank">'Flutter - 在 macOS 中使用 VSCODE 同時偵錯 Android 和 iOS'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2019/10/28/131529" target="_blank">'Cloudflare - 在世界各地邊緣你的 Workers 吧！'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2019/09/06/152105" target="_blank">'Github - CICD 使用 Actions 以 React 建置 pages 為例'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/11/10/212333" target="_blank">'Docker - 在 Mac 上安裝 MSSQL 的搖光吧！'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/09/30/141005" target="_blank">'CSS - 運用 Stylelint 養成好習慣'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/07/29/172031" target="_blank">'BlockChain - 私有鏈建立 ( Geth & Node.js )'</a>,
    <a href="https://dotblogs.com.tw/explooosion/2018/03/25/181604" target="_blank">'Electron - 新手入門 - 做一個鬧鐘吧'</a>,
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
