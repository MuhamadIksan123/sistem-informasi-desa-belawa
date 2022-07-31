import FavoriteKomikIdb from '../../data/favorite-komik-idb';
import { createItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="container">
    <h2 class='pt-5 pb-3 mb-3 text-center border-bottom'>Favorite Komik</h2>

      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  async afterRender() {
    const komiks = await FavoriteKomikIdb.getAllKomik();
    const komikContainer = document.querySelector('#items');
    if (komiks.length === 0) {
      komikContainer.innerHTML = `
      <i class="fas fa-search">Emty favorite komik</i>
      `;
    }
    komiks.forEach((item) => {
      komikContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Favorite;
