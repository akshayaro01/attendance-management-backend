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
        refreshToken: '1//04gTv7Wsy0rSCCgYIARAAGAQSNwF-L9IrCzSRD3Z4G53COuQ10pQ7OxDxG0uZiBsri0R-RzccCtlecXKQuxXhAGFo8JWiHmcGAVE',
        accessToken: 'ya29.A0ARrdaM_RC9RR2dTygFEApWuKZlzs4M_cAmI8aqwK6VLH5a2nrsfVONhHPAeY3AsraA8BF1OLIwrDA1vFM_vdjgt-UePvk8QZvdsUstRxqFpoGnMNYHbC-ux9bNdevXHLDD1m86bbPlG7RX5kzF2g3oBM6hmw'
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