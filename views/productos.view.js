import { createPage } from "../page/utils.js"

const CATEGORIAS = ["Anillos", "Collares", "Pulseras", "Aros", "Accesorios"]

export function createProductosPage(productos) {
    let html = `<a class="btn btn-show mb-3" href="/productos/nuevo">Nuevo Producto</a><br>`
      html += `<a class="btn btn-secondary mb-3" href="/productos">Todos</a> `
    
    CATEGORIAS.forEach(cat => {
        html += `<a class="btn btn-secondary mb-3" href="/productos?categoria=${cat}">${cat}</a> `
    })
    html += `<table class="table mt-3"><thead><tr>
        <th>Imagen</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Acciones</th>
    </tr></thead><tbody>`
    productos.forEach(p => {
        html += `<tr>
            <td><img src="/${p.imagen}" width="120" height="80" /></td>
            <td>${p.nombre}</td>
            <td>${p.categoria}</td>
            <td>$${p.precio}</td>
            <td>
                <a class="btn btn-delete btn-sm" href="/productos/eliminar/${p._id}">Borrar</a>
                <a class="btn btn-edit btn-sm" href="/productos/editar/${p._id}">Editar</a>
                <a class="btn btn-show btn-sm" href="/productos/${p._id}">Ver</a>
                
            </td>
        </tr>`
    })
    html += "</tbody></table>"
    return createPage("Joyería", html)
}

export function createDetailPage(producto) {
    let html = `<img src="/${producto.imagen}" class="img-fluid mb-3" style="max-width:400px" />`

    
    if (producto.imagenes?.length) {
        html += `<div class="mb-3">`
        producto.imagenes.forEach(img => {
            html += `<img src="/${img}" width="80" class="me-2" />`
        })
        html += `</div>`
    }

    html += `<p><b>Descripción:</b> ${producto.descripcion}</p>`
    html += `<p><b>Categoría:</b> ${producto.categoria}</p>`
    html += `<p><b>Precio:</b> $${producto.precio}</p>`
    html += `<p><a href="${producto.link}" target="_blank">Consultar por WhatsApp</a></p>`
    html += `<a class="btn btn-secondary" href="/productos">Volver</a>`
    return createPage(producto.nombre, html)
}

export function nuevoProductoForm() {
    let html = `<form action="/productos/nuevo" method="POST">`
    html += `
        <div class="mt-2"><label class="form-label">Nombre</label>
            <input class="form-control" type="text" name="nombre" required /></div>
        <div class="mt-2"><label class="form-label">ID Cliente (opcional)</label>
            <input class="form-control" type="text" name="cliente_id" /></div>
        <div class="mt-2"><label class="form-label">Descripción</label>
            <input class="form-control" type="text" name="descripcion" required /></div>
        <div class="mt-2"><label class="form-label">Precio</label>
            <input class="form-control" type="number" step="0.01" name="precio" required /></div>
        <div class="mt-2"><label class="form-label">Categoría</label>
            <select class="form-control" name="categoria" required>
                ${CATEGORIAS.map(c => `<option value="${c}">${c}</option>`).join("")}
            </select></div>
        <div class="mt-2"><label class="form-label">Imagen (ruta, ej: img/foto.jpg)</label>
            <input class="form-control" type="text" name="imagen" required /></div>
        <div class="mt-2"><label class="form-label">Link (WhatsApp / más info)</label>
            <input class="form-control" type="text" name="link" required /></div>
        <button class="btn btn-primary mt-3" type="submit">Guardar</button>
    `
    html += `</form>`
    return createPage("Nuevo Producto", html)
}

export function editarProductoForm(producto) {
    let html = `<form action="/productos/editar/${producto._id}" method="POST">`
    html += `
        <div class="mt-2"><label class="form-label">Nombre</label>
            <input class="form-control" type="text" name="nombre" value="${producto.nombre}" required /></div>
        <div class="mt-2"><label class="form-label">ID Cliente (opcional)</label>
            <input class="form-control" type="text" name="cliente_id" value="${producto.cliente_id ?? ''}" /></div>
        <div class="mt-2"><label class="form-label">Descripción</label>
            <input class="form-control" type="text" name="descripcion" value="${producto.descripcion}" required /></div>
        <div class="mt-2"><label class="form-label">Precio</label>
            <input class="form-control" type="number" step="0.01" name="precio" value="${producto.precio}" required /></div>
        <div class="mt-2"><label class="form-label">Categoría</label>
            <select class="form-control" name="categoria" required>
                ${CATEGORIAS.map(c => `<option value="${c}" ${c === producto.categoria ? "selected" : ""}>${c}</option>`).join("")}
            </select></div>
        <div class="mt-2"><label class="form-label">Imagen (ruta)</label>
            <input class="form-control" type="text" name="imagen" value="${producto.imagen}" required /></div>
        <div class="mt-2"><label class="form-label">Link</label>
            <input class="form-control" type="text" name="link" value="${producto.link}" required /></div>
        <button class="btn btn-primary mt-3" type="submit">Guardar</button>
    `
    html += `</form>`
    return createPage("Editar Producto", html)
}

export function eliminarProductoForm(producto) {
    let html = `<form action="/productos/eliminar/${producto._id}" method="POST">`
    html += `<p>${producto.nombre} - $${producto.precio}</p>`
    html += `<button class="btn btn-danger">Eliminar</button>`
    html += `</form>`
    html += `<a class="btn btn-secondary" href="/productos">Volver</a>`
    return createPage(producto.nombre, html)
}

export function pageError(codigo, mensaje) {
    return createPage(codigo, mensaje)
}
