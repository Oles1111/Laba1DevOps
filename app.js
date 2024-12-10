import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});

export default app; // Экспорт по умолчанию
