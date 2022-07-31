class AppBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <style>
          .bg__navbar {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 99;
            background-color:#39cc14 ;
          }

          .nav__title,
          .nav__item {
            display: inline-block;
            text-decoration: none;
            color: #FFFFFF;
            min-width : 44px;
            min-height: 44px;
            border-radius: 5px;
          }

          .nav__item:hover {
            text-decoration: underline;
            color: #39cc14;
            background-color: #FFFFFF;
          }
        </style>
        
        <nav class="navbar navbar-expand-lg bg__navbar p-3">
          <div class="container-fluid">
            <a class="navbar-brand fs-3 nav__title" href="#">Website Desa Belawa</a>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active nav__item" aria-current="page" href="#/home">Beranda</a>
                <a class="nav-link active nav__item" href="#/favorite">Kontak</a>
                <a class="nav-link active nav__item" href="#/explore">Pencarian</a>
                <a class="nav-link active nav__item" href="#/favorite">Favorit</a>
                <a class="nav-link active nav__item" href="#/publis">Publis</a>
                <a class="nav-link active nav__item" href="#/about">About Us</a>
              </div>
            </div>
          </div>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
