import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartPie, FaLink } from 'react-icons/fa';
import DOMPurify from 'dompurify';

interface IItem {
  name: string;
  link: string;
  embed: string;
}

const Item = memo(function Item({ data }: { data: IItem }) {
  const { name, link, embed } = data;

  const renderEmbed = useMemo(() => {
    // embed iframe 格式有 '\\\'
    return DOMPurify.sanitize(embed.replace(/\\"/g, '"'), { ADD_TAGS: ['iframe'] })
  }, [embed]);

  return (
    <li className="pl-2 mb-8 text-lg">
      <h3 className="font-medium">
        <div className="flex items-center">
          {name}
          <a
            className="inline-block ml-3 text-blue-400 hover:text-blue-600"
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            <FaLink />
          </a>
        </div>
      </h3>
      <div className="overflow-auto max-w-[75vw]" dangerouslySetInnerHTML={{ __html: renderEmbed }} />
    </li>
  )
});

const Analysis = memo(function Analysis() {

  const { t } = useTranslation();

  const datas: IItem[] = t('content.analysis.items', { returnObjects: true }) ?? [];

  return (
    <section className="relative fade-in">
      <h2 className="flex items-center text-2xl font-medium mb-6 sticky">
        <FaChartPie /><span className="ml-2 text-gray-900">{t('content.analysis.title')}</span>
      </h2>
      <ul className="list-disc pl-6">
        <li className="pl-2 mb-8 text-lg">
          <h3 className="mb-2 font-medium">
            <div className="flex items-center">
              github-profile-trophy
              <a
                className="inline-block ml-3 text-blue-400 hover:text-blue-600"
                rel="noopener noreferrer"
                target="_blank"
                href={'https://github-profile-trophy.vercel.app'}
              >
                <FaLink />
              </a>
            </div>
          </h3>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href='https://github-profile-trophy.vercel.app'
          >
            <img
              src='https://github-profile-trophy.vercel.app/?username=explooosion&row=2&column=4'
              alt={`Robby's Github chart`}
              title={`Robby's Github chart`}
              loading="lazy"
            />
          </a>
        </li>
        {datas.map(data => <Item key={data.name} data={data} />)}
      </ul>
      <hr className="my-8" />
    </section>
  );
});

export default Analysis;
