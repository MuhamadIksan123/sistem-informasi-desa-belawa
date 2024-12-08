class AppHeadline extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
             <style>

                .headline {
                  max-width: 1200px;
                  overflow: auto;
                  margin: 0 auto;
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
                  padding: 0px 32px;
                }

                .headline__description {
                  font-size: 16px;
                  margin-top: 12px;
                  text-align: justify;
                }

              </style>
  
            <article id="headline" class="headline">
              <div class="position-relative overflow-hidden" style="height: 500px;">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.8582285382!2d108.56964327366417!3d-6.832632001263672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1b1430d2ad25%3A0xc48e2d0e99cb8885!2sBelawa%2C%20Kec.%20Lemahabang%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1729175481319!5m2!1sid!2sid"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-100 h-100"
                ></iframe>
              </div>
              <div class="headline__content">
                <h1 class="headline__title">Tentang Desa Belawa</h1>
                <p class="headline__description">
                  Belawa adalah desa di kecamatan Lemahabang, Cirebon, Jawa Barat, Indonesia. Desa Belawa adalah salah satu desa yang berada di atas perbukitan ciwado, dikelilingi ngarai yang indah, dengan ketinggian 171 mdpl, merupakan salah satu wilayah pertanian penghasil buah mangga dan pisang. Selain itu Desa Belawa memiliki potensi dibidang pariwisata, antara lain wisata alam, wisata Konservasi dan edukasi kura kura langka, salah satu hewan purba asli Cirebon yang menjadi salah satu destinasi Pariwisata unggulan di Kabupaten Cirebon Provinsi Jawa Barat. Konon nenek moyang orang Cirebon berasal dari wilayah tersebut dengan ditemukannya salah satu peninggalan artepak prasejarah, disalah satu area perkebunan terdapat sebuah kubur batu (Spiti) yang telah diteliti oleh tim Arkeolog dari Balai Arkeologi Bandung (Balarbandung) pada akhir tahun 2013 yang dipimpin seorang ahli yaitu Lutfi Yondri, dimana menurut hasil uji karbon pada lapisan tanah terdapat lapukan perunggu,sehingga diperkirakan nenek moyang orang Cirebon hidup pada era zaman perunggu 5.000 - 1.000 SM. Selain itu masih terdapat berbagai cerita menarik tentang Desa Belawa.
                </p>
              </div>
            </article>
            `;
  }
}

customElements.define('app-headline', AppHeadline);
