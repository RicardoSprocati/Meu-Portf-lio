import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import { CarouselContainer, Slide, Image, Description } from './styles';

import slide1 from '../../assets/images/restaurante-part1.png'
import slide2 from '../../assets/images/restaurante-part2.png'
import slide3 from '../../assets/images/loja-part1.png'
import slide4 from '../../assets/images/loja-part2.png'
import slide5 from '../../assets/images/loja-part3.png'
import slide6 from '../../assets/images/loja-part4.png'
import slide7 from '../../assets/images/agenda-part1.png'
import slide8 from '../../assets/images/agenda-part2.png'
import slide9 from '../../assets/images/disney-faq.png'
import slide10 from '../../assets/images/grunt.png'
import slide11 from '../../assets/images/cypress.png'
import slide12 from '../../assets/images/testing-library.png'
import slide13 from '../../assets/images/responsividade.png'
import slide14 from '../../assets/images/organizacao.png'
import slide15 from '../../assets/images/api.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


const Carousel = () => {
  const { t } = useTranslation();
  const [zoomedSlide, setZoomedSlide] = useState<number | null>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, img: slide1, text: t("carousel.slide1") },
    { id: 2, img: slide2, text: t("carousel.slide2") },
    { id: 3, img: slide3, text: t("carousel.slide3") },
    { id: 4, img: slide4, text: t("carousel.slide4") },
    { id: 5, img: slide5, text: t("carousel.slide5") },
    { id: 6, img: slide6, text: t("carousel.slide6") },
    { id: 7, img: slide7, text: t("carousel.slide7") },
    { id: 8, img: slide8, text: t("carousel.slide8") },
    { id: 9, img: slide9, text: t("carousel.slide9") },
    { id: 10, img: slide10, text: t("carousel.slide10") },
    { id: 11, img: slide11, text: t("carousel.slide11") },
    { id: 12, img: slide12, text: t("carousel.slide12") },
    { id: 13, img: slide13, text: t("carousel.slide13") },
    { id: 14, img: slide14, text: t("carousel.slide14") },
    { id: 15, img: slide15, text: t("carousel.slide15") },
  ];

  return (
    <CarouselContainer className='container'>
      <Slider className='container' {...settings}>
        {slides.map((slide) => (
          <Slide key={slide.id}>
            <Image src={slide.img} alt={`Projeto ${slide.id}`} isZoomed={zoomedSlide === slide.id}
              onTouchStart={() => setZoomedSlide(slide.id)}
              onTouchEnd={() => setZoomedSlide(null)} />
            <Description>{slide.text}</Description>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
