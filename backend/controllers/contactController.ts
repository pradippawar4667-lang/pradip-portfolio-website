import { Request, Response } from "express";
import db from "../models/db.js";

export const submitContact = (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const stmt = db.prepare(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)"
    );

    const info = stmt.run(name, email, message);

    console.log(`Contact message saved with ID: ${info.lastInsertRowid}`);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      id: info.lastInsertRowid
    });

  } catch (error) {
    console.error("Error in submitContact:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};