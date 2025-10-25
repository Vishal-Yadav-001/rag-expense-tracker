import { Router, Request, Response } from "express";

const router = Router();

// Example route: Parse PDF (stub for now)
router.post("/parse-pdf", async (req: Request, res: Response) => {
  // TODO: add actual PDF parsing logic
  res.json({ message: "PDF parsing endpoint (coming soon)" });
});

// Example route: Ask AI (stub for now)
router.post("/ask", async (req: Request, res: Response) => {
  const { question } = req.body;
  // TODO: add RAG logic
  res.json({ answer: `You asked: ${question}` });
});

export default router;
