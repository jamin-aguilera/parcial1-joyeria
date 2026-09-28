# Parcial 1 - Aplicaciones Híbridas (Joyería)

API y sitio web para gestionar productos de una joyería, con Node.js, Express y MongoDB (driver nativo).

## Cómo levantarlo
1. npm install
2. Copiar .env.example a .env y completar MONGO_URI
3. Base de datos: AH20232CP1, colección productos (datos de ejemplo en data/productos.json)
4. npm run dev
5. Abrir http://localhost:3333

## Rutas
- Sitio: /productos
- API productos: /api/productos (GET, POST, PUT, DELETE)
- Filtros: /api/productos?categoria=Aros&nombre=Knot
- API clientes: /api/clientes (GET, POST)
- Productos de un cliente: /api/clientes/:id/productos
- Colecciones de Postman en /postman