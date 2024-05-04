import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import { hashPassword } from "../../../helpers/auth-util";
import User from "../../../models/User";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(422).json({
      message: "Method was not POST",
    });
    return;
  }

  const data = req.body;
  const { email, password, username, confirmPassword } = data;

  //server side validation

  if (!email || !password || !username || !confirmPassword) {
    res.status(422).json({
      message: "Email and password must exist",
    });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  if (password !== confirmPassword) {
    res.status(422).json({
      message: "Passwords do not match",
    });
    return;
  }

  if (password.length < 8) {
    res
      .status(422)
      .json({ message: "password must be longer than 8 characters" });
    return;
  }

  function hasLowerCaseAndUpperCase(str) {
    const hasLowerCase = /[a-z]/.test(str);
    const hasUpperCase = /[A-Z]/.test(str);
    return hasLowerCase && hasUpperCase;
  }
  if (!hasLowerCaseAndUpperCase(password)) {
    res.status(422).json({
      message: "Password must have lower and upper case character",
    });
    return;
  }

  function hasNumericCharacter(str) {
    return /\d/.test(str);
  }
  if (!hasNumericCharacter(password)) {
    res.status(422).json({
      message: "Password must have at least one number in it",
    });
    return;
  }

  function hasSpecialCharacter(str) {
    return /[^\w\s]/.test(str);
  }
  if (!hasSpecialCharacter(password)) {
    res.status(422).json({
      message: "Password must have at least one special character",
    });
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    res.status(422).json({ message: "please use valid email" });
    return;
  }

  if (username.length > 30) {
    res
      .status(422)
      .json({ message: "username cannot be longer than 30 characters" });
    return;
  }

  if (username.length < 3) {
    res
      .status(422)
      .json({ message: "username cannot be shorter than 3 characters" });
    return;
  }

  try {
    const emailIsUsed = await User.findOne({ email: email });
    if (emailIsUsed) {
      res.status(422).json({ message: "Email is already in use" });
      mongoose.connection.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const totalLevels = 18; // Zdefiniuj całkowitą liczbę poziomów
    const levelCompletedArray = Array.from({ length: totalLevels }, (v, i) => ({
      level: i + 1,
      isCompleted: false,
    }));

    const user = new User({
      email: email,
      password: hashedPassword,
      username: username,
      levelCompleted: levelCompletedArray,
    });

    await user.save();
    res.status(201).json({ message: "successfully created user" });
  } catch (error) {
    res.status(422).json({ message: "Failed to create user" });
  }

  mongoose.connection.close();
}

export default handler;
