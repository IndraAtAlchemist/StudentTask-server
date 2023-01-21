
import  cors from "cors";
import  StudentRoutes from  "./Routes/StudentRoutes.js";
import UploadRoute from "./Routes/UploadRoutes.js"
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import express from "express";

const app = express();

app.use(express.static('public'))
app.use('/images',express.static("images"))

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.post("/student",(req,res)=>{
//   console.log(req.body);
// });

app.use("/student",StudentRoutes);
app.use('/upload', UploadRoute)

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://indraAtAlchemist:9826391787@cluster0.mrpdxs5.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    console.log("connected")
  )
  .catch((e) => console.log(e));




app.listen(5001,()=>{
  console.log("5001");
})

