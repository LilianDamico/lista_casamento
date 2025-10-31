import React, { useEffect, useState } from "react";
import "./ListaConvidados.css";
import Header from "components/header/Header";
import {
  getConvidados,
  addConvidado,
  updateConvidado,
  deleteConvidado,
} from "../../services/convidadosService";

interface Convidado {
  id?: number;
  nome: string;
  celular: string;
  email: string;
}

const ListaConvidados: React.FC = () => {
  const [convidados, setConvidados] = useState<Convidado[]>([]);
  const [formData, setFormData] = useState<Convidado>({ nome: "", celular: "", email: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    carregarConvidados();
  }, []);

  const carregarConvidados = async () => {
    const data = await getConvidados();
    setConvidados(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updateConvidado(editingId, formData);
    } else {
      await addConvidado(formData);
    }
    setFormData({ nome: "", celular: "", email: "" });
    setEditingId(null);
    carregarConvidados();
  };

  const handleEdit = (convidado: Convidado) => {
    setFormData(convidado);
    setEditingId(convidado.id!);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este convidado?")) {
      await deleteConvidado(id);
      carregarConvidados();
    }
  };

  return (
    <>
      <Header />
      <section className="lista-container">
        <h2>Lista de Convidados</h2>

        <form className="form-convidado" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">{editingId ? "Atualizar" : "Adicionar"}</button>
        </form>

        <table className="tabela-convidados">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Celular</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {convidados.map((c) => (
              <tr key={c.id}>
                <td>{c.nome}</td>
                <td>{c.celular}</td>
                <td>{c.email}</td>
                <td>
                  <button className="editar" onClick={() => handleEdit(c)}>Editar</button>
                  <button className="excluir" onClick={() => handleDelete(c.id!)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ListaConvidados;
