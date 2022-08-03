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
            background-color:white;
            padding: 8px 16px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          }

          .navbar-brand {
            font-weight: bolder;
          }

          .nav__title,
          .nav__item {
            display: inline-block;
            text-decoration: none;
            color: #f10a0a;
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
            <a class="navbar-brand fs-3 nav__title" href="#">DESA BELAWA</a>
            <button id="hamburgerButton" class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            ☰
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active nav__item" aria-current="page" href="#/home">Beranda</a>
                <a class="nav-link active nav__item" href="#/explore">Kategori</a>
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
