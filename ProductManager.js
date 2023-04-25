const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.productos = []
        this.path = path
        this.init(path)
    }
    init(path) {
        let file = fs.existsSync(path)
        if (!file) {
            fs.promises.writeFile(path, '[]')
                .then(res => console.log('created'))
                .catch(err => err)

            var datos1 = require('./data.json')
            let datos = JSON.parse(datos1)

            const contenedorPrincipal = document.querySelector('#contenedorPrincipal')

            datos.forEach((dato => {
                const contenedorProducto = document.createElement('div')
                contenedorProducto.className = "producto"
                contenedorProducto.innerHTML = `
        <p>${dato.nombre}</p>
        <p>${dato.categoria}</p>
        <p>${dato.id}</p>
        `

                contenedorPrincipal.appendChild(contenedorProducto)
            }))
        }
    }
}

let product = new ProductManager('./data.json')



