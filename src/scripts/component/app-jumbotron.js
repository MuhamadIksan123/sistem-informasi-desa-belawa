class AppJumbotron extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            .jumbotron {
              min-height: 650px;
              width: 100%;
              background: linear-gradient(180deg, #39cc14 10%, rgb(200, 228, 195) 100%);
            }
  
            .jumbotron__title {
              color: #fff;
              font-size: 36px;
            }
            
            .jumbotron__subtitle {
                color: #fff;
                font-size: 20px;
            }
          </style>
  
          <div class="jumbotron pt-5 mt-5">
            <div class="row d-flex justify-content-evenly pt-5 align-items-center g-0 mt-3 text-center">
            <div>
                <h1 class="jumbotron__title">Desa Belawa Official</h1>
                <p class="jumbotron__subtitle">Informasi lengkap seputar kegiatan dan potensinya ada disini!!</p>
                <i class="fas fa-tree" style="font-size:300px;color:white"></i>
            </div>
            <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(200, 228, 195, 1)" offset="0%"></stop><stop stop-color="rgba(57, 204, 20, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,147L21.8,155.2C43.6,163,87,180,131,228.7C174.5,278,218,359,262,367.5C305.5,376,349,310,393,253.2C436.4,196,480,147,524,155.2C567.3,163,611,229,655,285.8C698.2,343,742,392,785,400.2C829.1,408,873,376,916,318.5C960,261,1004,180,1047,171.5C1090.9,163,1135,229,1178,269.5C1221.8,310,1265,327,1309,326.7C1352.7,327,1396,310,1440,318.5C1483.6,327,1527,359,1571,383.8C1614.5,408,1658,425,1702,359.3C1745.5,294,1789,147,1833,114.3C1876.4,82,1920,163,1964,212.3C2007.3,261,2051,278,2095,310.3C2138.2,343,2182,392,2225,343C2269.1,294,2313,147,2356,122.5C2400,98,2444,196,2487,261.3C2530.9,327,2575,359,2618,343C2661.8,327,2705,261,2749,253.2C2792.7,245,2836,294,2880,310.3C2923.6,327,2967,310,3011,269.5C3054.5,229,3098,163,3120,130.7L3141.8,98L3141.8,490L3120,490C3098.2,490,3055,490,3011,490C2967.3,490,2924,490,2880,490C2836.4,490,2793,490,2749,490C2705.5,490,2662,490,2618,490C2574.5,490,2531,490,2487,490C2443.6,490,2400,490,2356,490C2312.7,490,2269,490,2225,490C2181.8,490,2138,490,2095,490C2050.9,490,2007,490,1964,490C1920,490,1876,490,1833,490C1789.1,490,1745,490,1702,490C1658.2,490,1615,490,1571,490C1527.3,490,1484,490,1440,490C1396.4,490,1353,490,1309,490C1265.5,490,1222,490,1178,490C1134.5,490,1091,490,1047,490C1003.6,490,960,490,916,490C872.7,490,829,490,785,490C741.8,490,698,490,655,490C610.9,490,567,490,524,490C480,490,436,490,393,490C349.1,490,305,490,262,490C218.2,490,175,490,131,490C87.3,490,44,490,22,490L0,490Z"></path></svg>
          </div>
        `;
  }
}

customElements.define('app-jumbotron', AppJumbotron);
