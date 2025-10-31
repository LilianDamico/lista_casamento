import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__ornament"></div>
      <p className="footer__phrase">Com amor, <strong>Caroline & Gabriel</strong></p>
      <p className="footer__credit">Feito por <span>Lilian M. D. Fonseca</span></p>
    </footer>
  );
};

export default Footer;
