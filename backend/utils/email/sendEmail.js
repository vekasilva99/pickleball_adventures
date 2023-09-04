const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const {prueba,reservationConfirmation,newUser} = require('../mail_templates');
const ejs = require("ejs");

function toBase64(filePath) {
  const img = fs.readFileSync(filePath);

  return Buffer.from(img).toString('base64');
}

const sendEmail = async (email, subject, payload, template) => {

  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vekasilva99@gmail.com',
            pass: 'ttufeagxccmjqjfv',
        }
    });

   
    const options = () => {
      return {
        from: 'vekasilva99@gmail.com',
        to: email,
        subject: subject,
        html:template !="newUser" ? reservationConfirmation(payload) :newUser(payload) ,
      };
    };

    // Send email
    transporter.sendMail(options(), (error, info) => {
      if (error) {
        return error;
      } else {
        return res.status(200).json({
          success: true,
        });
      }
    });

  

  } catch (error) {
    return error;
  }
};



module.exports = sendEmail;