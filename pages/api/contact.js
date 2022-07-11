const finalQueryUrl = `${process.env.firebasedb_url}contact_requests.json`;

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    //Store it in a database
    const newMesage = {
      email,
      name,
      message,
    };

    console.log(newMesage);
    fetch(finalQueryUrl, {
      method: 'POST',
      body: JSON.stringify(newMesage),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        res.status(201).json({
          message: 'Successfully stored message!',
          message: newMesage,
        });
      })
      .catch((error) => {
        console.log(`Failed to send contact request: ${error}`);
        res.status(500).json({ message: 'Storing message failed' });
      });
  }
}

export default handler;
