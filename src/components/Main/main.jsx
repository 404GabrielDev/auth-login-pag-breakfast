import "./main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  background,
  bread1,
  bread2,
  cake1,
  cake2,
  drink1,
  drink2,
  drink3,
  drink5,
  coffe2,
  coffe3,
  coffe1,
  backgroundCake,
  backgroundCoffe,
  backgroundDrink,
} from "../../assets/Javascript/images";

import { Autoplay, Pagination } from "swiper/modules";

import AOS from 'aos';
import 'aos/dist/aos.css';

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
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const Main = () => {
  return (
    <>
      <main>
        <div className="container-backgroundcoffe">
          <div
            data-aos="zoom-in"
            className="background"
            style={{
              backgroundImage: `url(${background})`, // Define a imagem de fundo
              backgroundSize: "cover", // Faz a imagem preencher o contêiner proporcionalmente
              backgroundPosition: "center", // Centraliza a imagem
              backgroundRepeat: "no-repeat", // Impede que a imagem se repita
              width: "100%", // Largura ajustável
              height: "100vh", // Altura ajustável
              position: "relative",
            }}
          ></div>
          <div data-aos="zoom-in-left" className="title-background">
            <h1>Café da manhã com sabor e aconchego.</h1>
            <p>Comece o dia do jeito certo, com opções frescas e deliciosas!</p>
          </div>
        </div>

        <section data-aos="flip-up" className="title-cards">
          <h1>O Sabor da Tradição e Inovação</h1>
        </section>

        {/*ESTILIZANDO CARDS*/}

        <div className="all-cards">


            {/*CARD 2*/}
          <div data-aos="fade-right" className="container-slider2">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={coffe1} alt="café" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={coffe2} alt="café" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={coffe3} alt="café" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider2">
              <h1>O Café Perfeito</h1>
              <p>
                Nada como um café bem preparado para energizar o dia. Sabor
                intenso, aroma marcante e o aconchego de cada xícara. Escolha a
                sua dose de inspiração!
              </p>
            </div>
          </div>

          {/*CARD 2*/}
          <div data-aos="fade-left" className="container-slider">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={bread1} alt="pão" />
              </SwiperSlide>
              <SwiperSlide className="slider">
                <img src={bread2} alt="pão" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider">
              <h1>Os Melhores Pães</h1>
              <p>
                Um pão fresquinho, com crosta dourada e macio por dentro,
                perfeito para acompanhar qualquer refeição ou ser saboreado
                sozinho com manteiga.
              </p>
            </div>
          </div>

          {/*CARD 3*/}
          <div data-aos="fade-right" className="container-slider2">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={cake1} alt="cake" />
              </SwiperSlide>
              <SwiperSlide className="slider">
                <img src={cake2} alt="cake" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider2">
              <h1>Bolo Red Velvet</h1>
              <p>
                Camadas macias, recheio cremoso e a cobertura perfeita. Feito
                com os melhores ingredientes, é o bolo ideal para qualquer
                ocasião.
              </p>
            </div>
          </div>

          {/*CARD 4*/}
          <div data-aos="fade-left" className="container-slider">
            <Swiper
              className="swiper"
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide className="slider">
                <img src={drink1} alt="drinks" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={drink2} alt="drinks" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={drink3} alt="drinks" />
              </SwiperSlide>

              <SwiperSlide className="slider">
                <img src={drink5} alt="drinks" />
              </SwiperSlide>
            </Swiper>

            <div className="i-slider">
              <h1>Os melhores Drinks</h1>
              <p>
                Pequenos em tamanho, grandes em sabor! Escolha seu drink
                favorito, seja um clássico ou uma mistura inovadora, e aproveite
                o melhor dos sabores intensos em cada gole.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
