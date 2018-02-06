import Vue from 'vue';
import Router from 'vue-router';
import CoolRockets from '@/components/CoolRockets';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CoolRockets',
      component: CoolRockets,
    },
  ],
});
