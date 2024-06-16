import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRocket, FaLink } from 'react-icons/fa';
import DOMPurify from 'dompurify';

interface ICompany {
  name: string;
  link: string;
  job: string;
  period: string;
  description: string;
}

const Company = memo(function Company({ data }: { data: ICompany }) {

  const { i18n } = useTranslation();

  const { name, link, job, period, description } = data;

  return (
    <li className="pl-2 mb-10 text-lg">
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
        <div className="text-lg">{job}</div>
      </h3>
      <p className="text-right italic font-light text-gray-400">{period}</p>
      <p
        className={`text-base text-gray-500${i18n.language === 'zh' ? ' text-justify' : ''}`}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
      >
      </p>
    </li>
  )
});

const Work = memo(function Work() {

  const { t } = useTranslation();

  const companies: ICompany[] = t('content.work.companies', { returnObjects: true }) ?? [];

  return (
    <section className="relative fade-in">
      <h2 className="flex items-center text-2xl font-medium mb-6 sticky">
        <FaRocket /><span className="ml-2 text-gray-900">{t('content.work.title')}</span>
      </h2>
      <ul className="list-disc pl-6">
        {companies.map(company => <Company key={company.name} data={company} />)}
      </ul>
      <hr className="my-8" />
    </section>
  );
});

export default Work;
