const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
    sgMail.setApiKey("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");
    let msg = {
        to:"thomas.orard@ynov.com",
        from:req.body.email,
        subject:`${req.body.subject} from ${req.body.name}`,
        text:req.body.message,
    }
    sgMail.send(msg)
    .then(() => {   
        return res.status(200).json({'message': 'email send'})
    })
    .catch((err) => {
        return res.status(400).json({"err":err})
    })
})

module.exports = {
    path: "middleware/send-email",
    handler: app
}