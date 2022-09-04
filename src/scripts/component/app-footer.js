class AppFooter extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <style>
          
        </style>

  <footer class="text-center text-dark my-4" style="background-color: white; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);">
    <div class="container p-2 pb-0">
      <section class="mb-4">
        <a class="btn btn-outline-dark btn-floating mx-1" href="https://m.facebook.com/profile.php?id=100079592233944" role="button">
          <i class="fab fa-facebook-f"></i>
        </a>

        <a class="btn btn-outline-dark btn-floating mx-1" href="https://goo.gl/maps/Asn8kJgrxSxmurbi8" role="button">
          <i class="fas fa-map-marker-alt"></i>
        </a>

        <a class="btn btn-outline-dark btn-floating mx-1" href="https://www.youtube.com/channel/UCgvmyCD72MIcM3Y7t88-4iQ/featured" role="button">
          <i class="fab fa-youtube"></i>
        </a>

        <a class="btn btn-outline-dark btn-floating mx-1" href="https://www.instagram.com/pemdes.belawa/" role="button">
          <i class="fab fa-instagram"></i>
        </a>

        <a class="btn btn-outline-dark btn-floating mx-1" href="https://www.tiktok.com/@pemdesbelawa7" role="button">
          <i class="fab fa-tiktok"></i>
        </a>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2022 Copyright:
      <a class="text-danger" href="https://www.instagram.com/pemdes.belawa/">Pemerintahan Desa Belawa</a>
    </div>
  </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
