import express from "express"
import productosRoute from "./routes/productos.route.js"
import productosApiRoute from "./api/routes/productos.route.js"
import clientesApiRoute from "./api/routes/clientes.route.js"


const app = express()

app.use("/", express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(productosRoute)     
app.use(productosApiRoute)  
app.use(clientesApiRoute)  

app.listen(3333, () => console.log("Funcionando... en http://localhost:3333"))
