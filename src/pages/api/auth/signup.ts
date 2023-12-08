import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({ message: "Invalid input" });
    }

    const hashedPassword = await hashPassword(password);
    const client = await connectToDatabase();
    if (!client) {
      return new Error("");
    }
    const db = client.db();

    const existingUser = await db.collection('users').findOne({email})

    if(existingUser){
        return res.status(422).json({message: 'user already exist'})
    }

    const result = await db
      .collection("users")
      .insertOne({ email, hashedPassword });

    res.status(201).json({ message: "Created user! " });
    client.close()
  }
};

export default handler;
