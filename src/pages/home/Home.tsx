import "./Home.css";
import Header from "components/header/Header";
import convite from "../../assets/image/Convite.png"; // ajuste conforme o caminho real


const Home: React.FC = () => {
  return (
    <section className="home">

      <Header />
      <div className="filigrana top-left"></div>
      <div className="filigrana top-right"></div>
      <div className="filigrana bottom-left"></div>
      <div className="filigrana bottom-right"></div>

      {/* ==== TOPO: NOMES DOS PAIS ==== */}
      <div className="home__parents">
        <div className="home__parents-side">
          <p>Wilson Roberto da Fonseca</p>
          <p>Lilian M. D. Fonseca</p>
        </div>

        <div className="home__parents-side home__parents-side--right">
          <p>Paulo Bier</p>
          <p>Maria Bier</p>
        </div>
      </div>

      {/* ==== IMAGEM DO CONVITE ==== */}
      <div className="home__invite">
        <img
          src={convite}
          alt="Convite de casamento de Caroline Bier e Gabriel Fonseca"
          className="home__invite-img"
        />
      </div>
    </section>
  );
};

export default Home;
