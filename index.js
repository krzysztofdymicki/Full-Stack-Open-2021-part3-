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


app.get('/api/persons', (request, response, next) => {
    Person
          .find({})
          .then(persons => {
              response.json(persons)
          })
          .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    Person
          .findById(id)
          .then(person => {
            person ? response.json(person)
                   : response.status(404).end()
          })
          .catch(error => next(error))
   
})

app.post('/api/persons', (request, response, next) => {
    const { name, number } = request.body

    const newPerson = new Person({
        name,
        number
    })

    newPerson
             .save()
             .then(savedPerson => {
                 response.json(savedPerson)
             })
             .catch(error => next(error))

})


app.delete('/api/persons/:id', (request, response) => {
    Person
    .findByIdAndDelete(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request,response, next) => {
    const {name, number} = request.body
    const id = request.params.id
    const personToUpdate = {
        name,
        number
    }
    console.log('personToUpdate', personToUpdate)
    Person
          .findByIdAndUpdate(id, personToUpdate, { new:true, runValidators: true, context:'query' } )
          .then(updatedPerson => {
              response.json(updatedPerson)
          })
          .catch(error => next(error))
})

app.get('/info', (request, response) => {

    Person
          .find({})
          .then(persons => {
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
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({
        error: 'unknown endpoint'
    })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if(error.name === 'CastError') {
        return response.status(400).send({
            error: 'malformatted id'
        })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({
            error: error.message,
            name: error.name
        })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () =>
    console.log(`Server running on PORT ${PORT}`)
)