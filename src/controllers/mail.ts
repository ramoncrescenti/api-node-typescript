import { Response } from 'express';
import {
  ContainerTypes,
  ValidatedRequest,
  ValidatedRequestSchema,
} from 'express-joi-validation';
import { sendMail as sendMailService, MailParams } from '../services/mail';

interface SendMailRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: MailParams;
}

export async function sendMail(
  req: ValidatedRequest<SendMailRequestSchema>,
  res: Response
) {
  const user: MailParams = {
    email: req.body.email,
    receiver: req.body.receiver,
    subject: req.body.subject,
    text: req.body.text,
  };
  const retorno = await sendMailService(user);
  res.status(200).json(retorno);
}
