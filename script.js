const sendBtn = document.getElementById("send");
const promptEl = document.getElementById("prompt");
const replyEl  = document.getElementById("reply");

// REMPLACE TON_TOKEN_ICI_PAR_TA_CLE par ta vraie clé OpenAI
const API_KEY = "TON_TOKEN_ICI_PAR_TA_CLE";

sendBtn.onclick = async () => {
  const message = promptEl.value;
  replyEl.textContent = "…chargement…";
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4-turbo",
        messages: [{ role: "user", content: message }]
      })
    });
    const data = await res.json();
    replyEl.textContent = data.choices[0].message.content.trim();
  } catch (e) {
    replyEl.textContent = "Erreur : " + e.message;
  }
};
