class AppJumbo extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .hero {
              box-sizing: border-box;
              position: absolute;
              top: 0px;
              left: 0px;
              display: flex;
              align-items: center;
              min-height: 380px;
              margin-top: 44px;
              width: 100%;
              text-align: center;
              /* background-image: url('../public/images/hero.jpg'); */
              background-position: center;
              background-color: rgba(0, 0, 0, 0.815);
              z-index: 1;
            }
            
            .container{
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .hero__inner {
              position: absolute;
              top: 180px;
              z-index: 2;
            }

            .hero__title {
              color: #fff;
              font-weight: 500;
              font-size: 25px;
              text-shadow: 2px 2px #f10a0a;
            }

            .hero__tagline {
              color: #fff;
              margin-top: 16px;
              font-size: 14px;
              font-weight: 500;
              text-shadow: 2px 2px #000;
            }

            @media screen and (min-width: 550px) {
              .hero__title {
                font-weight: 500;
                font-size: 35px;
                text-shadow: 3px 3px #f10a0a;
              }

              .hero__tagline {
                font-size: 18px;
                font-weight: 500;
                text-shadow: 2px 2px #000;
              }
            }

            @media screen and (min-width: 800px) {
              .hero__title {
                font-weight: 700;
                font-size: 50px;
                text-shadow: 3px 3px #f10a0a;
              }

              .hero__tagline {
                font-size: 20px;
                text-shadow: 2px 2px #000;
              }
            }
          </style>
  
          <div class="hero mb-5 container-fluid" alt="Gambar Hero Makanan" style="display: inline-block">
            <picture>
              <source media="(max-width: 650px)" srcset="public/images/hero.jpg" type="image/jpeg" />
              <source media="(min-width: 650px)" srcset="public/images/hero.jpg" type="image/jpeg" />
              <source media="(min-width: 1200px)" srcset="public/images/hero.jpg" type="image/jpeg" />

              <img loading="lazy" width="100%" height="380px" src="public/images/hero.jpg" alt="" />
            </picture>

            <div class="container">
              <div class="hero__inner">
                <h1 class="hero__title ">Pemerintahan Desa Belawa</h1>
                <p class="hero__tagline">Informasi Lengkap Seputar Desa dan Potensinya Ada Disini</p>
              </div>
            </div>
          </div>
        `;
  }
}

customElements.define('app-jumbo', AppJumbo);
