const createItemTemplate = (komik) => `
    <div class="col">
      <div class="card shadow m-2 bg-light border-5 border-light">
        <div class="item-header">
          <img src="${komik.pictureId}" class="card-img-top img-fluid item-image" alt="Gambar ${komik.nama}" loading="lazy">
          <div class="item-header-rating rounded-start">
              <p class="mb-0"><i class="far fa-calendar-check"></i><span class="rating-score">${komik.rating}</span></p>
          </div>
        </div>
        <div class="card-body">
          <h4><a class="card-title" href="${`/#/detail/${komik.id}`}">${komik.nama}</a></h4>
          <p class="card-text" style="text-align: justify;">${komik.spoiler}</p>
        </div>
      </div>
    </div>
  `;

const createDetailTemplate = (komik) => `
  <h2 class="komik__title">${komik.nama}</h2>
  <img class="komik__poster lazyload" src="${komik.pictureId}" alt="${komik.nama}" />
  <div class="komik__info">
  <h3>Information</h3>
    <h4>Penanggung Jawab</h4>
    <p>${komik.pengarang}</p>
    <h4>Waktu</h4>
    <p>${komik.rating}</p>
    <h4>Kategori</h4>
    <p class="text-capitalize">${komik.genre}</p>
  </div>
  <div class="komik__overview">
    <h3>Description</h3>
    ${komik.sinopsis.map((s) => s.name).join(' ')}
    <h4>Media Sosial</h4>
    <p>${komik.sosmed.map((food) => food.name).join(' ')}</p>
    <h4>Dokumentasi</h4>
    <p>${komik.dokumentasi}</p>
    <div class="komik__description">
      <h3>Customer Reviews</h3>
      <p>${komik.customerReviews
    .map((customer) => customer.review)
    .join(' | ')}</p>
    </div>
  </div>
`;

const createFavoritButton = () => `
  <button aria-label="tambahkan ke favorit" id="favbutton" class="fav">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnFavoritButton = () => `
  <button aria-label="hapus dari favorit" id="favbutton" class="fav">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createItemTemplate,
  createDetailTemplate,
  createFavoritButton,
  createUnFavoritButton,
};
