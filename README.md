# 💰 RAG Expense Tracker  
> Chat with your UPI expenses — an AI-powered tracker built using Retrieval-Augmented Generation (RAG), embeddings, and Node.js.

---

## 🧠 Overview

Managing UPI transactions spread across multiple apps is painful — some don’t even let you export data easily.  
**RAG Expense Tracker** solves this by letting you:
- Upload your **UPI transaction PDFs**
- Extract and vectorize your data
- **Chat** with your expenses using natural language (powered by LLMs)

💬 Example Queries:
> “How much did I spend on Swiggy last month?”  
> “What’s my biggest expense category this week?”  
> “Show me all transactions above ₹1000.”

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Backend** | Node.js, Express.js |
| **AI / RAG** | OpenAI API, LangChain, Chroma / Pinecone |
| **Frontend (coming soon)** | Angular, TypeScript, Tailwind |
| **PDF Parsing** | pdf-parse |
| **Storage** | JSON / MongoDB (future) |

---

## 🧩 Features

✅ Extract text & transactions from PDFs  
✅ Create embeddings and store them in a vector DB  
✅ Query data through LLM using RAG pipeline  
✅ CLI Chat Interface *(Phase 1)*  
✅ Web Chat Interface *(coming soon)*  

---

## 🚀 Roadmap

| Phase | Description | Status |
|--------|--------------|--------|
| **Phase 1** | API + PDF Extraction | 🟡 In Progress |
| **Phase 2** | RAG Pipeline (Retrieval + Generation) | ⏳ Pending |
| **Phase 3** | CLI Chat Interface | ⏳ Pending |
| **Phase 4** | Web App (Angular UI + Charts) | ⏳ Pending |
| **Phase 5** | Deployment (Render / Vercel) | ⏳ Pending |

---

## 🧭 Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourusername/rag-expense-tracker.git
cd rag-expense-tracker
