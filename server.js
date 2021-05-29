const express = require('express')
const app = express()

app.get('/', (req, res) => res.send({msg: 'Welcome to the ContactKeeper API...'}))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


const PORT = process.env.PORT || 5000

// the app listen to the given port value regardless of other. this lets us to start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))