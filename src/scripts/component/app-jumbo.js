class AppJumbo extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `

          <style>
          @media screen and (min-width: 320px) {
            .carousel img {
              min-height: 512px;
            }

            .carousel-caption {
              height: 300px;
            }
          }

          

          @media screen and (min-width: 1200px) {

            .carousel-inner {
              height: 500px;
            }

            .carousel-caption {
              height: 500px;
            }
          }

          .carousel {
            margin-top: -18px;
            top: 100px;
          }

          .carousel-caption h1, p.deskripsi {
            text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red;
          }
          </style>
  
          <div id="myCarousel" class="carousel slide container-fluid" data-bs-ride="carousel">
            <div class="carousel-indicators" >
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="public/images/cikuya2.jpg"  width="100%" alt="hero1">

                <div class="container">
                  <div class="carousel-caption text-start">
                    <h1>Wisata Cikuya</h1>
                    <p class="deskripsi">Wisata Edukasi dan Konservasi Kura-Kura</p>
                    <p><a class="btn btn-lg btn-primary" href="">Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src="public/images/hero3.jpg" width="100%" height="100%" alt="hero2">

                <div class="container">
                  <div class="carousel-caption">
                    <h1>Desa Belawa</h1>
                    <p class="deskripsi">Kecamatan Lemahaabang Kabupaten Cirebon Provinsi Jawa Barat</p>
                    <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src="public/images/olahan-mangga2.jpg" width="100%" height="100%" alt="hero3">

                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1>Rumah Olahan Mangga</h1>
                    <p class="deskripsi">Memproduksi beberapa olahan mangga dan olahan hasil tani lainnya</p>
                    <p><a class="btn btn -lg btn-primary" href="#">Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        `;
  }
}

customElements.define('app-jumbotron', AppJumbo);
