const express = require('express')
const app = express()

app.use(express.json())

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

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    person ? response.json(person)
           : response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        persons = persons.filter(p => p.id !== id)
        response.status(204).end()
    }
    else response.status(404).end()
})

app.post('/api/persons', (request, response) => {
    const newPerson = {...request.body, id: Math.round(Math.random()*100000)}
    persons = persons.concat(newPerson)
    response.json(newPerson)
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