📧 AI Email Writer – Your AI-Powered Writing Assistant  
AI Email Writer is an intelligent GenAI-based assistant that helps you draft professional, polite, or casual emails in seconds. It adapts to your prompt, preferred tone, and context to deliver high-quality, human-like email drafts using state-of-the-art AI techniques like Prompt Engineering, Structured Output, and Function Calling.

---

🚀 Features  

✍️ Context-Aware Writing  
Generate polished emails tailored to your input and chosen tone (Formal, Friendly, Casual, Apologetic).  

📚 Prompt Templates  
Choose from common scenarios like "Job Application," "Apology," "Follow-up," or "Meeting Request."  

⚙️ Function Calling (API Tool Use)  
Integrates with calendar and contact APIs (optional) to auto-fill names, meeting dates, and times.  

🧾 Structured Output  
Returns cleanly formatted email drafts (JSON or plain text) for easy copy-paste or UI rendering.  

💡 Use Cases  
- Job Applications  
- Apologies and Follow-ups  
- Client Outreach  
- Meeting Requests  
- Personal Notes  

---

🧠 Core AI Concepts Used  

| Concept           | Usage in AI Email Writer |
|-------------------|---------------------------|
| Prompting         | Guides the LLM to produce emails that match tone and intent |
| Structured Output | Provides email body, subject line, and signature in structured format |
| Function Calling  | Connects to helper APIs (calendar, contacts) for personalization |

---

🛠️ Tech Stack  

| Layer       | Technology |
|-------------|------------|
| Frontend    | React.js + Tailwind CSS |
| Backend     | Node.js + Express.js |
| AI Core     | OpenAI GPT / LangChain |
| Auth        | JWT / OAuth (optional) |

---

🔧 Sample Function Calls  

```js
generateEmail({
  prompt: "Apology for missing a deadline",
  tone: "Formal"
})

getContactDetails("John Doe")

scheduleMeeting("2025-08-20 3:00PM", "Project Review")
