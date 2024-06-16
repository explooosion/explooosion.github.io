import { memo } from 'react';

const Footer = memo(function Footer() {
  return (
    <footer className="lg:fixed lg:bottom-9 w-[270px] pb-8 lg:pb-0 text-xs text-gray-400">
      <div>Hosted on GitHub Pages</div>
      <div>
        &mdash; Theme modified from
        <a
          className="ml-1 text-blue-400 hover:text-blue-600"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/orderedlist"
        >
          orderedlist
        </a>
      </div>
      <div>
        &mdash; Theme modified from
        <a
          className="ml-1 text-blue-400 hover:text-blue-600"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/lulalachen"
        >
          lulalachen
        </a>
      </div>
    </footer>
  )
});

export default Footer;
