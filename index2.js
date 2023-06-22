const express = require('express');
  const axios = require('axios');

  const app = express();

  // Parse JSON request bodies
  app.use(express.json());

  // POST endpoint
  app.post('/send-email', async (req, res) => {
    try {
      const { recipient, subject, content } = req.body;
      const response = await axios.post('https://api.elasticemail.com/v2/email/send', {
        apikey: '47990C4D7BD8AECD9989D089689B7363099C427C27436161B0433F70D8EF41167AE80D9FADB69C539C7AF13737B3E3C2',
        subject,
        from: 'aryasantu41@gmail.com',
        to: recipient,
        bodyHtml: content,
      });

      console.log('Email sent:', response.data);

      res.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });