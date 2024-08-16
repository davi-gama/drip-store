import { Router } from 'express';  // Importa o Router do Express
import userRoutes from './userRouter.js';  // Importa as rotas do usuário

const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Hello World" });  // Define a rota raiz que retorna um JSON com a mensagem "Hello World"
});

// Rotas de usuário
router.use('/users', userRoutes);  // Usa as rotas de usuário sob o caminho base /users 

export default router;  // Exporta o router configurado
