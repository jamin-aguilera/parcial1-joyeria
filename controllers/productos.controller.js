import * as productoService from "../services/productos.service.js"
import * as productoView from "../views/productos.view.js"


export async function getProductos(req, res) {
    try {
        const productos = await productoService.getProductos(req.query)
        res.send(productoView.createProductosPage(productos))
    } catch (error) {
        res.send(productoView.pageError("404", "Página no encontrada"))
    }
}

export async function getProductoById(req, res) {
    try {
        const producto = await productoService.getProductoById(req.params.id)
        res.send(productoView.createDetailPage(producto))
    } catch (error) {
        res.send(productoView.pageError("404", "Producto no encontrado"))
    }
}

export async function nuevoProductoForm(req, res) {
    try {
        res.send(productoView.nuevoProductoForm())
    } catch (error) {
        res.send(productoView.pageError("404", "Página no encontrada"))
    }
}

export async function guardarProducto(req, res) {
    try {
        const producto = await productoService.guardarProducto(req.body)
        res.send(productoView.createDetailPage(producto))
    } catch (error) {
        res.send(productoView.pageError("400", "No se pudo guardar el producto"))
    }
}

export async function editarProductoForm(req, res) {
    try {
        const producto = await productoService.getProductoById(req.params.id)
        res.send(productoView.editarProductoForm(producto))
    } catch (error) {
        res.send(productoView.pageError("400", "No se pudo editar el producto"))
    }
}

export async function editarProducto(req, res) {
    try {
        const producto = await productoService.editarProducto(req.params.id, req.body)
        res.send(productoView.createDetailPage(producto))
    } catch (error) {
        res.send(productoView.pageError("400", "No se pudo editar el producto"))
    }
}

export async function eliminarProductoForm(req, res) {
    try {
        const producto = await productoService.getProductoById(req.params.id)
        res.send(productoView.eliminarProductoForm(producto))
    } catch (error) {
        res.send(productoView.pageError("400", "No se pudo borrar el producto"))
    }
}

export async function eliminarProducto(req, res) {
    try {
        const producto = await productoService.eliminarProductoLogico(req.params.id)
        res.send(productoView.createDetailPage(producto))
    } catch (error) {
        res.send(productoView.pageError("400", "No se pudo borrar el producto"))
    }
}
