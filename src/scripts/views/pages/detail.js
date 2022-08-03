import UrlParser from '../../routes/url-parser';
import { createDetailTemplate } from '../templates/template-creator';
import data from '../../../DATA.json';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  render() {
    return `

      <style>
        .container {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          
        }

        .detail {
          background-color: white;
        }

        .detail h2, .detail h3, .detail h4 {
        }

        .komik__title {
          font-size: 1.5em;
          font-weight: bold;
        }

        .detail h3{
          margin: 8px 0;
          font-size: 1.33em;
        }

        .detail h4{
          margin: 8px 0;
          font-size: 1.17em;
        }
      </style>
      <div class="container">
        <div id='detail' class='gx-0 mx-4 detail justify-content-center'></div>
        <div id="likeButtonContainer"></div>
      </div>
      
    `;
  },

  afterRender() {
    function filterByID(item) {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      if (item.id === url.id) {
        return true;
      }
    }

    const arrByID = data.komiks.filter(filterByID);
    const komik = arrByID[0];

    const komikContainer = document.querySelector('#detail');
    komikContainer.innerHTML += createDetailTemplate(komik);
    LikeButtonInitiator.init({
      FavoriteButtonContainer: document.querySelector('#likeButtonContainer'),
      komik,
    });
  },
};

export default Detail;
