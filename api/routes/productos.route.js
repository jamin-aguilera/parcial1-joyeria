import { Router } from "express"
import * as productoController from "../controllers/productos.controller.js"

const router = Router()

router.get("/api/productos", productoController.getProductos)
router.get("/api/productos/:id", productoController.getProductoById)
router.post("/api/productos", productoController.saveProducto)
router.put("/api/productos/:id", productoController.replaceProducto)
router.delete("/api/productos/:id", productoController.deleteProducto)

export default router
