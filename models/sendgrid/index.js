"use strict"

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID);


let mailSettings = {
    from: "admin@isubasinghe.me",
    subject: "Account verification with foodspan",
    textPre: "",
    textPost: "",
    htmlPre: "",
    htmlPost: ""
}


function email(options) {
    const msg = {
        to: options.email,
        from: mailSettings.from,
        subject: mailSettings.subject,
        text: mailSettings.textPre + options.key + mailSettings.textPost,
        html: mailSettings.htmlPre + options.key + mailSettings.htmlPost
    }
    sgMail.send(msg);
}


module.exports = email;