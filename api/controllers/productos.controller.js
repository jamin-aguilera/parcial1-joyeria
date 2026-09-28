import * as productoService from "../../services/productos.service.js"

export async function getProductos(req, res) {
    try {
        const productos = await productoService.getProductos(req.query)
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getProductoById(req, res) {
    try {
        const producto = await productoService.getProductoById(req.params.id)
        producto
            ? res.status(200).json(producto)
            : res.status(404).json({ message: "Producto no encontrado" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function saveProducto(req, res) {
    try {
        const producto = await productoService.guardarProducto(req.body)
        res.status(201).json(producto)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function replaceProducto(req, res) {
    try {
        const producto = await productoService.editarProducto(req.params.id, req.body)
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteProducto(req, res) {
    try {
        const producto = await productoService.eliminarProductoLogico(req.params.id)
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
