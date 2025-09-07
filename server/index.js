import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import {
  contactEmailTemplate,
  confirmationEmailTemplate,
} from "./emailTemplate.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

console.log("SMTP Config:", {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  user: process.env.EMAIL_USER,
});

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true,
  logger: true,
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone, subject } =
    req.body;
  try {
    // Email to team
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: contactEmailTemplate({
        firstName,
        lastName,
        email,
        message,
        phone,
        subject,
      }),
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Le Hayaa!",
      html: confirmationEmailTemplate({ firstName, lastName }),
    });

    res
      .status(200)
      .json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send emails" });
  }
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});