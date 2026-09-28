import { MongoClient, ObjectId } from "mongodb"
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI

const client = new MongoClient(MONGO_URI)
const db = client.db("AH20232CP1")


export async function getProductos(filtros = {}) {
    const filter = { eliminado: { $ne: true } }
    if (filtros?.categoria) filter.categoria = filtros.categoria
    if (filtros?.nombre) filter.nombre = { $regex: filtros.nombre, $options: "i" }

    return await db.collection("productos").find(filter).toArray()
}

export async function getProductoById(id) {
    return await db.collection("productos").findOne({ _id: new ObjectId(id) })
}

export async function guardarProducto(producto) {
    producto.precio = Number(producto.precio)
    producto.eliminado = false

   if (producto.cliente_id) {
     producto.cliente_id = new ObjectId(producto.cliente_id);
    } else {
        delete producto.cliente_id;
    }

    await db.collection("productos").insertOne(producto)
    return producto
}

export async function editarProducto(id, productoNuevo) {
    productoNuevo.precio = Number(productoNuevo.precio)

     if (productoNuevo.cliente_id) {
     productoNuevo.cliente_id = new ObjectId(productoNuevo.cliente_id);
    } else {
        delete productoNuevo.cliente_id;
    }

    await db.collection("productos").replaceOne({ _id: new ObjectId(id) }, productoNuevo)
    return { ...productoNuevo, _id: id }
}

export async function eliminarProductoLogico(id) {
    const producto = await getProductoById(id)
    await db.collection("productos").updateOne(
        { _id: new ObjectId(id) },
        { $set: { eliminado: true } }
    )
    return producto
}

