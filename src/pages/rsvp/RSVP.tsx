import React, { useState, useEffect } from "react";
import Header from "components/header/Header";
import "./RSVP.css";
import { addRsvp, getRsvps } from "../../services/rsvpService";

interface RsvpData {
  id?: number;
  nome: string;
  acompanhantes: number;
  mensagem?: string;
}

const Rsvp: React.FC = () => {
  const [formData, setFormData] = useState<RsvpData>({
    nome: "",
    acompanhantes: 0,
    mensagem: "",
  });

  const [rsvps, setRsvps] = useState<RsvpData[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    carregarRsvps();
  }, []);

  const carregarRsvps = async () => {
    const data = await getRsvps();
    setRsvps(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addRsvp(formData);
    setSuccess(true);
    setFormData({ nome: "", acompanhantes: 0, mensagem: "" });
    carregarRsvps();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <Header />
      <section className="rsvp-container">
        <h2>Confirme sua Presença 💌</h2>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="acompanhantes"
            placeholder="Número de acompanhantes"
            min="0"
            value={formData.acompanhantes}
            onChange={handleChange}
            required
          />

          <textarea
            name="mensagem"
            placeholder="Deixe uma mensagem aos noivos (opcional)"
            value={formData.mensagem}
            onChange={handleChange}
          />

          <button type="submit">Confirmar Presença</button>

          {success && <p className="rsvp-success">🎉 Obrigado! Sua presença foi confirmada.</p>}
        </form>

        <div className="rsvp-list">
          <h3>Confirmações Recebidas</h3>
          <ul>
            {rsvps.map((r) => (
              <li key={r.id}>
                <strong>{r.nome}</strong> — {r.acompanhantes} acompanhante(s)
                {r.mensagem && <p className="mensagem">"{r.mensagem}"</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
