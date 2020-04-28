const express = require('express')
const mongoose = require('mongoose')

if (!process.env.ENV_PROD) require('dotenv').config()

const mongodb_URL = `mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@${process.env.MLAB_URL}:61648/k8s-test`
mongoose.connect(mongodb_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
})
mongoose.connection.on('connected', () =>
	console.log('[MongoDB] connection established successfully.')
)
mongoose.connection.on('error', err =>
	console.log(`[MongoDB] connection to mongo failed ${err}.`)
)
mongoose.connection.on('disconnected', () =>
	console.log('[MongoDB] connection closed.')
)
mongoose.set('useCreateIndex', true)

mongoose.Promise = global.Promise

const app = express()

app.get('/healthz', (req, res) => {
	res.status(200).send('health is good')
})

app.get('/', (req, res) => {
	res.send('How are you doing')
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})
