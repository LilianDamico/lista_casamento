const API_URL = "http://localhost:8080/listaconvidados"; 

export async function getConvidados() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function addConvidado(convidado: any) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(convidado),
  });
}

export async function updateConvidado(id: number, convidado: any) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(convidado),
  });
}

export async function deleteConvidado(id: number) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
