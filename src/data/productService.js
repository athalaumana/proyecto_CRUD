const fs = require('fs');
const path = require('path');
let products = require("./productsDataBase.json"); // Esta línea también permite inportar el archivo JSON y el "require" es el que se encarga de parsear la información JSON a JS

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productService = {
    products: products, // Cuando se usa la línea 3, solo es necesario poner el nombre de la variable y se evita esta línea --> JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')),   // Lee el archivo JSON con todos los productos, y lo parsea a JS.
    
    getAll: function(){return this.products},   // Esta función trae todos los productos de la lectura del archivo JSON
    getOneBy: function(id){return this.products.find(product => product.id == id)},  //Esta función recibe el "req" complet con la información de un solo producto que se desea ver, y usa el req.params.id que se requiere para buscar ese solo producto
    save: function(product){
        //OJO!!! Generar el id del nuevo producto. Tener en cuenta buscar el id mas grande para generar el del nuevo producto.
        this.products.push(product);  // Guarda al final del array de productos, el objeto del producto creado.
        fs.writeFileSync(path.resolve(__dirname, "../data/productsDataBase.json"), JSON.stringify(this.products));  // Escribe en el archivo TODOS los productos, incluyendo el nuevo que ha sido creado.
        return "OK"  // Retorna un Ok para realizar las validaciones de la creación del producto
    },  //OJO!!! Los campos del formulario "price" y "discount" están como STRING, por lo cual hay que cambiarlos a numéricos.
}

module.exports = productService ;