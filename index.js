require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/Person')
const morgan = require('morgan')
const cors = require('cors')
app.use(cors())
app.use(express.json())
morgan.token('content', (request,response) => JSON.stringify(request.body))
app.use(morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      tokens.content(req,res)
    ].join(' ')
  })
  )
app.use(express.static('build'))


app.get('/api/persons', (request, response) => {
    Person
          .find({})
          .then(persons => {
              console.log('persons finded by Mongo',persons )
              console.log("type of id", typeof persons[0]._id)
              response.json(persons)
          })
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    Person
          .findById(id)
          .then(person => {
            person ? response.json(person)
                   : response.status(404).end()
          })
          .catch(error => {
              console.log(error)
          })
   
})

app.post('/api/persons', (request, response) => {
    const { name, number } = request.body

    /*if(persons.find(p => p.name === name || p.number === number)) {
        return response.status(400).json({
            error: 'number or name already exists in the database'
        })
    }*/

    const newPerson = new Person({
        name: name,
        number: number
    })

    newPerson
             .save()
             .then(savedPerson => {
                 response.json(savedPerson)
             })

})

/*
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        persons = persons.filter(p => p.id !== id)
        response.status(204).end()
    }
    else response.status(404).end()
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
})*/

const PORT = process.env.PORT
app.listen(PORT, () =>
    console.log(`Server running on PORT ${PORT}`)
)