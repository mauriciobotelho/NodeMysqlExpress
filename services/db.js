const mysql = require('mysql2/promise');
const { resourceLimits } = require('worker_threads');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [result, ] = await connection.execute(sql, params);

    return resourceLimits;

};
module.exports = {query};