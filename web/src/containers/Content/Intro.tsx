import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

const Intro = memo(function Intro() {
  const { t } = useTranslation();

  return (
    <section>
      <h1 className="my-4 text-3xl text-gray-800 font-medium tracking-in-contract-bck">Hi !</h1>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('content.intro.greet')) }} />
      <hr className="my-8" />
    </section>
  );
});

export default Intro;
