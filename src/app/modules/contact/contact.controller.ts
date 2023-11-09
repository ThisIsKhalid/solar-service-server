import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ContactService } from "./contact.service";

const addContact = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.addContact(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contact added successfully',
    data: result,
  });
});

export const ContactController = {
  addContact,
};
