class AppKategori extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="list-item text-center">
        <a href="/#/explore"><div class="item">All</div></a>
        <a href="/#/kategori/KKM"><div class="item">KKM</div></a>
        <a href="/#/kategori/potensi"><div class="item">Potensi</div></a>
        <a href="/#/kategori/pemdes"><div class="item">Pemerintah Desa</div></a>
        <a href="/#/kategori/layanan"><div class="item">Layanan</div></a>
      </div>
          `;
  }
}

customElements.define('app-kategori', AppKategori);
