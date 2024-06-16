import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt } from 'react-icons/fa';

import CodeBlock from '../../components/CodeBlock';

interface IEvent {
  name: string;
  code: string;
}

const Item = memo(function Item({ data }: { data: IEvent }) {
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

const Activity = memo(function Work() {

  const { t } = useTranslation();

  const datas: IEvent[] = t('content.activity.events', { returnObjects: true }) ?? [];

  return (
    <section className="relative fade-in">
      <h2 className="flex items-center text-2xl font-medium mb-6 sticky">
        <FaCalendarAlt /><span className="ml-2 text-gray-900">{t('content.activity.title')}</span>
      </h2>
      <ul className="list-disc pl-6">
        {datas.map(data => <Item key={data.name} data={data} />)}
      </ul>
      <hr className="mt-4 mb-8" />
    </section>
  );
});

export default Activity;
