
// Hero & Logos
import heroVid from './assets/hero.mp4';
import heroImg from './assets/hero.jpg';
import logoImg from './assets/logo.png';
import logoIcon from './assets/logo-icon.png';

// Products
import prodReady from './assets/product-ready.jpg';
import prodBespoke from './assets/product-bespoke.jpg';
import prodBridal from './assets/product-bridal.jpg';
import lookBridal from './assets/lookbook-bridal.jpg';
import emeraldFront from './assets/emerald-front.jpg';
import emeraldBack from './assets/emerald-back.jpg';
import emeraldDetail from './assets/emerald-detail.jpg';
import img5470 from './assets/IMG_5470.PNG';
import img5481 from './assets/IMG_5481.png';
import prodMen from './assets/product-men.jpg';
import lookMen from './assets/lookbook-menswear.jpg';
import prodWomen from './assets/product-women.jpg';
import prodCouture from './assets/product-couture.jpg';
import img5496 from './assets/IMG_5496.png';
import childJpeg from './assets/643160C1-67F5-4E11-8FCF-DE0D92FC9F49.jpeg';

// About & Atelier
import lookCouture from './assets/lookbook-couture.jpg';
import atelierImg from './assets/atelier.jpg';
import fabImg from './assets/custom-fabric.jpg';
import sketchImg from './assets/custom-sketch.jpg';
import fittingImg from './assets/custom-fitting.jpg';

// Testimonials
import testClient from './assets/testimonial-client.jpg';
import testBride from './assets/testimonial-bride.jpg';

/**
 * Centralized assets using Vite imports.
 * This guarantees assets are hashed and included in the production build.
 */
export const ASSETS = {
  hero: {
    video: heroVid,
    mobile: heroImg
  },
  logos: {
    full: logoImg,
    icon: logoIcon
  },
  products: {
    asoEbi: [prodReady, prodBespoke],
    bridal: [prodBridal, lookBridal],
    evening: [emeraldFront, emeraldBack, emeraldDetail],
    traditional: [img5470, img5481],
    mens: [prodMen, lookMen],
    womens: [prodWomen, prodCouture],
    children: [img5496, childJpeg]
  },
  about: {
    designer: lookCouture,
    atelier: atelierImg,
    detail: fabImg,
    sketch: sketchImg,
    fitting: fittingImg
  },
  testimonials: {
    client: testClient,
    bride: testBride
  }
};
