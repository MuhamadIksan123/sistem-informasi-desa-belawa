import '../../component/app-kontak';

const Kontak = {
  async render() {
    return `
          <app-kontak></app-kontak>
          `;
  },

  async afterRender() {
    const contactForm = document.getElementById('contact-form');
    const loader = document.querySelector('.loader');

    loader.style.display = 'none';

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      loader.style.display = 'block';
      const url = e.target.action;
      const formData = new FormData(contactForm);

      fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
        .then(() => {
          loader.style.display = 'none';
          window.location.href = '/#/thankyou';
        })
        .catch((e) => alert('Error occured'));
    });
  },
};

export default Kontak;
