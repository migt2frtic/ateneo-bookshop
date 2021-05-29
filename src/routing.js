import { Router } from '@vaadin/router';

import './views/home-view';
import './views/novedades-view';
import './views/comic-view';
import './views/login-view';
import './views/cesta-view';
import './views/manga-view';
import './views/form-example-view';
import './views/registro';
import './views/not-found-view';

export const routing = function() {
  const outlet = this.shadowRoot.getElementById('root');
  const router = new Router(outlet);

  var routes = [
    { path: '/', component: 'home-view' },
    { path: '/novedades-view', component: 'novedades-view' },
    { path: '/comic-view', component: 'comic-view' },
    { path: '/manga-view', component: 'manga-view' },
    { path: '/form-example-view', component: 'form-example-view' },
    { path: '/cesta-view', component: 'cesta-view' },
    { path: '/login-view', component: 'logIn-view' },
    { path: '/registro', component: 'registro' },

    { path: '(.*)', component: 'not-found-view' }

  ];

  router.setRoutes(routes);
};
