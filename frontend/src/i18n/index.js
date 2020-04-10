// function setLocale(lang) {
//   window.localStorage.setItem('user_language', lang);
//   document.querySelector('html').setAttribute('lang', lang);
// }

// export function loadLanguage(lang) {
//   setLocale(lang);
//   return new Promise((resolve, reject) => {
//     return import(/* webpackChunkName: "lang-[request]" */ `./${lang}.json`).then(msgs => {
//       resolve(msgs.default)
//     }, (err) => {
//       reject('Error loading translations', err)
//     })
//   })
// };

import pt from './locales/pt-BR.json';
import en from './locales/en-US.json';

export const languages = {
  'pt-BR': { value: 'pt-BR', label: 'Português', messages: pt },
  'en-US': { value: 'en-US', label: 'English', messages: en },
};
