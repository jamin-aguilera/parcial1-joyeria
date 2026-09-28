import { Router } from "express"
import * as clienteController from "../controllers/clientes.controller.js"

const router = Router()

router.get("/api/clientes", clienteController.getClientes)
router.post("/api/clientes", clienteController.crearCliente)
router.get("/api/clientes/:id/productos", clienteController.getProductosPorCliente)

export default router