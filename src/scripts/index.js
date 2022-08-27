import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/fontawesome-free-6.1.2-web/css/all.min.css';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-bar';
import './component/app-footer';
import './component/app-search';
import './component/app-kategori';
import './component/app-thankyou';
import App from './views/app';

const app = new App({
  jumbotron: document.querySelector('#jumbotron'),
  content: document.querySelector('#mainContent'),
  searchElement: document.querySelector('app-search'),
  searchListElement: document.querySelector('search-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
