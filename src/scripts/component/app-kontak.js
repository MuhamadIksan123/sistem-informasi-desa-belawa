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
              font-size: 1.1rem;
            }
            
            h2 {
                font-family: "Poppins", sans-serif;
                font-size: 2.5rem;
                font-weight: 700;
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
            
            input[type=email], input[type=text], #sinopsis_cerita {
                border: none;
                border-bottom: 1px solid #d9d9d9;
                padding-left: 0;
                padding-right: 0;
                border-radius: 0; 
            }
            
            input[type=email]:active, input[type=text]:active, #sinopsis_cerita:active, input[type=email]:focus, input[type=text]:focus, #sinopsis_cerita:focus {
                outline: none;
                -webkit-box-shadow: none;
                box-shadow: none;
                border-color: #000; 
            }
            
            input[type=submit] {
              background-color: #000;
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
            
            input[type=submit]:hover {
              background-color: #45a049;
            }

            @media screen and (min-width: 800px) {
              .container {
                  border-radius: 50px;
                  /* background-color: #f2f2f2; */
                  padding: 30px 85px;
              }

              .judul_utama {
                font-size: 2em;;
              }
            }
            
            </style>
    
            <body>
            <div class="container">
              <div class="laporan">
                <h2 class="judul_utama mb-3">Kontak Kami</h2>
                <p>Silakan menghubungi kami melalui alamat berikut:</p>
                
                <ul class="fw-bold list-group mb-3">
                  <li style="list-style:none;">Bale Desa Ciburial</li>
                  <li style="list-style:none;">Jl. Ciburial No. 98 Bandung 40198</li>
                  <li style="list-style:none;">Telp: (022)2536208</li>
                  <li style="list-style:none;">E-mail: desaciburial@gmail.com</li>
                </ul>

                <p>untuk Respon Segera, silakan mengirim pesan melalui chat WhatsApp berikut (klik pada icon chat):</p>

                <ul class="list-group mb-3">
                  <li style="list-style:none;"><a href=""><i class="fab fa-whatsapp text-danger fs-3"></i></a>  Aduan untuk solusi atau pertolongan pertama bagi permasalahan yang bersifat kemanusian dan darurat.</li>
                  <li style="list-style:none;"><a href=""><i class="fab fa-whatsapp text-success fs-3"></i></a>  Untuk Informasi Kependudukan dan Layanan Catatan Sipil.</li>
                </ul>

                <p>atau melalui form di bawah ini:</p>
              </div>
                
                <form action="" method="POST" class="submit_informasi">

                  <label for="nama_pengarang">Nama</label>
                  <input type="text" class="nama_pengarang" name="namaPengarang" placeholder="Nama Anda" required>

                  <label for="nama_email">E-Mail</label>
                  <input type="email" class="nama_email" name="namaEmail" placeholder="E-Mail Anda" required>
    
                  <label for="nama_informasi">Judul Informasi</label>
                  <input type="text" class="nama_informasi" name="namainformasi" placeholder="Perihal" required>
              
                  <label for="tanggal_rilis">Tanggal Rilis</label>
                  <input type="datetime-local" class="tanggal_rilis" name="tanggalRilis" placeholder="Tanggal rilis informasi kamu..." required>
    
                  <label for="sinopsis_cerita">Deskripsi</label>
                  <textarea class="sinopsis_cerita" name="sinopsisCerita" placeholder="Tulis sinopsis disini..." style="height:200px" required></textarea>
    
                  <label for="unggah_informasi">Unggah Dokumentasi</label>
                  <input type="file" class="unggah_informasi" name="unggahinformasi" required>
                  
                  <!-- <button type="submit">Kirim!</button> -->
                  <input type="submit" class="" value="Kirim!">
                </form>
            </div>
    
            <script src="https://smtpjs.com/v3/smtp.js">
            </script>
        </body>
          `;
  }
}

customElements.define('app-kontak', AppKontak);
