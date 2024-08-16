import express from "express";
import { getUsers, loginUser } from "../controllers/userController.js"; // Importa a função loginUser

const router = express.Router();

router.get("/", getUsers);  // Define uma rota GET para "/users" que chama a função getUsers
router.post("/", loginUser);  // Define uma rota POST para "/users" que chama a função loginUser

export default router;
