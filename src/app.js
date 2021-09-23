const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");
const port = process.env.PORT || 3500;
require('dotenv').config();

// static folder
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// body Parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send();
});

app.post("/send", (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>First Name: ${req.body.firstname}</li>
    <li>Last Name: ${req.body.lastname}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>Message: ${req.body.message}</p>
`
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        // port: 465,
        // secure: true, // true for 465, false for other ports
        // logger: true,
        // debug: true,
        // secureConnection: false,
        host: 'smtp.gmail.com',
        port: 25,
        secure: false,
        logger: true,
        debug: true,
        ignoreTLS: true,
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: 'harshitsingh160@gmail.com', // sender address
        to: 'harshitsingh160@gmail.com', // list of receivers
        subject: 'Testing', // subject line
        text: 'I would like to get in touch with you', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error Occurs ', err);
        } else {
            console.log('Email Sent');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening the port at ${port}`);
});