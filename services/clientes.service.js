import { MongoClient, ObjectId } from "mongodb"
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI

const client = new MongoClient(MONGO_URI)
const db = client.db("AH20232CP1")

export async function getClientes() {
    return await db.collection("clientes").find().toArray()
    
}
   
export async function crearCliente(cliente) {
    await db.collection("clientes").insertOne(cliente)
    return cliente
}

export async function getProductosPorCliente(clienteId) {
    const filter = { cliente_id: new ObjectId(clienteId) }
    return await db.collection("productos").find(filter).toArray()
}
