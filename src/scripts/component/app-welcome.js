class AppWelcome extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
             <style>
              .headline {
                    overflow: auto;
                    margin-top: 380px;
                  }

                  .headline__figure {
                    width: 100%;
                    float: left;
                  }

                  .headline__figure img {
                    width: 100%;
                  }

                  .headline__figure figcaption {
                    text-align: center;
                    color: #666666;
                    font-size: 13px;
                    font-weight: 400;
                    margin-top: 8px;
                  }

                  .headline__content {
                    width: 100%;
                    float: left;
                    padding: 16px 32px;
                  }

                  .headline__title {
                    font-size: 32px;
                    font-weight: 500;
                  }

                  .headline__description {
                    font-size: 16px;
                    margin-top: 12px;
                  }

                  .headline__button {
                    font-family: 'Roboto', sans-serif;
                    text-transform: uppercase;
                    margin-top: 24px;
                    cursor: pointer;
                    padding: 8px 16px;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    background-color: #2c3e50;
                    transition: opacity 0.3s;
                  }

                  .headline__button:hover {
                    opacity: 0.8;
                  }
              </style>
  
            <article class="headline">
              <figure class="headline__figure">
                <img src="public/cover/peta.png" alt="Dicoding Fact Sheet" />
                <figcaption>Pemerintah Desa Agustus 2022 Infographic, 5.678 Penduduk</figcaption>
              </figure>
              <div class="headline__content">
                <h1 class="headline__title">Tentang Desa Belawa</h1>
                <p class="headline__description">
                  Belawa adalah desa di kecamatan Lemahabang, Cirebon, Jawa Barat, Indonesia. Desa Belawa adalah salah satu desa yang berada di atas perbukitan ciwado, dikelilingi ngarai yang indah, dengan ketinggian 171 mdpl, merupakan salah satu wilayah pertanian penghasil buah mangga dan pisang. Selain itu Desa Belawa memiliki potensi dibidang pariwisata, antara lain wisata alam, wisata Konservasi dan edukasi kura kura langka, salah satu hewan purba asli Cirebon yang menjadi salah satu destinasi Pariwisata unggulan di Kabupaten Cirebon Provinsi Jawa Barat. Konon nenek moyang orang Cirebon berasal dari wilayah tersebut dengan ditemukannya salah satu peninggalan artepak prasejarah, disalah satu area perkebunan terdapat sebuah kubur batu (Spiti) yang telah diteliti oleh tim Arkeolog dari Balai Arkeologi Bandung (Balarbandung) pada akhir tahun 2013 yang dipimpin seorang ahli yaitu Lutfi Yondri, dimana menurut hasil uji karbon pada lapisan tanah terdapat lapukan perunggu,sehingga diperkirakan nenek moyang orang Cirebon hidup pada era zaman perunggu 5.000 - 1.000 SM. Selain itu masih terdapat berbagai cerita menarik tentang Desa Belawa.
                </p>
                <button class="headline__button">Read More</button>
              </div>
            </article>
            `;
  }
}

customElements.define('app-welcome', AppWelcome);
