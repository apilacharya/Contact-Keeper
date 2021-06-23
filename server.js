import * as dotenv from 'dotenv'
dotenv.config()

import express, { json } from 'express'
import connectDB from './database/db'
import path from 'path'

import userRoute from './routes/users'
import authRoute from './routes/auth'
import contactRoute from './routes/contacts'


const app = express()

console.log(process.env.MONGO_URI)
// Connect Database
connectDB()

// Init middleware
app.use(json({extended: false}))



// Define Routes
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/contacts', contactRoute)


// Serve static assests in production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

const PORT = process.env.PORT || 5000

// the app listen to the given port value regardless of other. this lets us to start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))