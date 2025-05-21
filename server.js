const express = require('express');
const app = express();

app.use(express.json());

// WhatsApp Webhook Endpoint
app.post('/whatsapp-webhook', (req, res) => {
  const message = req.body.Body; // Incoming message text
  const sender = req.body.From;  // Sender's WhatsApp number (e.g., "whatsapp:+1234567890")
  
  console.log(`📩 New message from ${sender}: "${message}"`);
  
  // Optional: Auto-reply (uncomment to enable)
  // const twiml = new MessagingResponse();
  // twiml.message("Thanks for your message! We'll reply soon.");
  // res.type('text/xml').send(twiml.toString());
  
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));