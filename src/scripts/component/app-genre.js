class AppGenre extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="list-item text-center">
        <a href="/#/explore"><div class="item">All</div></a>
        <a href="/#/genre/KKM"><div class="item">KKM</div></a>
        <a href="/#/genre/potensi"><div class="item">Potensi</div></a>
        <a href="/#/genre/pemdes"><div class="item">Pemerintah Desa</div></a>
        <a href="/#/genre/layanan"><div class="item">Layanan</div></a>
      </div>
          `;
  }
}

customElements.define('app-genre', AppGenre);
