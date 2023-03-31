import express from 'express'
import db from './db.js'
import userRoutes from './routes/userRoute.js'


const app = express()
const port = 3000

db.sync(() => console.log('Banco de dados preparado'))

app.use('/users', userRoutes)

app.listen(port, () => console.log("Server rodando na porta: "+port))