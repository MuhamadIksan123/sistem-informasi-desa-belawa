import UrlParser from '../../routes/url-parser';
import { createItemTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import '../../component/app-search';
import '../../component/app-kategori';

const Kategoriy = {
  render() {
    return `
    <app-search></app-search>
    <app-kategori></app-kategori>
    <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const contactForm = document.getElementById('contact-form');
    const loader = document.querySelector('.loader');

    loader.style.display = 'none';

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      loader.style.display = 'block';
      const url = e.target.action;
      const formData = new FormData(contactForm);

      fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
        .then(() => {
          loader.style.display = 'none';
          window.location.href = 'http://localhost:8080/#/thankyou';
        })
        .catch((e) => alert('Error occured'));
    });
  },
};

export default Kategoriy;
