import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPaintBrush } from 'react-icons/fa';

import CodeBlock from '../../components/CodeBlock';

interface ISkill {
  name: string;
  code: string;
}

const Item = memo(function Item({ data }: { data: ISkill }) {
  const { name, code } = data;

  return (
    <li className="pl-2 mb-8 text-lg">
      <h3 className="font-medium">
        <div>{name}</div>
      </h3>
      <CodeBlock code={code} />
    </li>
  )
});

const Skill = memo(function Work() {

  const { t } = useTranslation();

  const datas: ISkill[] = t('content.skill.items', { returnObjects: true }) ?? [];

  return (
    <section className="relative fade-in">
      <h2 className="flex items-center text-2xl font-medium mb-6 sticky">
        <FaPaintBrush /><span className="ml-2 text-gray-900">{t('content.skill.title')}</span>
      </h2>
      <ul className="list-disc pl-6">
        {/* https://github.com/anuraghazra/github-readme-stats?tab=readme-ov-file#important-notices- */}
        {/* <li className="pl-2 mb-8 text-lg">
          <h3 className="mb-2 font-medium">
            <div className="flex items-center">
              {t('content.skill.languages')}
              <a
                className="inline-block ml-3 text-blue-400 hover:text-blue-600"
                rel="noopener noreferrer"
                target="_blank"
                href={'https://github-readme-stats.vercel.app'}
              >
                <FaLink />
              </a>
            </div>
          </h3>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=explooosion&show_icons=true&locale=${i18n.language === 'en' ? i18n.language : i18n.language + '-tw'}&layout=compact`}
            alt={`Robby's Github chart`}
            title={`Robby's Github chart`}
            loading="lazy"
          />
        </li> */}
        {datas.map(data => <Item key={data.name} data={data} />)}
      </ul>
      <hr className="my-8" />
    </section>
  );
});

export default Skill;
