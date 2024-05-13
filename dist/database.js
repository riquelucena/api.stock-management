"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const msnodesqlv8_1 = require("mssql/msnodesqlv8");
const dbConfig = {
    server: 'localhost\\SQLEXPRESS', // Certifique-se de que o caminho do servidor está correto
    database: 'DrugControl',
    user: 'DESKTOP-FML6GMI\User',
    options: {
        trustedConnection: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
};
exports.pool = new msnodesqlv8_1.ConnectionPool(dbConfig);
//# sourceMappingURL=database.js.map