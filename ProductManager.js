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
                .then(res => res)
                .catch(err => err)
        }
        else {
            fs.promises.readFile(path)
                .then(res => {
                    this.productos = JSON.parse(res)
                    return res
                })
                .catch(err => console.log(err))
        }
    }
    add_product({ nombre, categoria, precio }) {
        let product = { nombre, categoria, precio }
        product.id = 1
        this.productos.push(product)
        product = JSON.stringify(product, null, 2)
        fs.promises.writeFile(this.path, product)
            .then(res => ('producto creado'))
            .catch(err => err)
    }
}

let product = new ProductManager('./data/data.json')
product.add_product({ nombre: "iphone 14", categoria: "celulares", precio: 134500 })
product.add_product({ nombre: "iphone 13", categoria: "celulares", precio: 145500 })