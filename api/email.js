import nodemailer from 'nodemailer'

export function handler(request, response) {
  const { name, message, email } = request.body

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'jordanquan5@gmail.com',
      pass: process.env.GMAIL_PASSWORD
    }
  })

  const mailOptions = {
    to: 'jordanquan5@gmail.com',
    subject: 'Portfolio Contact',
    text: `From: ${name} <${email}>\n\n${message}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return response.status(500).json({ message: 'error sending message' })

    return response.status(200).json({ message: 'success', info })
  })
}

export default handler
