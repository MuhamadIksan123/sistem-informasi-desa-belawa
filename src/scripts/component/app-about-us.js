class AppAboutUs extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
               <style>
                h1.title {
                  font-size: 2rem;
                  color: #39cc14;
                  padding: auto;
                  display: flex;
                  background-color: rgb(200, 228, 195);
                  border-radius: 10px;
                  text-align: center;
                  justify-content: center;
                }
                h2.title {
                  font-size: 2rem;
                  color: Black;
                  padding: auto;
                  display: flex;
                  background-color: rgb(200, 228, 195);
                  border-radius: 10px;
                  text-align: center;
                  justify-content: center;
                }
                p.subtitle {
                  font-size: 1.2rem;
                  color: #042B41;
                  padding: 80px 50px 80px 50px;
                  width: 100%;
                  display: flex;
                  background-color: rgb(200, 228, 195);
                  border-radius: 10px;
                }
                </style>
                
                <section id='welcome'>
                <div class='container'>
                <div class='row justify-content-evenly mb-5 pb-5'>
                  <div class='col-sm-7 pe-3 d-flex flex-column justify-content-center text-center'>
                    <h1 class='title'>Tentang Website Desa Belawa</h1>
                    <p class='subtitle'>Website ini didirikan dengan alasan agar masyarakat dapat menerima informasi baik dalam kegiatan maupun potensi desa. Tidak hanya masyarakat yang menerima informasi lewat media ini akan tetapi masyarakat di luar desa pun dapat menerima informasi desa yang sama juga, tanpa perlu datang ke desanya</p>
                  </div>
                </div>
                </div>
                </section>             
              `;
  }
}

customElements.define('app-about-us', AppAboutUs);
