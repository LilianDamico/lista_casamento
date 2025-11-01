import React, { useState } from "react";
import "./Galeria.css";
import Header from "components/header/Header";

import img1 from "../../assets/image/image1.jpg";
import img2 from "../../assets/image/image2.jpg";
import img3 from "../../assets/image/image3.jpg";
import img4 from "../../assets/image/image4.jpg";
import img5 from "../../assets/image/image5.jpg";
import gypsophila from "../../assets/image/gypsophila.jpg";

const imagens = [img1, img2, img3, img4, img5];

const Galeria: React.FC = () => {
  const [fotoSelecionada, setFotoSelecionada] = useState<string | null>(null);

  return (
    <>
      <Header />
      <section
        className="galeria"
        style={{ backgroundImage: `url(${gypsophila})` }}
      >
        <h2 className="galeria__titulo">Galeria de Momentos</h2>

        <div className="galeria__container">
          {imagens.map((src, index) => {
            const top = Math.random() * 70 + 10;
            const left = Math.random() * 70 + 10;
            const delay = Math.random() * 4;
            const duration = Math.random() * 3 + 4;

            return (
              <img
                key={index}
                src={src}
                alt={`Foto ${index + 1}`}
                className={`galeria__foto ${fotoSelecionada ? "paused" : ""}`}
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
                onClick={() => setFotoSelecionada(src)}
              />
            );
          })}
        </div>

        {fotoSelecionada && (
          <div
            className="galeria__modal"
            onClick={() => setFotoSelecionada(null)}
          >
            <img
              src={fotoSelecionada}
              alt="Foto ampliada"
              className="galeria__foto-grande"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Galeria;
