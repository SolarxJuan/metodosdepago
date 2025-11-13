const express=require('express');
const app=express();
const metododepagoruta=require('./rutas/metododepagoruta');
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders:['Content-Type']
}))
app.use(express.json())
app.use('/api', metododepagoruta)

app.listen(4000, ()=>{
    console.log('servidor ejecutando en el puerto 4000')
})