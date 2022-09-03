class AppKontak extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
          <style>
            body {
                font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                background-color: #fff;
                color: #000; 
            }
            
            * {box-sizing: border-box;}

            .container {
              font-family: Arial;
              font-size: 0.9rem;
            }
            
            h2 {
                font-family: "Poppins", sans-serif;
                font-size: 2.5rem;
                font-weight: 700;
                color: #cc142d;
            }
            
            label {
                font-weight: bold;
            }
            
            input[type=email], input[type=text], input[type=file], input[type=datetime-local], select, textarea {
              width: 100%;
              padding: 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
              margin-top: 6px;
              margin-bottom: 16px;
              resize: vertical;
            }
            
            input[type=email], input[type=text], #pesan {
                border: none;
                border-bottom: 1px solid #d9d9d9;
                padding-left: 0;
                padding-right: 0;
                border-radius: 0; 
            }
            
            input[type=email]:active, input[type=text]:active, #pesan:active, input[type=email]:focus, input[type=text]:focus, #pesan:focus {
                outline: none;
                -webkit-box-shadow: none;
                box-shadow: none;
                border-color: #000; 
            }
            
            button[type=submit] {
              background-color: #cc142d;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              width: 100%;
              width: 100%;
              font-weight: bold;
              font-size: 16px;
            }
            
            button[type=submit]:hover {
              background-color: #45a049;
            }

            @media screen and (min-width: 800px) {
              .container {
                  font-family: Arial;
                  font-size: 1.1rem;
                  border-radius: 50px;
                  /* background-color: #f2f2f2; */
                  padding: 30px 85px;
              }

              .judul_utama {
                font-size: 2em;
              }
            }

            .loader {
              border-top-color: #ef4444;
              -webkit-animation: spinner 1.5s linear infinite;
              animation: spinner 1.5s linear infinite;
            }

            @-webkit-keyframes spinner {
              0% {
                -webkit-transform: rotate(0deg);
              }
              100% {
                -webkit-transform: rotate(360deg);
              }
            }

            @keyframes spinner {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }


            </style>
    
            <body>
            <div class="container">
              <div class="laporan">
                <h2 class="judul_utama mb-3">Kontak Kami</h2>
                <p>Silakan menghubungi kami melalui alamat berikut:</p>
                
                <ul class="fw-bold list-group mb-3">
                  <li style="list-style:none;">Bale Desa Belawa</li>
                  <li style="list-style:none;">Jl. Ciburial No. 98 Cirebon 40198</li>
                  <li style="list-style:none;">Telp: (022)2536208</li>
                  <li style="list-style:none;">E-mail: desabelawa@gmail.com</li>
                </ul>

                <p>untuk Respon Segera, silakan mengirim pesan melalui chat WhatsApp berikut (klik pada icon chat):</p>

                <ul class="list-group mb-3">
                  <li style="list-style:none;"><a href="https://wa.me/6281573092250"><i class="fab fa-whatsapp text-danger fs-3"></i></a>  Aduan untuk solusi atau pertolongan pertama bagi permasalahan yang bersifat kemanusian dan darurat.</li>
                  <li style="list-style:none;"><a href="https://wa.me/6281573092250"><i class="fab fa-whatsapp text-success fs-3"></i></a>  Untuk Informasi Kependudukan dan Layanan Catatan Sipil.</li>
                </ul>

                <p>atau melalui form di bawah ini:</p>
              </div>
                
                <form action="https://formspree.io/f/mgeqowjz" id="contact-form" method="POST" class="submit_informasi">

                  <label for="nama">Nama</label>
                  <input type="text" class="nama" name="nama" placeholder="Nama Anda" required>

                  <label for="email">E-Mail</label>
                  <input type="email" class="email" name="email" placeholder="E-Mail Anda" required>
    
                  <label for="subject">Perihal</label>
                  <input type="text" class="perihal" name="subject" placeholder="Perihal/Judul Pesan" required>
              
                  <label for="pesan">Isi Pesan</label>
                  <textarea class="pesan" name="pesan" placeholder="Isi Pesan" style="height:200px" required></textarea>
    
                  <!-- <button type="submit">Kirim!</button> -->
                  <button type="submit" class="">Kirim!</button>
                  <div class="loader ease-linear mt-5 rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mx-auto"></div>
                </form>
            </div>
    
            <script src="https://smtpjs.com/v3/smtp.js">
            </script>
        </body>
          `;
  }
}

customElements.define('app-kontak', AppKontak);
