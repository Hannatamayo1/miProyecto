const express = require(`express`)
const morgan = require(`morgan`)

const app = express()
const puerto = 3000

app.use(morgan(`dev`))

app.get(`/`,(req,res) => {
    res.send(`<h1>servidor corriendo exitosamente<h1>`)
 })

 app.listen(puerto, () => {
     console.log(`servidor en puerto ${puerto}`)
 })