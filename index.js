const express = require('express')
const app = express()

let persons = [
    {
        id: 1,
        name: 'Krzysztof',
        number: 123456
    },
    {
        id: 2,
        name: 'Albert',
        number: 1234567
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`<html>
    <head>
        <title>Info</title>
    </head>
    <body>
        <h3>this phonebook has ${persons.length} persons in it</h3>
        <h3>${new Date()}</h3>
    </body>
</html>`)
})

const PORT = 3001
app.listen(PORT, () =>
    console.log(`Server running on PORT ${PORT}`)
)