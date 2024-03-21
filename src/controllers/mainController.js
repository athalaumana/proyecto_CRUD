/*const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");*/

// Las líneas 1 al 9 no se necesitan en los CONTROLADORES porque ya se están usando en el SERVICE (productService.js)

const productService = require("../data/productService");  // Importa el archivo productService donde está toda la información de los productos

const controller = {
	index: (req, res) => {
		res.render("index")
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
