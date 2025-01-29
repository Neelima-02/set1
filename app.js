const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    
    console.log('User registered:', { name, email });

    
    return res.status(201).json({
        message: 'Registration successful',
        user: { name, email }
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
