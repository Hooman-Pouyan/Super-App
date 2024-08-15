import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

export default function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // For simplicity, we use hardcoded credentials.
    if (username === "admin" && password === "admin") {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      return res.status(200).json({ token });
    }

    return res.status(401).json({ error: "Invalid credentials" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
