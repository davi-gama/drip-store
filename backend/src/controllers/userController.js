import configDB from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await configDB.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await configDB.query(
      "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
      [email, password]
    );

    if (rows.length > 0) {
      res.status(200).json({ message: "Login bem-sucedido", user: rows[0] });
    } else {
      res.status(400).json({ message: "Email ou senha inválidos" });
    }
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Database query failed" });
  }
};
