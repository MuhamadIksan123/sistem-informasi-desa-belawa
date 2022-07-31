class AppGenre extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="list-item text-center">
        <a href="/#/explore"><div class="item">All</div></a>
        <a href="/#/genre/adventure"><div class="item">Adventure</div></a>
        <a href="/#/genre/romance"><div class="item">Romance</div></a>
        <a href="/#/genre/comedy"><div class="item">Comedy</div></a>
        <a href="/#/genre/action"><div class="item">Action</div></a>
      </div>
          `;
  }
}

customElements.define('app-genre', AppGenre);
