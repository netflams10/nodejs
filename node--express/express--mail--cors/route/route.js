const nodemailer = require('nodemailer');
const route = require('express').Router();

route.post('/text-mail', (req, res) => {
    const {to, subject, text} = req.body;
    const mailData = {
        from: 'segope44@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>hey there</b><br> Men this is test Email!',
        attachment: {
            filename: 'attachment.png',
            path: '../attached/attachment.PNG'
        }
    }

    transporter.sendMail(mailData, (error, info) => {
        if(error) {
            return error
        }
        res.status(200).send({message: "Mail Sent"})
    })
})

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'segope44@gmail.com',
        pass: 'johnson10'
    },
    secure: true,
})

// const mailData = {
//     from: 'segope44@gmail.com',
//     to: to,
//     subject: subject,
//     text: text,
//     html: '<b>hey there</b><br> Men this is test Email!'
// }

module.exports = route;