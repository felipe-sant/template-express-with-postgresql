import { Client } from "pg"

const db = new Client({
    connectionString: process.env.POSTGRESQL_URL
})

db.connect()
    .then(() => console.log("🟢 Conectado ao PostgreSQL com sucesso!"))
    .catch((err: unknown) => console.error("🔴 Erro ao conectar:", err))

export default db