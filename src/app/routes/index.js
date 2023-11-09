import express from "express";
import { contactRouter } from "../modules/contact/contact.route.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/contacts",
    route: contactRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
