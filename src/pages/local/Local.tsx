import React, { useState } from "react";
import "./Local.css";
import Header from "components/header/Header";

import recinto1 from "../../assets/image/recinto1.jpg";
import recinto2 from "../../assets/image/recinto2.jpg";
import recinto3 from "../../assets/image/recinto3.jpg";
import recinto4 from "../../assets/image/recinto4.jpg";
import recinto5 from "../../assets/image/recinto5.jpg";
import recinto6 from "../../assets/image/recinto6.jpg";
import recinto7 from "../../assets/image/recinto7.jpg";
import recinto8 from "../../assets/image/recinto8.jpg";
import recinto9 from "../../assets/image/recinto9.jpg";
import recinto10 from "../../assets/image/recinto10.jpg";
import recinto11 from "../../assets/image/recinto11.jpg";
import recinto12 from "../../assets/image/recinto12.jpg";
import recinto13 from "../../assets/image/recinto13.jpg";

const imagens = [
  recinto1, recinto2, recinto3, recinto4, recinto5, recinto6, recinto7,
  recinto8, recinto9, recinto10, recinto11, recinto12, recinto13
];

const Local: React.FC = () => {
  const [fotoSelecionada, setFotoSelecionada] = useState<string | null>(null);

  return (
    <>
      <Header />
      <section className="local">
        <h2 className="local__titulo">Nosso Lugar Especial</h2>        
        {/* CARD DE LOCALIZAÇÃO */}
        <div className="local__card">
          <h3>Cerimônia e Recepção</h3>
          <p>
            Cerimônia será realizada na Capela Cecília.
          </p>
          <p>Recepção no Palazzo Ferrara.</p>
          <p>
            Rua da Moóca, 1415 - Moóca – São Paulo/SP.
          </p>
          
          <a
            href="https://www.google.com/maps?q=Palazzo+Ferrara,+Rua+da+Moóca,+1415,+São+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="local__link"
          >
            Ver no Google Maps
          </a>
        </div>

        {/* FOTOS FLUTUANTES */}
        <div className="local__galeria">
          {imagens.map((src, index) => {
            const top = Math.random() * 50 + 25;  // centro vertical
            const left = Math.random() * 50 + 25; // centro horizontal
            const delay = Math.random() * 2;

            return (
              <img
                key={index}
                src={src}
                alt={`Recinto ${index + 1}`}
                className={`local__foto ${fotoSelecionada ? "paused" : ""}`}
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                }}
                onClick={() => setFotoSelecionada(src)}
              />
            );
          })}
        </div>

        {/* MODAL DA FOTO AMPLIADA */}
        {fotoSelecionada && (
          <div className="local__modal" onClick={() => setFotoSelecionada(null)}>
            <img src={fotoSelecionada} alt="Foto ampliada" className="local__foto-grande" />
          </div>
        )}
      </section>
    </>
  );
};

export default Local;
