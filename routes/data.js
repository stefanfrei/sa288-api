const r = require('express').Router()
const postgres = require('postgres')

const sql = postgres(`${process.env.DB_PROTO}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SCHEMA}`)

const select = async (filter) => {
    if (!filter) return await sql`select id, name from ω`
    return await sql`select id, name from ω where LOWER(name) like ${ '%' + filter.toLowerCase() + '%' }`
}

r.get('/:dataId/q/:q', async (req, res) => {
    res.send(JSON.stringify(await select(req.params['q'])))
})

module.exports = r
