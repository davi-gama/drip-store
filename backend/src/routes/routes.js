import { Router } from 'express';
import { getUsers, loginUser, createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = Router();

// Página inicial
router.get("/", (req, res) => {
    return res.json({ message: "Olá camarada, seja bem-vindo!" });
});

// Rotas de usuários
router.post("/users/login", loginUser);  // Login de usuário
router.post("/users/cadastro", createUser); // Cadastro de usuário
router.get("/users/:id", getUserById); // Obter usuário por ID
router.put("/users/:id", updateUser); // Atualizar usuário
router.delete("/users/:id", deleteUser); // Deletar usuário
router.get("/users", getUsers); // Listar todos os usuários

// Rotas de produtos
router.get("/products", getProducts); // Listar todos os produtos
router.get("/products/:id", getProductById); // Obter um produto por ID

export default router;
