const nodemailer = require('nodemailer');

const sendEmail = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,

      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL,
      to: req.body.to,
      subject: req.body.subject,
      content: req.body.content,
    });

    res.json('email sent sucessfully');
  } catch (error) {
    res.json(error.message, 'email not sent');
  }
};

module.exports = { sendEmail };
