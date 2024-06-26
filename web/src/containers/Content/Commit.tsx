import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Commit = memo(function Commit() {
  const { i18n } = useTranslation();

  return (
    <section>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href='https://github-readme-stats.vercel.app'
      >
        <img
          src={`https://github-readme-stats.vercel.app/api?username=explooosion&show_icons=true&locale=${i18n.language === 'en' ? i18n.language : i18n.language + '-tw'}`}
          alt={`Robby's Github chart`}
          title={`Robby's Github chart`}
          loading="lazy"
        />
      </a>
      <hr className="my-8" />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href='https://github.com/2016rshah/githubchart-api'
      >
        <img
          src='https://ghchart.rshah.org/409ba5/explooosion'
          alt={`Robby's Github chart`}
          title={`Robby's Github chart`}
          loading="lazy"
        />
      </a>
      <hr className="my-8" />
    </section>
  );
});

export default Commit;
