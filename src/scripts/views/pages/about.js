import '../../component/app-about-team';
import '../../component/app-about-us';

const About = {
  async render() {
    return `
          <app-about-us></app-about-us>
          <app-about-team></app-about-team>
          `;
  },

  async afterRender() {
    console.log('About Us');
  },
};

export default About;
