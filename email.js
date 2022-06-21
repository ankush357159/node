const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ankush357159@gmail.com',
        pass: 'classmate123)'
    }
})

const mailOptions = {
    from: 'ankush357159@gmail.com',
    to: 'ankush.wankar@yahoo.com',
    subject: 'Sending mail using node',
    text: `Hi, 
    Hope you are fine and doing well. 
    See you soon.

    Regards
    Ankush 
    `
}

async function send() {
    const result = await transporter.sendMail(mailOptions,)
}

send()