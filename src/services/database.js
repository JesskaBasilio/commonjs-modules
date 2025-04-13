//export default (por padrão a função nasce sendo exportada)
//funções assíncronas são aquelas que você pode pedir para o node
//esperar executar elas antes de continuar, não executa em paralelo igual o nado sincronizado.

//export default async
exports.connectToDatabase = async (dataName) => {
    console.log("se conectando ao banco: " + dataName);
}

exports.disconnectDatabase = async () => {
    // lógica
    console.log("desconectando");
}