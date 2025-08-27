// JavaScript do Frontend - Aula 3

// 1. Função para listar clientes (GET)
async function listarClientes() {
  try {
    const response = await fetch("/api/clientes");
    const clientes = await response.json();

    document.getElementById("resultado-get").textContent = JSON.stringify(
      clientes,
      null,
      2
    );
  } catch (error) {
    document.getElementById("resultado-get").textContent = "Erro: " + error.message;
  }
}


