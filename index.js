const app = require('express')()

const sgMail = require('@sendgrid/mail')

require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const senderEmail = 'thatanjan@gmail.com'
const recieverEmail = 'anjanbiber@gmail.com'

const msg = {
	to: recieverEmail,
	from: senderEmail,
	subject: 'App',
	text: 'This is a test email',
	html: '<h1>This is a test email</h1>',
}

app.get('/', (req, res) => {
	sgMail
		.send(msg)
		.then(() => console.log('Email sent'))
		.catch((error) => console.error(error.response.body))

	return res.send('Email sent!')
})

app.listen(8000, () => console.log(`http://localhost:8000`))
