// This file is auto generated by build/build-entry.js
import Component from './preview.vue';

const version = '1.0.9';

const install = (Vue) => {
  Vue.component(Component.name, Component);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

Component.version = version;
Component.install = install;
Component.use = function (optionsOrInstall) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(Component);
  } else {
    optionsOrInstall.install(Component);
  }
};

export default Component;
