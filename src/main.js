import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from '@/plugins/vuetify';
import router from './router';
import App from './App.vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// eslint-disable-next-line vue/require-name-property
new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount('#app');
