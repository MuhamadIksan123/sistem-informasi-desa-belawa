class AppThankyou extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
            <style>
              .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
              }

              @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                  font-size: 3.5rem;
                }
              }

              .b-example-divider {
                height: 3rem;
                background-color: rgba(0, 0, 0, .1);
                border: solid rgba(0, 0, 0, .15);
                border-width: 1px 0;
                box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
              }

              .b-example-vr {
                flex-shrink: 0;
                width: 1.5rem;
                height: 100vh;
              }

              .bi {
                vertical-align: -.125em;
                fill: currentColor;
              }

              .nav-scroller {
                position: relative;
                z-index: 2;
                height: 2.75rem;
                overflow-y: hidden;
              }

              .nav-scroller .nav {
                display: flex;
                flex-wrap: nowrap;
                padding-bottom: 1rem;
                margin-top: -1px;
                overflow-x: auto;
                text-align: center;
                white-space: nowrap;
                -webkit-overflow-scrolling: touch;
              }

              .content h1 {

              }
            </style>
            <body>
              <div class="px-4 text-center content">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="public/images/pemdes-belawa.png">
                <h1 class="display-8 fw-bold">Terima kasih sudah menghubungi kami</h1>
                <div class="col-lg-6 mx-auto">
                  <p class="lead mb-4">Silakan periksa email Anda dalam 24 jam, kami akan segera mengirimkan balasan kepada Anda mungkin. Terima kasih</p>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="#/kontak" type="button" class="btn btn-primary btn-lg px-4 gap-3">Kembali</a>
                  </div>
                </div>
              </div>
            </body>
          `;
  }
}

customElements.define('app-thankyou', AppThankyou);
