const express = require('express')
const mongoose = require('mongoose')

mongoose
	.connect(
		`mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mlab:61648/k8s-test`
	)
	.then(() => {
		console.log('[MongoDB] Connected Successfully.')
	})
	.catch(err => {
		console.log('[MongoDB] connection unsuccessful.', err)
	})

const app = express()

app.get('/healthz', (req, res) => {
	res.status(200).send('health is good')
})

app.get('/', (req, res) => {
	res.send('How are you doing')
})

app.listen(8080, () => {
	console.log('Listening on port 8080')
})

/*
  DBpass:
    username: afsan007
    password: af930611040
*/
