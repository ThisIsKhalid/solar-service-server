import express from 'express';
import { ContactController } from './contact.controller';

const router = express.Router();

router.post('/add-contact', ContactController.addContact);

export const ContactRoutes = router;
