const createItemTemplate = (komik) => `
    <div class="col">
      <div class="card shadow m-2 bg-light border-5 border-light">
        <div class="item-header">
          <img src="${komik.pictureId}" class="card-img-top img-fluid item-image" alt="Gambar ${komik.nama}" loading="lazy">
          <div class="item-header-rating rounded-start">
              <p class="mb-0">⭐️<span class="rating-score">${komik.rating}</span></p>
          </div>
        </div>
        <div class="card-body">
          <h4><a class="card-title" href="${`/#/detail/${komik.id}`}">${komik.nama}</a></h4>
          <p class="card-text">${komik.sinopsis}</p>
        </div>
      </div>
    </div>
  `;

// const createDetailTemplate = (komik) => `
//   <div class="row">
//     <h2 class="text-center">${komik.nama}</h2>
//     <div class="col-md-4 mt-3">
//       <img src="${komik.pictureId}" alt="logo" class="img-fluid rounded">
//     </div>
//     <div class="col-md-8 mt-3">
//           <p class="lead text-muted">Sinopsis</p>
//           <p class="lead">${komik.sinopsis}</p>
//           <p class="lead text-muted">Pengarang</p>
//           <p class="lead">${komik.pengarang}</p>
//           <p class="lead text-muted">Rating</p>
//           <p class="lead">${komik.rating}</p>
//           <p class="lead text-muted">Genre</p>
//           <p class="lead">${komik.genre}</p>
//     </div>
//   </div>
// `;

const createDetailTemplate = (komik) => `
  <h2 class="komik__title">${komik.nama}</h2>
  <img class="komik__poster lazyload" src="${komik.pictureId}" alt="${komik.nama}" />
  <div class="komik__info">
  <h3>Information</h3>
    <h4>Penanggung Jawab</h4>
    <p>${komik.pengarang}</p>
    <h4>Rating</h4>
    <p>${komik.rating}</p>
    <h4>Categories</h4>
    <p>${komik.genre}</p>
  </div>
  <div class="komik__overview">
    <h3>Description</h3>
    <p>${komik.sinopsis}</p>
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
