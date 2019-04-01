"use strict"

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.PORT);
console.log(process.env.SENDGRID_API_KEY);


let mailSettings = {
    from: "admin@isubasinghe.me",
    subject: "Account verification with foodspan",
    textPre: "Click on " + process.env.HOST + "/verify/",
    textPost: " to verify your account",
    htmlPre: "",
    htmlPost: ""
}


function email(email, key) {
    const msg = {
        to: email,
        from: mailSettings.from,
        subject: mailSettings.subject,
        text: mailSettings.textPre + key + mailSettings.textPost,
        html: mailSettings.htmlPre + key + mailSettings.htmlPost
    }
    return sgMail.send(msg);
}


module.exports = email;