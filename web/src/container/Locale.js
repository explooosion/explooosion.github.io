import React from 'react';
import styled from 'styled-components';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { getCookie, setCookie, COOKIE_I18N } from '../utils/Cookie';

const Select = styled(ReactFlagsSelect)`
  /* overwrite flag-select */
  position: fixed;
  top: 0;
  left: 10px;
  user-select: none;

  ul {
    padding: 0 0.5rem;
  }

  .arrow-down {
    display: none;
    color: #fff;
  }

  @media only screen and (max-width: ${p => p.theme.screenLg}) {
    position: relative;
    left: 0;
  }
`;

const locales = {
  // 'US': 'English',
  'TW': '繁體中文',
};

const locale = getCookie(COOKIE_I18N);

function Locale() {
  const { i18n } = useTranslation();

  const onChangeLocale = key => {
    i18n.changeLanguage(key);
    setCookie(COOKIE_I18N, key);
  }

  return (
    <Select
      className='flag-select'
      defaultCountry={locale}
      countries={_.keys(locales)}
      customLabels={locales}
      selectedSize={30}
      showSelectedLabel={false}
      onSelect={key => onChangeLocale(key)}
    />
  );
}

export default Locale;
