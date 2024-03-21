const productService = require("../data/productService");  // Importa el archivo productService donde está toda la información de los productos


const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.send(productService.getAll()).status(200);  // .status(200) se agrega para cuando se utilizarán APIs con nuestra App.
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.send(productService.getOneBy(req.params.id)).status(200);  // Le envía como argumento de la función el "req" completo, para que en el service, pueda recuperar la información que necesite, en este caso el req.params.id
		//res.render("detail");   // Se necesita renderizar la vista del detalle de producto.
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form");  // Para crear un producto primero tiene que renderizar la vista con el request GET
	},
	
	// Create -  Method to store
	store: (req, res) => {
		productService.save(req.body); // Llama ejecución del método "save" del productService y envía la información con el req-body.
		res.send(req.body); // Permite verificar la información del producto creado que se envía al productService
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;