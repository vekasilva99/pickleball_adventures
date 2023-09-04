const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const {prueba} = require('../mail_templates');
const ejs = require("ejs");

function toBase64(filePath) {
  const img = fs.readFileSync(filePath);

  return Buffer.from(img).toString('base64');
}

const sendEmail = async (email, subject, payload, template) => {
  console.log('entre')
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vekasilva99@gmail.com',
            pass: 'ttufeagxccmjqjfv',
        }
    });

    console.log('kmjnhbgvfcgvhbjnkml',__dirname)
    console.log('kmjnhbgvfcgvhbjnkml')
   if(template !="newUser"){
    ejs.renderFile("/Users/veka/Desktop/pickelball-adventures2/server/pages/api/utils/bookingConfirmationEmailTemplate.ejs", payload, function (err, data) {
      if (err) {
          console.log(err);
      } else {
        const options = () => {
          return {
            from: 'vekasilva99@gmail.com',
            to: email,
            subject: subject,
            html: data,
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
        }
    });
   }else{
    const options = () => {
      return {
        from: 'vekasilva99@gmail.com',
        to: email,
        subject: subject,
        html:prueba(payload) ,
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

   }

  

  } catch (error) {
    return error;
  }
};

/*
Example:
sendEmail(
  "youremail@gmail.com,
  "Email subject",
  { name: "Eze" },
  "./templates/layouts/main.handlebars"
);
*/

module.exports = sendEmail;