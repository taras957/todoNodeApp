const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(cors())
app.use(bodyParser.json())

// Import Routes
const todosRoute = require('./routes/todos')
app.use('/',todosRoute )
''

// Connect DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true,useUnifiedTopology: true },()=> {
    console.log('conected777')
})

// listeners
const port =process.env.PORT || 3000;
app.listen(port)