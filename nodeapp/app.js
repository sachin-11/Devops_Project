const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('service is started.')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})