export async function agregarCliente(datos) {
  try {
    console.log(`${process.env.API_JSON}/clientes`)
    const respuesta = await fetch(`http://localhost:3000/clientes`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.error(error);
  }
}
