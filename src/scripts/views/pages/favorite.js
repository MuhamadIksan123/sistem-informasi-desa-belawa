import FavoriteBelawaIdb from '../../data/favorite-belawa-idb';
import { createItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="container">
    <h2 class='pt-5 pb-3 mb-3 text-center border-bottom'>Informasi Favorit</h2>

      <div id='items' class='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 g-0'></div>
    `;
  },

  async afterRender() {
    const belawas = await FavoriteBelawaIdb.getAllBelawa();
    const belawaContainer = document.querySelector('#items');
    if (belawas.length === 0) {
      belawaContainer.innerHTML = `
      <i class="fas fa-search">Emty favorite belawa</i>
      `;
    }
    belawas.forEach((item) => {
      belawaContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Favorite;
