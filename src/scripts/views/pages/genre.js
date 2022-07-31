import UrlParser from '../../routes/url-parser';
import { createItemTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import '../../component/app-search';
import '../../component/app-genre';

const Genrey = {
  render() {
    return `
    <app-search></app-search>
    <app-genre></app-genre>
    <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    function filterByGenre(item) {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      if (item.genre === url.id) {
        return true;
      }
    }

    const arrByGenre = data.komiks.filter(filterByGenre);

    const komikContainer = document.querySelector('#items');
    arrByGenre.forEach((item) => {
      komikContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Genrey;
