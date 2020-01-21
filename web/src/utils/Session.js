import store from 'store2';
import _ from 'lodash';

/**
 * Set session
 * @param {string} key
 * @param {any} value
 */
export const setSession = (key = '', value = null) => {
  if (!key && !value) return;
  store.session(key, value);
}

/**
 * Get session by key
 * @param {string} key
 */
export const getSession = (key = '') => {
  const session = store.session(key)
  return _.isNull(session) || _.isUndefined(session) ? null : session;
};

/**
 * Remove session by key
 * @param {string} key
 */
export const delSession = (key = '') => store.session.remove(key);