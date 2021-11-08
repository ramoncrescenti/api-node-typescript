import { Response } from 'express';
import {
  ContainerTypes,
  ValidatedRequest,
  ValidatedRequestSchema,
} from 'express-joi-validation';
import { MailError } from '../errors/mail-error';
import { sendMail as sendMailService, MailParams } from '../services/mail';
import { Email } from 'node-mailjet';

interface SendMailRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: MailParams;
}

export async function sendMail(
  { body }: ValidatedRequest<SendMailRequestSchema>,
  res: Response
) {
  const user: MailParams = {
    email: body.email,
    receiver: body.receiver,
    subject: body.subject,
    text: body.text,
  };
  let retorno;
  try{
    retorno = await sendMailService(user);
  } catch(e: any) {
    throw new MailError(e.message.toString());
  }
  res.status(200).json(retorno.body.Messages);
}
