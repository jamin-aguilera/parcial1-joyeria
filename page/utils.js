export function createPage(title, content) {
    let html = "<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'>"
    html += `<title>${title}</title>`
    html += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">`
    html += `<link href="/css/style.css" rel="stylesheet">`
    html += "</head><body>"
    html += `
    <nav class="navbar navbar-light bg-pink px-3">
        <a class="navbar-brand" href="/">Joyería</a>
        <div>
            <a class="btn btn-outline-dark btn-sm" href="/productos">Productos</a>
            <a class="btn btn-outline-dark btn-sm" href="/productos/nuevo">Nuevo</a>
        </div>
    </nav>`
    html += `<div class="container mt-4"><h1>${title}</h1>`
    
    html += content
    html += "</div></body></html>"
    return html
}
