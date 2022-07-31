import FavoriteKomikIdb from '../data/favorite-komik-idb';
import { createFavoritButton, createUnFavoritButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ FavoriteButtonContainer, komik }) {
    this._FavoriteButtonContainer = FavoriteButtonContainer;
    this._komiks = komik;
    console.log(komik);
    console.log(FavoriteButtonContainer);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._komiks;

    if (await this._isKomikExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isKomikExist(id) {
    const komik = await FavoriteKomikIdb.getKomik(id);
    return !!komik;
  },

  _renderLike() {
    this._FavoriteButtonContainer.innerHTML = createFavoritButton();

    const favoriteButton = document.querySelector('#favbutton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteKomikIdb.putKomik(this._komiks);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._FavoriteButtonContainer.innerHTML = createUnFavoritButton();

    const favoriteButton = document.querySelector('#favbutton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteKomikIdb.deleteKomik(this._komiks.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
