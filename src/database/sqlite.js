import sqlite3 from "sqlite3";
import path from "path";

const SQLite = sqlite3.verbose();

// Caminho absoluto do banco de dados
const dbPath = path.resolve("src/database/banco.db");

// Inicialização do banco de dados
const db = new SQLite.Database(
    dbPath,
    SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE,
    (err) => {
        if (err) {
            return console.log("Erro ao conectar com banco: " + err.message);
        }
        console.log("Conexão com o banco de dados bem-sucedida!");
    }
);

// Função para executar consultas
function query(command, params = [], method = "all") {
    return new Promise((resolve, reject) => {
        db[method](command, params, function (error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

export { db, query };
