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
    function filterByKategori(item) {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      if (item.kategori === url.id) {
        return true;
      }
    }

    const arrByKategori = data.belawas.filter(filterByKategori);

    const belawaContainer = document.querySelector('#items');
    arrByKategori.forEach((item) => {
      belawaContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Kategoriy;
