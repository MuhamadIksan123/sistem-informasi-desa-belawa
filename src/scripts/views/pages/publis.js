import '../../component/app-publis';

const Publis = {
  async render() {
    return `
          <app-publis></app-publis>
          `;
  },

  async afterRender() {
    const form = document.querySelector(".submit_komik");
    form.addEventListener("submit", e => {
        e.preventDefault();
        let email = document.querySelector(".nama_email").value;
        let judul = document.querySelector(".nama_komik").value;
        let sampul = document.querySelector(".file_sampul").value;
        let pengarang = document.querySelector(".nama_pengarang").value;
        let kategori = document.querySelector(".kategori").value;
        let rilis = document.querySelector(".tanggal_rilis").value;
        let sinopsis = document.querySelector(".sinopsis_cerita").value;
        let komik = document.querySelector(".unggah_komik").value;
    
        document.querySelector(".submit_komik").reset();
    
        send_email(email, judul, sampul, pengarang, kategori, rilis, sinopsis, komik);
    })
    
    function send_email(email, judul, sampul, pengarang, kategori, rilis, sinopsis, komik){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "komiksun.dicoding@gmail.com",
            Password : "58609B74DE07B76802E531E077994494E347",
            To : 'komiksun.dicoding@gmail.com',
            From : `${email}`,
            Subject : `Komik kiriman dari ${pengarang} siap untuk diterbitkan!`,
            Body : `Email: ${email} <br> Nama Komik: ${judul} <br> Sampul: ${sampul} <br> Nama Pengarang: ${pengarang} <br> Genre: ${kategori} <br> Tanggal Rilis: ${rilis} <br> Sinopsis: ${sinopsis} <br> Komik: ${komik} <br>`
        }).then((success) => {
            alert("Komik berhasil terkirim!");
        }).catch((error) => {
            alert("Gagal mengirim komik!");
        })
    }
    
    // Host : "smtp.elasticemail.com",
    // Username : "komiksun.dicoding@gmail.com",
    // Password : "58609B74DE07B76802E531E077994494E347",
  },
};

export default Publis;
