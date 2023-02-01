const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('service is started')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})