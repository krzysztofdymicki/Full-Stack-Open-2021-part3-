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

const PORT = 3001
app.listen(PORT, () =>
    console.log(`Server running on PORT ${PORT}`)
)