class AppAboutUs extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
               <style>
                h1.title {
                  font-size: 2rem;
                  color: #cc142d;
                  padding: auto;
                  display: flex;
                  background-color: rgb(217, 217, 217);
                  border-radius: 10px;
                  text-align: center;
                  justify-content: center;
                }
                h2.title {
                  font-size: 2rem;
                  color: Black;
                  padding: auto;
                  display: flex;
                  background-color: rgb(217, 217, 217);
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
                  background-color: rgb(217, 217, 217);
                  border-radius: 10px;
                }
                </style>
                
                <section id='welcome'>
                <div class='container'>
                <div class='row justify-content-evenly mb-5 pb-5'>
                  <div class='col-sm-7 pe-3 d-flex flex-column justify-content-center text-center'>
                    <h1 class='title'>Tentang Website Desa Belawa</h1>
                    <p class='subtitle'>Website ini didirikan dengan alasan agar masyarakat dapat menerima informasi dengan baik, dalam kegiatan maupun potensi desa. Tidak hanya masyarakat desa belawa saja yang menerima informasi lewat media ini akan tetapi masyarakat di luar desa pun dapat menerima informasi yang sama juga. Kami berharap setelahnya terbuatnya website ini dapat mempermudah penyampaian informasi desa</p>
                  </div>
                </div>
                </div>
                </section>             
              `;
  }
}

customElements.define('app-about-us', AppAboutUs);
