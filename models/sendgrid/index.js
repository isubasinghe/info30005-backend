"use strict"

const sgMail = require('@sendgrid/mail');



// WHAT THE ACTUAL HELL, THIS WASNT NEEDED WHEN WE 
// TESTED THE ENDPOINT, THIS IS MEANT TO BE AUTOMITICALLY LOADED
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let mailSettings = {
    from: "admin@isubasinghe.me",
    subject: "Account verification with foodspan",
    textPre: "Click on " + process.env.HOST + "/verify/",
    textPost: " to verify your account",
    htmlPre: "Click on " + process.env.HOST + "/verify/",
    htmlPost: " to verify your account"
}


// Send a verification email with a link to 
// click on, in order to verify the account.
function emailUser(email, key) {
    const msg = {
        to: email,
        from: mailSettings.from,
        subject: mailSettings.subject,
        text: mailSettings.textPre + key + mailSettings.textPost,
        html: mailSettings.htmlPre + key + mailSettings.htmlPost
    }
    return sgMail.send(msg);
}


module.exports = emailUser;