import { Router } from "express"
import * as productoController from "../controllers/productos.controller.js"

const router = Router()

router.get("/productos", productoController.getProductos)
router.get("/productos/nuevo", productoController.nuevoProductoForm)
router.post("/productos/nuevo", productoController.guardarProducto)
router.get("/productos/editar/:id", productoController.editarProductoForm)
router.post("/productos/editar/:id", productoController.editarProducto)
router.get("/productos/eliminar/:id", productoController.eliminarProductoForm)
router.post("/productos/eliminar/:id", productoController.eliminarProducto)
router.get("/productos/:id", productoController.getProductoById)

export default router
