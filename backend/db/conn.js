const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://kaioricardo76:kaio75952@api-node.y24fu0u.mongodb.net/apinode?retryWrites=true&w=majority&appName=api-node"
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
