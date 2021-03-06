import Cookies from 'js-cookie';
import _ from 'lodash';

export const COOKIE_I18N = 'i18n';

/**
 * Set Cookie
 * @param {string} key
 * @param {any} value
 */
export const setCookie = (key = '', value = null) => {
  if (_.isEmpty(key)) return;
  Cookies.set(key, value, { expires: 365 });
};

/**
 * Get Cookie By Key
 * @param {string} key
 */
export const getCookie = (key = '') => {
  const cookie = Cookies.get(key);
  return _.isNull(cookie) || _.isUndefined(cookie) ? null : cookie;
};

/**
 * Remove Cookie by key
 * @param {string} key
 */
export const delCookie = (key = '') => Cookies.remove(key);
