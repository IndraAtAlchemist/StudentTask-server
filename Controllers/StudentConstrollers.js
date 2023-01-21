import  StudentModel from "../Models/StudentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerStudent = async (req,res)=>{
      
     console.log("indra");
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const {username} = req.body;
    const newUser = new StudentModel(req.body);
    try {
      const oldUser = await StudentModel.findOne({ username });
      if (oldUser)
        return res.status(400).json({ message: "User already exists" });
  
      const user = await newUser.save();
      const token = jwt.sign(
        { username: user.username, id: user._id },
        "mern"
      );

      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

