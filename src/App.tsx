import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Galeria from "./pages/galeria/Galeria";
import ListaPresentes from "./pages/listapresentes/ListaPresentes";
import RSVP from "./pages/rsvp/RSVP";
import Local from "./pages/local/Local";
import ListaConvidados from "pages/listaconvidados/ListaConvidados";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/lista" element={<ListaPresentes />} />
          <Route path="/listaconvidados" element={<ListaConvidados />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/local" element={<Local />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
