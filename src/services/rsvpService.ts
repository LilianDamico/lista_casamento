const API_URL = "http://localhost:8080/rsvp";

export async function getRsvps() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar RSVPs");
  return await res.json();
}

export async function addRsvp(rsvp: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rsvp),
  });
  if (!res.ok) throw new Error("Erro ao adicionar RSVP");
  return await res.json();
}
