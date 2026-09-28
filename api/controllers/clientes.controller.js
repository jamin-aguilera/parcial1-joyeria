import * as clienteService from "../../services/clientes.service.js"

export async function getClientes(req, res) {
     try {
            const clientes = await clienteService.getClientes()
            res.status(200).json(clientes)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
}

export async function crearCliente(req, res) {
     try {
       const cliente = await clienteService.crearCliente(req.body)
        res.status(201).json(cliente)
     } catch (error) {
           res.status(500).json({ message: error.message })
     }
}

export async function getProductosPorCliente(req, res) {
    try {
        const productos = await clienteService.getProductosPorCliente(req.params.id)
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}