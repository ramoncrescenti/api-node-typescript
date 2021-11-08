import * as mailjet from 'node-mailjet';

const mjPrivateKey = process.env.MJ_PRIVATE_KEY ?? '';
const mjPublicKey = process.env.MJ_PUBLIC_KEY ?? '';
const companyEmail = process.env.MAIN_SENDER_EMAIL ?? '';

export interface MailParams {
  email: string;
  receiver: string;
  subject: string;
  text: string;
}

const mailService = mailjet.connect(mjPublicKey, mjPrivateKey);

export async function sendMail(mailBody: MailParams) {
  return mailService.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: companyEmail,
          Name: 'Tom',
        },
        To: [
          {
            // FIXME: TESTANDO ERRO
            Email: mailBody.receiver,
            Name: mailBody.receiver,
          },
        ],
        Subject: mailBody.subject,
        TextPart: mailBody.text,
      },
    ],
  });
}
