import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Profile = memo(function Profile() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.language !== lng && i18n.changeLanguage(lng);
  };

  const getBtnClass = (lng: string) => {
    return i18n.language === lng ? 'text-blue-400 cursor-default' : 'text-gray-400 hover:text-blue-400';
  }

  return (
    <div className="mb-6 text-gray-600">
      <h1 className="my-6 text-4xl font-bold text-gray-900">Robby Wu</h1>
      <hr className="my-5" />
      <p className="mb-5 text-left">{t('header.profile.job')}</p>
      <p className="mb-5 text-left">{t('header.profile.school')}</p>

      <div>
        <button
          className={getBtnClass('en')}
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
        <span className="mx-2">|</span>
        <button
          className={getBtnClass('zh')}
          onClick={() => changeLanguage('zh')}
        >
          繁體中文
        </button>
      </div>
    </div>
  )
});

export default Profile;
