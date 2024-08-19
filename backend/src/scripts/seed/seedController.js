// Importa os seeds das categorias
import seedCamiseta from "./seedCamiseta.js";
import seedTenis from "./seedTenis.js";
import seedCalca from "./seedCalca.js";
import seedHeadphone from "./seedHeadphone.js";
import seedBone from "./seedBone.js";

// Função principal para rodar todos os seeds
export const seedController = async () => {
  try {
    console.log("\nIniciando o processo de seeding...\n");

    await seedCamiseta.up(); // Executa o seed da categoria 'Camisetas'
    console.log("\nSeed de camisetas concluído.\n");

    await seedTenis.up(); // Executa o seed da categoria 'Tênis'
    console.log("\nSeed de tênis concluído.\n");

    await seedCalca.up(); // Executa o seed da categoria 'Calças'
    console.log("\nSeed de calças concluído.\n");

    await seedHeadphone.up(); // Executa o seed da categoria 'Headphones'
    console.log("\nSeed de headphones concluído.\n");

    await seedBone.up(); // Executa o seed da categoria 'Bonés'
    console.log("\nSeed de bonés concluído.\n");

    console.log("Seeding de todas as categorias concluído com sucesso!");
  } catch (error) {
    console.error("Erro ao executar o seeding:", error);
  }
};
