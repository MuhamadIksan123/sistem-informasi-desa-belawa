const createItemTemplate = (belawa) => `
    <div class="col">
      <div class="card shadow m-2 bg-light border-5 border-light">
        <div class="item-header">
          <img src="${belawa.pictureId}" class="card-img-top img-fluid item-image" alt="Gambar ${belawa.nama}" loading="lazy">
          <div class="item-header-waktu rounded-start">
              <p class="mb-0"><i class="far fa-calendar-check"></i><span class="waktu-score">${belawa.waktu}</span></p>
          </div>
        </div>
        <div class="card-body">
          <h4><a class="card-title" href="${`/#/detail/${belawa.id}`}">${belawa.nama}</a></h4>
          <p class="card-text" style="text-align: justify;">${belawa.spoiler}</p>
        </div>
      </div>
    </div>
  `;

const createDetailTemplate = (belawa) => `
  <h2 class="belawa__title">${belawa.nama}</h2>
  <img class="belawa__poster lazyload" src="${belawa.pictureId}" alt="${belawa.nama}" />
  <div class="belawa__info">
  <h3>Information</h3>
    <h4>Penanggung Jawab</h4>
    <p>${belawa.pemangku}</p>
    <h4>Waktu</h4>
    <p>${belawa.waktu}</p>
  </div>
  <div class="belawa__overview">
    <h3>Description</h3>
    ${belawa.sinopsis.map((s) => s.paragraf).join(' ')}
    <h4>Media Sosial</h4>
    <p>${belawa.sosmed.map((s) => s.icon).join(' ')}</p>
    <h4>Dokumentasi</h4>
    <p>${belawa.dokumentasi}</p>
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
