const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(
	`mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@${process.env.MLAB_URL}:61648/k8s-test`,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	}
)
mongoose.connection.on('connected', () => {
	console.log('[MongoDB] connection established successfully')
})
mongoose.connection.on('error', err => {
	console.log(`connection to mongo failed ${err}`)
})
mongoose.connection.on('disconnected', () => {
	console.log('mongo db connection closed')
})
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

/*
  DBpass:
    username: afsan007
    password: af930611040
*/
