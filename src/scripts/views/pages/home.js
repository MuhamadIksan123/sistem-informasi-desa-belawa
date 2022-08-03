import { createItemTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import '../../component/app-jumbo';
import '../../component/app-category';
import '../../component/app-welcome';

const Home = {
  render() {
    return `
    <app-jumbo></app-jumbo>
    <app-welcome></app-welcome>
    <h2 class='pt-5 pb-3 mb-3 text-center border-bottom'>Rekomendasi</h2>
    <div id='items' class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0'></div>
    `;
  },

  afterRender() {
    const komikContainer = document.querySelector('#items');
    for (let index = 0; index < 6; ++index) {
      const random = Math.floor(Math.random() * data.komiks.length);
      const item = data.komiks[random];
      // eslint-disable-next-line no-self-compare, eqeqeq
      if (item.nama !== komikContainer.nama) {
        komikContainer.innerHTML += createItemTemplate(item);
      }
    }
  },
};

export default Home;
