import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFileAlt } from 'react-icons/fa';

import CodeBlock from '../../components/CodeBlock';

interface IArticle {
  name: string;
  code: string;
}

const Item = memo(function Item({ data }: { data: IArticle }) {
  const { name, code } = data;

  return (
    <li className="pl-2 mb-8 text-lg">
      <h3 className="font-medium">
        <div>{name}</div>
      </h3>
      <CodeBlock html code={code} />
    </li>
  )
});

const Blog = memo(function Work() {

  const { t } = useTranslation();

  const datas: IArticle[] = t('content.blog.articles', { returnObjects: true }) ?? [];

  return (
    <section className="relative fade-in">
      <h2 className="flex items-center text-2xl font-medium mb-6 sticky">
        <FaFileAlt /><span className="ml-2 text-gray-900">{t('content.blog.title')}</span>
      </h2>
      <ul className="list-disc pl-6">
        {datas.map(data => <Item key={data.name} data={data} />)}
      </ul>
      <hr className="mt-4 mb-8" />
    </section>
  );
});

export default Blog;
