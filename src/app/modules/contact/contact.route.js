import express from "express";
import { contactController } from "./contact.controller.js";

const router = express.Router();

router.post("/add-contact", contactController.addContact);

router.get("/", contactController.getContacts);

export const contactRouter = router;
