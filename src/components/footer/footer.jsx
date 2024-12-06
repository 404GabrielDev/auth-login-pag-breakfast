import "./footer.css";
import { logotipo, whatsapp, facebook, instagram, backgroundFooter } from "../../assets/Javascript/images";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 50, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const Footer = () => {
  return (
    <>
      <footer>
        <div  data-aos="zoom-in" className="container-c1">
          <div className="container-logotipo">
            <img src={logotipo} />
          </div>

          <div className="container-c2">
            <button>Tel. 99 99999-9999</button>
            <button>Tel. Tel. 99 99999-9999</button>
          </div>
          <div className="container-c3">
            <button>Contact</button>
          </div>
        </div>

        {/*Container 2 coluna 1*/}
        <div data-aos="zoom-in" className="container2-c1">
            <div>
                <h2>Receba nossa newsletter</h2>
            </div>
            <div className="container-newsletter">
                <input type="email" placeholder="name@email.com" />
                <button type="submit">Enviar</button>
            </div>
        </div>

         {/*Container 3 coluna 1*/}
         <div data-aos="zoom-in" className="container3">
            <div>
                <h2>Social Media</h2>
            </div>
            
            <div className="container3-icons">
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={whatsapp} alt="whatsapp" />
            </div>

         </div>
      </footer>
    </>
  );
};

export default Footer;
