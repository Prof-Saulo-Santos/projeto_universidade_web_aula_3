const express = require("express");
const sql = require("mssql");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("."));

// Configuração do banco
const config = {
  server: "localhost",
  database: "bd_aula3",
  user: "sa",
  password: "123456",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Conectar ao banco
async function connectDB() {
  try {
    await sql.connect(config);
    console.log("Conectado ao SQL Server!");
  } catch (err) {
    console.error("Erro:", err);
  }
}

connectDB();

// APIs BACKEND

// GET - Listar clientes
app.get("/api/clientes", async (req, res) => {
  try {
    const result = await sql.query("SELECT * FROM cliente ORDER BY nome_cliente");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar clientes" });
  }
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Backend rodando na porta 3000");
  console.log("Frontend: http://localhost:3000");
});
