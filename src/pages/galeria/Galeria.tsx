import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Galeria.css";
import Header from "components/header/Header";

// importa as imagens manualmente
import img1 from "assets/image/image1.png";
import img2 from "assets/image/image2.png";
import img3 from "assets/image/image3.png";
import img4 from "assets/image/image4.png";
import img5 from "assets/image/image5.png";
import img6 from "assets/image/image6.png";
import img7 from "assets/image/image7.png";
import img8 from "assets/image/image8.png";
import img9 from "assets/image/image9.jpg";
import img10 from "assets/image/image10.jpg";
import img11 from "assets/image/image11.jpg";
import img12 from "assets/image/image12.jpg";
import img13 from "assets/image/image13.jpg";
import Footer from "components/footer/Footer";

const Galeria: React.FC = () => {
  const imagens = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <>
      <Header />
      <section className="galeria">
        <h2 className="galeria__titulo">Momentos Especiais</h2>
        <Slider {...settings} className="galeria__slider">
          {imagens.map((src, index) => (
            <div key={index} className="galeria__item">
              <img src={src} alt={`Foto ${index + 1}`} className="galeria__img" />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Galeria;
