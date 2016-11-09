const app = require('express')()

app.get('/', (req, res) =>
    res.send('Zajebiscie!')
)

app.listen()