const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {

    const offset = helper.getOffSet(page, helper.listPerPage)

    let sql = `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`

    console.log(sql)
    
    const rows = await db.query(sql)

    const data = helper.emptyOrRows(rows);

    const meta = {page};

    return{ data, meta};
};

module.exports = {getMultiple};