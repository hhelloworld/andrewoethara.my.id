
// Import the necessary modules and components
import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta';


import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css'

import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';




import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'




library.add(faBars);
library.add(faArrowUpRightFromSquare);
library.add(faImages);
library.add(faPenToSquare);
library.add(faXmark);



Vue.component('quill-editor', quillEditor);


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueMeta);


new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: (h) => h(App),
});
