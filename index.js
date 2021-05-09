require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())

app.use('/api/data', require('./routes/data'))


const dbConnString = `${process.env.DB_PROTO}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SCHEMA}`


app.listen(4220, () => console.log(`api listening on 0.0.0.0:${process.env.API_PORT}`));