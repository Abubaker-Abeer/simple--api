const express = require('express');
const os = require('os'); 
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the simple API!');
});

let users = [];

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Name and email are required!');
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).send(newUser);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/greet', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.json({ greeting: `Hello, ${name}` });
    } else {
        res.json({ greeting: "Hello, World!" });
    }
});

app.get('/info', (req, res) => {
    const clientIp = req.ip;
    const currentTime = new Date().toISOString();
    const hostName = os.hostname();
    const userCount = users.length;

    res.json({
        time: currentTime,
        client_address: clientIp,
        host_name: hostName,
        user_count: userCount
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
