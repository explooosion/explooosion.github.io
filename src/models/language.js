import en from '../i18n/en'
import zhTW from '../i18n/zh-tw'

export default {

  namespace: 'language',

  state: {
    key: 'en',
    locale: 'en',
    messages: en,
    lans: [
      // Add new language here:
      // Example
      // {
      //   locale: 'en',    // https://github.com/yahoo/react-intl
      //   messages: enUS,  // import your files
      // },
      {
        locale: 'en',
        messages: en,
      }, {
        locale: 'zh-tw',
        messages: zhTW,
      }
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
    update(state, { payload }) {
      return {
        ...state,
        locale: payload.locale,
        key: payload.key,
        messages: payload.messages,
      }
    },
  },

}
