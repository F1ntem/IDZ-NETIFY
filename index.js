const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/send-message', (req, res) => {
  res.send('Netify Test');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
