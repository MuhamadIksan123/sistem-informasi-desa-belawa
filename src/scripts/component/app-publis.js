class AppPublis extends HTMLElement {
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
                border-radius: 50px;
                /* background-color: #f2f2f2; */
                padding: 85px;
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
            
            </style>
    
            <body>
            <div class="container">
    
                <h2 class="judul_utama">Berikan Informasimu Sekarang!</h2>
    
                <form method="post" class="submit_komik">
                  <label for="nama_email">E-Mail</label>
                  <input type="email" class="nama_email" name="namaEmail" placeholder="E-Mail kamu..." required>
    
                  <label for="nama_komik">Judul Informasi</label>
                  <input type="text" class="nama_komik" name="namaKomik" placeholder="Nama komik kamu..." required>
    
                  <label for="fileSampul">Sampul Informasi</label>
                  <input type="file" class="file_sampul" name="sampulKomik" value="sampulKomik" required>
              
                  <label for="nama_pengarang">Nama Narasumber</label>
                  <input type="text" class="nama_pengarang" name="namaPengarang" placeholder="Nama kamu..." required>
              
                  <label for="Kategori">Kategori</label>
                  <select class="kategori" name="Kategori" required>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="isekai">Isekai</option>
                    <option value="magic">Magic</option>
                    <option value="mystery">Mystery</option>
                    <option value="romance">Romance</option>
                    <option value="sports">Sports</option>
                    <option value="thriller">Thriller</option>
                  </select>
                  
                  <label for="tanggal_rilis">Tanggal Rilis</label>
                  <input type="datetime-local" class="tanggal_rilis" name="tanggalRilis" placeholder="Tanggal rilis komik kamu..." required>
    
                  <label for="sinopsis_cerita">Deskripsi</label>
                  <textarea class="sinopsis_cerita" name="sinopsisCerita" placeholder="Tulis sinopsis disini..." style="height:200px" required></textarea>
    
                  <label for="unggah_komik">Unggah Dokumentasi</label>
                  <input type="file" class="unggah_komik" name="unggahKomik" required>
                  
                  <!-- <button type="submit">Kirim!</button> -->
                  <input type="submit" value="Kirim!">
                </form>
            </div>
    
            <script src="https://smtpjs.com/v3/smtp.js">
            </script>
        </body>
          `;
  }
}

customElements.define('app-publis', AppPublis);
