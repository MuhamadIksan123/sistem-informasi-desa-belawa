import { createItemTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import '../../component/app-jumbo';
import '../../component/app-headline';

const Home = {
  render() {
    return `
    <app-jumbo></app-jumbo>
    <app-headline></app-headline>
    <h2 class='pt-5 pb-3 mb-3 text-center border-bottom'>Rekomendasi</h2>
    <div id='items' class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-0'></div>
    <a href=""></a>
    `;
  },

  afterRender() {
    const belawaContainer = document.querySelector('#items');
    for (let index = 0; index < 8; ++index) {
      const item = data.belawas[index];
      // eslint-disable-next-line no-self-compare, eqeqeq
      belawaContainer.innerHTML += createItemTemplate(item);
    }
  },
};

export default Home;
