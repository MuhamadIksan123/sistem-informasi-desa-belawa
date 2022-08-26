import FavoriteBelawaIdb from '../data/favorite-belawa-idb';
import {
  createFavoritButton,
  createUnFavoritButton,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ FavoriteButtonContainer, belawa }) {
    this._FavoriteButtonContainer = FavoriteButtonContainer;
    this._belawas = belawa;
    console.log(belawa);
    console.log(FavoriteButtonContainer);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._belawas;

    if (await this._isBelawaExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isBelawaExist(id) {
    const belawa = await FavoriteBelawaIdb.getBelawa(id);
    return !!belawa;
  },

  _renderLike() {
    this._FavoriteButtonContainer.innerHTML = createFavoritButton();

    const favoriteButton = document.querySelector('#favbutton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteBelawaIdb.putBelawa(this._belawas);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._FavoriteButtonContainer.innerHTML = createUnFavoritButton();

    const favoriteButton = document.querySelector('#favbutton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteBelawaIdb.deleteBelawa(this._belawas.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
