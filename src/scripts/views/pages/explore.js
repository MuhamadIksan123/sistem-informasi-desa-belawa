import { createItemTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import '../../component/app-search';
import '../../component/app-genre';

const Explore = {
  render() {
    return `
      <app-search></app-search>
      <app-genre></app-genre>
      <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-0'></div>
    `;
  },

  afterRender() {
    const komikContainer = document.querySelector('#items');
    data.komiks.forEach((item) => {
      komikContainer.innerHTML += createItemTemplate(item);
    });
  },
};

export default Explore;
