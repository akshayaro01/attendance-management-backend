const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    debug: true,
    auth: {
        type: 'OAuth2',
        user: 'pubgtrending@gmail.com',
        clientId: '35955691910-apqkm8sh86qkrn31qp2br528jubero3f.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04mfXn_mcPniKCgYIARAAGAQSNwF-L9Irzqs3S0eutvcHPh54A8Ii4FOR12qh15gMRdbkAm9tAVzXaUq4A2mB80oPc055o0gfhUE',
        accessToken: 'ya29.a0Aa4xrXPKTCYuMTVr841oP_q18FEJrYptmGostU1JN53TT4qNvN0Olso0deUqGYy8q2nYImw6TE7T_Sz5ae3ovcvOVFAjFJnV24XzYuEzOvcLEzBOrIKWpojEapCf893AbuvtSWslis8-4nHhOfdoSPTGNc_-aCgYKATASARASFQEjDvL9JTnMmesR5UTG3r215FvgvQ0163'
    }
})

const sendMail = async (email, secretToken, mode) => {
    try {
        if (mode == 'OTP') {

            return await transport.sendMail({
                from: "noreply@akhsay.com",
                to: email,
                subject: "OTP to change password",
                html: `
        <h1>Reset Password</h1>
        <p> Here is your otp to change the password ${secretToken} </p>
      `
            })
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports = sendMail  