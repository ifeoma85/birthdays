const nodemailer = require("nodemailer")
require("dotenv").config()

const sendEmail = async(option)=>{
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth:{
//         user:process.env.AUTH_EMAIL,
//         pass:process.env.AUTH_PASS
//     }
// })
const transporter = nodemailer.createTransport({
    Service: 'gmail',
    auth: {
        user: user,
        pass: pass
    },
    port: 465,
    host: "smtp.gmail.com"
})


    await transporter.sendMail({
      from:process.env.AUTH_EMAIL,
      to:option.email,
      subject:option.subject,
      html:option.html  
    })
}

module.exports = {sendEmail}