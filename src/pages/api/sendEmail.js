const nodemailer = require('nodemailer');
import fs from 'fs';
import path from 'path';

export const sendEmail = async (formData) => {
  try {
    const response = await axios.post('/api/sendEmail', formData);

    if (response.status === 200) {
      setMailSubmitted(true);
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default async function handlerMail (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Handle only POST requests
  }
    
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.elasticemail.com',
      port: 2525,
      secure: false, // true for 465 port, false for other ports
      auth: {
        user: 'yourname@gmail.com', // SMTP username
        pass: 'your pass' // SMTP password
      },
    });
    const emailTemplatePath = path.join(process.cwd(), 'public', 'emailTemplate.html');
    const mailTemplate = fs.readFileSync(emailTemplatePath,'utf-8');
    const modifiedTemplate = mailTemplate
    .replace('{{prenom}}', req.body.prenom)
    .replace('{{nom}}', req.body.nom)
    .replace('{{tel}}', req.body.tel)
    .replace('{{age}}', req.body.age)
    .replace('{{mail}}', req.body.mail)
    .replace('{{adresse}}', req.body.adresse)
    .replace('{{fonction}}', req.body.fonction)
    .replace('{{type}}', req.body.type)
    .replace('{{technologie}}', req.body.technologie)
    .replace('{{place}}', req.body.place)
    .replace('{{longueur}}', req.body.longueur)
    .replace('{{largeur}}', req.body.largeur)
    .replace('{{orientation}}', req.body.orientation)
    .replace('{{puissance}}', req.body.puissance)
    .replace('{{region}}', req.body.region);

    const mailOptions = {
      from: 'ecosolutiontunisie@gmail.com',
      to: 'jacerafayabzeouech@gmail.com',
      subject: 'Formulaire de devis',
      html: modifiedTemplate, // Body text
      // html: '<h1>marhbe djass</h1>', // Body HTML (optional)
    };
    
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email' });
  }
};