// Importa os seeds das categorias
import seedCamiseta from "./seedCamiseta.js";
import seedTenis from "./seedTenis.js";
import seedCalca from "./seedCalca.js";
import seedHeadphone from "./seedHeadphone.js";
import seedBone from "./seedBone.js";

// Função principal para rodar todos os seeds
export const seedController = async () => {
  try {
    console.log("Iniciando o processo de seeding...");

    await seedCamiseta.up(); // Executa o seed da categoria 'Camisetas'
    console.log("Seed de camisetas concluído.");

    await seedTenis.up(); // Executa o seed da categoria 'Tênis'
    console.log("Seed de tênis concluído.");

    await seedCalca.up(); // Executa o seed da categoria 'Calças'
    console.log("Seed de calças concluído.");

    await seedHeadphone.up(); // Executa o seed da categoria 'Headphones'
    console.log("Seed de headphones concluído.");

    await seedBone.up(); // Executa o seed da categoria 'Bonés'
    console.log("Seed de bonés concluído.");

    console.log("Seeding de todas as categorias concluído com sucesso!");
  } catch (error) {
    console.error("Erro ao executar o seeding:", error);
  }
};
