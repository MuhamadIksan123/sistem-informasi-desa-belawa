import { createItemTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import '../../component/app-search';
import '../../component/app-kategori';

const Explore = {
  render() {
    return `
      <app-search></app-search>
      <app-kategori></app-kategori>
      <div id='items' class='row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-0'></div>
    `;
  },

  afterRender() {
    const belawaContainer = document.querySelector('#items');
    data.belawas.forEach((item) => {
      belawaContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Explore;
