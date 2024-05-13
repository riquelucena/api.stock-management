import { ConnectionPool, config } from 'mssql/msnodesqlv8';

const dbConfig: config = {
    server: 'localhost\\SQLEXPRESS',
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

export const pool = new ConnectionPool(dbConfig);
