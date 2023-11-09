import { Contact } from '@prisma/client';
import prisma from '../../../shared/prisma';

const addContact = async (data: Contact): Promise<Contact> => {
  const result = await prisma.contact.create({
    data,
  });

  return result;
};

export const ContactService = {
  addContact,
};
