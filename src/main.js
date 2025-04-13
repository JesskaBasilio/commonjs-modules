const {getFullName, productType} = require("./services/products");
const product = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("Carrinho de compras:");

    getFullName("1", "teclado");
    // product.getFullName("408", "mousepad");
    // product.getFullName("508", "mouse");
    // product.getProductLabel("mousepad");

    //console.log(config.client);

    console.log(productType);
    database.connectToDatabase("my-data");
}

main();