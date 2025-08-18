📧 AI Email Writer – Your AI-Powered Writing Assistant  
AI Email Writer is a GenAI-powered assistant that helps you draft professional, polite, or casual emails in seconds. It leverages advanced AI techniques like Prompting, RAG (Retrieval-Augmented Generation), Structured Output, and Function Calling to generate high-quality, context-aware email drafts for both personal and professional use.

---

🚀 Features  

✍️ Context-Aware Prompting  
Enter a short instruction (e.g., "Apology for being late") and get a complete, well-written email.  

📚 RAG Integration  
Pulls context from your past emails, templates, or company guidelines to create accurate, personalized drafts.  

🧾 Structured Output  
Delivers responses in structured formats (subject, greeting, body, closing, signature) for easy UI rendering or API use.  

⚙️ Function Calling  
Connects with tools like Calendar or Contact APIs to automatically insert meeting times, recipient names, or follow-up reminders.  

💡 Use Cases  
- Job Applications  
- Apology & Follow-up Emails  
- Client Communication  
- Meeting Requests & Scheduling  
- Personal Notes  

---

🧠 Core AI Concepts Used  

| Concept            | Usage in AI Email Writer |
|--------------------|---------------------------|
| Prompting          | Guides LLM to generate emails with desired tone and intent |
| RAG                | Retrieves templates, past drafts, and guidelines for accuracy |
| Structured Output  | Provides email sections (subject, body, closing) in JSON/text |
| Function Calling   | Connects to APIs for calendar events, contacts, or auto-signatures |

---

🛠️ Tech Stack  

| Layer       | Technology |
|-------------|------------|
| Frontend    | React.js + Tailwind CSS |
| Backend     | Node.js + Express.js |
| AI Core     | OpenAI GPT / LangChain |
| RAG Layer   | Vector DB (ChromaDB / FAISS) |
| Auth        | JWT / OAuth (optional) |

---

🔧 Sample Function Calls  

```js
generateEmail({
  prompt: "Follow-up after an interview",
  tone: "Formal"
})

getContactDetails("Jane Doe")

scheduleMeeting("2025-08-21 10:00AM", "Project Kickoff")

