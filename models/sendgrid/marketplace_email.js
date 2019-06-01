"use strict"

const sgMail = require('@sendgrid/mail');




sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let mailSettings = {
    from: "admin@isubasinghe.me",
    subject: "Foodspan: Someone wants to buy from you",
    message: "A user wants to buy one of your products. To find out more, please contact them on ",
}


// Send a verification email with a link to 
// click on, in order to verify the account.
function marketplace_communicate(seller_email, buyer_email) {
    const msg = {
        to: seller_email,
        from: mailSettings.from,
        subject: mailSettings.subject,
        text: mailSettings.message + buyer_email,
        html: mailSettings.message + buyer_email
    }
    return sgMail.send(msg);
}


module.exports = marketplace_communicate;