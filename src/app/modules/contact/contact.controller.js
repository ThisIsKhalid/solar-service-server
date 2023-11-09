import prisma from "../../../shared/prisma.js";

const addContact = async (req, res) => {
  const data = req.body;
  try {
    const result = await prisma.contact.create({ data });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getContacts = async (req, res) => {
  try {
    const result = await prisma.contact.findMany();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const contactController = {
  addContact,
  getContacts
};
